import type { NextFunction, Request, Response } from "express";
import { Order } from "../models/orderModel.js";

interface AuthRequest extends Request {
  user?: any;
}

//                                  Create Order
export const createOrder = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { items, address } = req.body;
    if (!items || items.length === 0) {
      res.status(400).json({ message: "No items in orders!" });
      return;
    }

    //total price calculate
    const totalPrice = items.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0,
    );
    const order = await Order.create({
      user: req.user._id,
      items,
      totalPrice,
      address,
    });
    res.status(201).json({ message: "Order created sucessfully!", order });
  } catch (err) {
    res.status(500).json({ message: "Order Creation Failed!!" });
  }
};

//                                      GetMyOrder(user)
export const GetMyOrder = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "items.food",
    );
    if (!orders) {
      res.status(400).json({ message: "No Order Till Now!" });
      return;
    }
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders!" });
  }
};
