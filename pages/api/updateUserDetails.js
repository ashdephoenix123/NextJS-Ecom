import User from "@/models/User";
import connectDB from "@/middleware/conn";

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { name, address, email, phone, pincode } = req.body;
            if (!name || !address || !email || !phone || !pincode) throw new Error('Please fill all the required fields.')
            if (phone.length !== 10) throw new Error('Please enter your 10 digit Mobile number.')
            if (pincode.length !== 6) throw new Error('Please enter the 6 digit area pincode.')
            await connectDB();
            const update = await User.findOneAndUpdate({ email }, { name, address, phone, pincode });
            if (!update) throw new Error('Updation failed! Please try again later.')
            res.status(200).json({ success: true })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    } finally{
        console.log('finally')
    }
}