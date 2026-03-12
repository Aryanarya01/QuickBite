import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//                          Register function
export const Register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({ message: "All fields required!" });
            return;
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User Already exists!" });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.status(200).json({
            message: "User registered successfully!",
            id: user._id,
            name: user.name,
            email: user.email,
        });
    }
    catch (err) {
        res.status(500).json({ message: "Server Error!" });
    }
};
//                                  Login function
export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "All fields required!" });
            return;
        }
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "User not exists!" });
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid Credentials!" });
            return;
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
            message: "Login Successfully!",
            id: user._id,
            name: user.name,
            email: user.email,
        });
    }
    catch (err) {
        res.status(500).json({ message: "Server Error!" });
    }
};
//                                              Logout function
export const Logout = (req, res) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0),
        });
        res.status(200).json({ message: "Logout Successfully!" });
    }
    catch (err) {
        res.status(500).json({ message: "Server Error!" });
    }
};
//# sourceMappingURL=authController.js.map