import mongoose, { Document } from "mongoose";
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

export interface IFood extends Document {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface IItem extends Document {
  food: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
}
export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  items: IItem[];
  totalPrice: number;
  address: string;
  status: "pending" | "confirmed" | "delivered";
}
