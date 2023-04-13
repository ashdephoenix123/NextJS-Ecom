import connectDB from "@/middleware/conn";
import User from "../../models/User"
const CryptoJS = require("crypto-js");

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const { name, email } = req.body;
            await connectDB();
            const findUser = await User.findOne({ email });
            if (findUser) throw new Error("Email already exists.")
            const user = new User({
                name: name,
                email: email,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_KEY).toString()
            });
            const result = await user.save();
            if (result) res.status(201).json({ success: true })
        } else {
            throw new Error("Request method not allowed")
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}