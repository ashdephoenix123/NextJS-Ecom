const Razorpay = require('razorpay')
import connectDB from "@/middleware/conn"
import Order from "../../models/Order"

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {

            let instance = new Razorpay({ key_id: process.env.RAZORPAY_KEYID, key_secret: process.env.RAZORPAY_KEYSECRET })

            const resp = await instance.orders.create({
                amount: req.body.subtotal * 100,
                currency: "INR",
                receipt: `Receipt: #${Math.floor(Date.now() * Math.random())}`,
            })
            await connectDB();
            const order = new Order({
                email: req.body.email,
                orderID: resp.id,
                address: req.body.address,
                amount: req.body.subtotal,
                products: req.body.cart
            })
            await order.save();
            res.status(200).json(resp)
        } else {
            throw new Error('This method is not allowed.')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
