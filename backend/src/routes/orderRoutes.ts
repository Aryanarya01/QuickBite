import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { createOrder, GetMyOrder } from "../Controllers/orderController.js";


const router:Router = Router();


router.post("/",Protect,createOrder);//user order
router.get("/my",Protect,GetMyOrder);//user orders