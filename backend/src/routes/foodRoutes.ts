import { Router } from "express";
import { isAdmin } from "../middleware/admin.js";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFoodById,
  updateFood,
} from "../Controllers/foodController.js";
import { Protect } from "../middleware/protect.js";
import { upload } from "../middleware/upload.js";
import { Food } from "../models/foodModel.js";

const router: Router = Router();

router.post("/", Protect, isAdmin, upload.single("image"), createFood); //admin only
router.delete("/:id", Protect, isAdmin, deleteFood); //admin only
router.put("/:id", Protect, isAdmin, upload.single("image"), updateFood); //admin only
router.get("/", getAllFood);
router.get("/:id", getFoodById);
router.get("/search", async (req, res) => {
  const q = req.query.q as string;

  const foods = await Food.find({
    name: { $regex: q, $options: "i" },
  });

  res.json(foods);
});
export default router;
