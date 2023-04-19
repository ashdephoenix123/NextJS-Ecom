// import connectDB from "@/middleware/conn"
import jwt from 'jsonwebtoken'


export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const token = req.body.token;
            const data = jwt.verify(token, process.env.SECRET_KEY);
            if(!data){
                throw new Error('User Not found!')
            }
            res.status(200).json({email: data.email, found: true})
        }else {
            throw new Error("Method not allowed.")
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}