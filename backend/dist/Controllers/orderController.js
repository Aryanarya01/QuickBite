export const createOrder = async (req, res, next) => {
    try {
        const { items, address } = req.body;
        if (!items || items.length === 0) {
            res.status(400).json({ message: "No items in orders!" });
            return;
        }
    }
    catch (err) {
        res.status(500).json({ message: "Order Creation Failed!!" });
    }
};
//# sourceMappingURL=orderController.js.map