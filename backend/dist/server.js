import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
    res.send("working!");
});
app.listen(port, () => {
    console.log(`App is listining to port ${port}`);
});
//# sourceMappingURL=server.js.map