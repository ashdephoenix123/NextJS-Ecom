import connectDB from "@/middleware/conn"; 
import Product from "../../models/Product"

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            await connectDB();
            if(req.body.length === 0) throw new Error("Cannot leave the product details blank.");
            for (let i in req.body) {
                const product = new Product({
                    productId: req.body[i].productId,
                    title: req.body[i].title,
                    desc: req.body[i].desc,
                    img: req.body[i].img,
                    category: req.body[i].category,
                    size: req.body[i].size,
                    color: req.body[i].color,
                    price: req.body[i].price,
                    availableQty: req.body[i].availableQty
                });
                await product.save();
            }
            res.status(200).json({ success: "success" })
        } else {
            throw new Error( "Request method not allowed")
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}