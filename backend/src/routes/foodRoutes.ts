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

const router: Router = Router();

router.post("/", Protect, isAdmin,upload.single("image") ,createFood); //admin only
router.delete("/:id", Protect, isAdmin, deleteFood); //admin only
router.put("/:id",Protect,isAdmin, upload.single("image"),updateFood)//admin only
router.get("/", getAllFood);
router.get("/:id", getFoodById);

export default router;
