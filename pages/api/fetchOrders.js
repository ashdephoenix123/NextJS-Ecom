import connectDB from '@/middleware/conn';
import Order from '@/models/Order';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const token = req.body.token;
            const data = jwt.verify(token, process.env.SECRET_KEY);
            await connectDB();
            const orders = await Order.find({email: data.email}).sort({createdAt: -1});
            res.status(200).json( orders )
        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}