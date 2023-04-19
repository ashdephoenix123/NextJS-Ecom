var crypto = require("crypto");
import connectDB from "@/middleware/conn";
import Order from "../../models/Order"
import Product from "@/models/Product";

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

            const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEYSECRET).update(body.toString()).digest('hex');
            if (expectedSignature === req.body.razorpay_signature) {
                await connectDB();
                const check = await Order.findOneAndUpdate({ orderID: req.body.razorpay_order_id }, { status: "Paid", paymentInfo: req.body, paymentID: req.body.razorpay_payment_id});
                Object.keys(check.products).map(async (item) => {
                    await Product.findOneAndUpdate({productId: item}, {$inc: {availableQty: -check.products[item].quantity}})
                })

            }
            res.redirect(`/order?id=${req.body.razorpay_order_id}&clearCart=true`)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}