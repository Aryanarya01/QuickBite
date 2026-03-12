import type { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
interface AuthRequest extends Request {
  user?: any;
}
export const Protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(400).json({ message: "Not Authorized!" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      res.status(400).json({ message: "User not found!" });
      return;
    }
    req.user = user;
    next();
  } catch(err) {
    res.status(500).json({ message: "Server Error!" });
  }
};
