var crypto = require("crypto");
import connectDB from "@/middleware/conn";
import Order from "../../models/Order"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

            const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEYSECRET).update(body.toString()).digest('hex');
            if (expectedSignature === req.body.razorpay_signature) {
                await connectDB();
                await Order.findOneAndUpdate({ orderID: req.body.razorpay_order_id }, { status: "Paid", paymentInfo: JSON.stringify(req.body) });
            }
            res.redirect('/order')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}