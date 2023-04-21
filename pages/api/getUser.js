// import connectDB from "@/middleware/conn"
import jwt from 'jsonwebtoken'
import User from '@/models/User';
import connectDB from '@/middleware/conn';

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const token = req.body.token;
            const data = jwt.verify(token, process.env.SECRET_KEY);
            if(!data){
                throw new Error('User Not found!')
            }
            const dbUser = await User.findOne({email: data.email})
            console.log(dbUser)
            res.status(200).json({email: data.email, address: dbUser.address, pincode: dbUser.pincode, phone: dbUser.phone, name: dbUser.name, found: true})
        }else {
            throw new Error("Method not allowed.")
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}