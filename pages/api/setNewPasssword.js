import connectDB from "@/middleware/conn"
import User from "@/models/User"
const CryptoJS = require("crypto-js");


export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { npassword, email, cpassword, password } = req.body;
            if (!npassword || !password) throw new Error('Password fields cannot be Blank.')
            if (npassword.length < 8) throw new Error('Password should be atleast 8 characters long.')
            if (npassword !== cpassword) throw new Error('Confirm password did not match. Please try again!')
            await connectDB();
            const userPass = await User.findOne({email})
            let bytes = CryptoJS.AES.decrypt(userPass.password, process.env.CRYPTO_KEY);
            let originalText = bytes.toString(CryptoJS.enc.Utf8);
            if(originalText !== password) throw new Error('Your current password is wrong. Please try again Or try resetting Password.')
            const getUser = await User.findOneAndUpdate({ email }, { password: CryptoJS.AES.encrypt(npassword, process.env.CRYPTO_KEY).toString() })
            if (!getUser) throw new Error('Error changing Password. Please try again later!')
            res.status(200).json({ success: true })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}