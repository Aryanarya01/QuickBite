import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
export const Protect = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(400).json({ message: "Not Authorized!" });
            return;
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            res.status(400).json({ message: "User not found!" });
            return;
        }
        req.user = user;
        next();
    }
    catch (err) {
        res.status(500).json({ message: "Server Error!" });
    }
};
//# sourceMappingURL=protect.js.map