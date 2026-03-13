import { Order } from "../models/orderModel.js";
//                                  Create Order
export const createOrder = async (req, res, next) => {
    try {
        const { items, address } = req.body;
        if (!items || items.length === 0) {
            res.status(400).json({ message: "No items in orders!" });
            return;
        }
        //total price calculate
        const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const order = await Order.create({
            user: req.user._id,
            items,
            totalPrice,
            address,
        });
        res.status(201).json({ message: "Order created sucessfully!", order });
    }
    catch (err) {
        res.status(500).json({ message: "Order Creation Failed!!" });
    }
};
//                                      GetMyOrder(user)
export const GetMyOrder = async (req, res, next) => {
};
//# sourceMappingURL=orderController.js.map