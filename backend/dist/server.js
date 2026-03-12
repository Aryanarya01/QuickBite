import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("working!");
});
app.listen(port, () => {
    console.log(`App is listining to port ${port}`);
});
//# sourceMappingURL=server.js.map