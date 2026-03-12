import { Router } from "express";
import { isAdmin } from "../middleware/admin.js";
import { createFood, deleteFood, getAllFood, getFoodById, } from "../Controllers/foodController.js";
import { Protect } from "../middleware/protect.js";
const router = Router();
router.post("/", Protect, isAdmin, createFood); //admin only
router.delete("/:id", Protect, isAdmin, deleteFood); //admin only
router.get("/", getAllFood);
router.get("/:id", getFoodById);
export default router;
//# sourceMappingURL=foodRoutes.js.map