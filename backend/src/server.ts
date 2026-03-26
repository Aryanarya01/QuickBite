import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import foodRouter from "./routes/foodRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Trust proxy for deployed secure cookies
app.set("trust proxy", 1);

// Detect if production or local
export const isProduction = process.env.NODE_ENV === "production";

// CORS setup
app.use(cors({
  origin: isProduction
    ? "https://quickbite-black.vercel.app" // deploy frontend
    : "http://localhost:5173",             // local frontend
  credentials: true, // allow cookies
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/foods", foodRouter);
app.use("/api/orders", orderRouter);

// Test route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});