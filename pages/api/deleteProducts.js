import connectDB from "@/middleware/conn"; 
import Product from "../../models/Product"

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            await connectDB();
            if(req.body.length === 0) throw new Error("No products to delete");
            for (let i in req.body) {
               await Product.findByIdAndDelete(req.body[i]._id)
            }
            res.status(200).json({ success: "success" })
        } else {
            throw new Error( "Request method not allowed")
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}