import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import foodRouter from "./routes/foodRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
connectDB();

app.use(
  cors({
 
    origin: true,
 
 
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/foods", foodRouter);
app.use("/api/orders", orderRouter);
app.get("/", (req, res) => {
  res.send("working!");
});

app.listen(port, () => {
  console.log(`App is listining to port ${port}`);
});
