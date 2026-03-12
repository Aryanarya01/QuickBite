import { Router } from "express";
import { isAdmin } from "../middleware/admin.js";
import { createFood, deleteFood, getAllFood } from "../Controllers/foodController.js";
import { Protect } from "../middleware/protect.js";


    const router:Router = Router();


    router.post("/",Protect,isAdmin,createFood);//admin only
    router.delete("/:id",Protect,isAdmin,deleteFood);//admin only


    router.get("/",getAllFood);
    router.get
