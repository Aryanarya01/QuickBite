import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: [
        {
            food: {
                type: mongoose.Types.ObjectId,
                ref: "Food",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "Preparing", "Out for delivery", "delivered"],
        default: "pending",
    },
}, { timestamps: true });
export const Order = mongoose.model("Order", orderSchema);
//# sourceMappingURL=orderModel.js.map