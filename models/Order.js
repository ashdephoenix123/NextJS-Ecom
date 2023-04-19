const mongoose= require('mongoose')

const OrderSchema = new mongoose.Schema({
    email: {type: String, required: true},
    orderID: {type: String, required: true},
    paymentInfo: {type: Object},
    paymentID: {type: String},
    products: {type: Object, required: true},
    address: {type: String, required: true},
    amount: {type: Number, required: true},
    status: {type: String, default: "Pending", required: true},
    deliveryStatus: {type: String, default: "Not delivered", required: true},
}, {timestamps: true})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);