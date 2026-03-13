import { Router } from "express";
import { Protect } from "../middleware/protect.js";
import { createOrder, getAllOrder, GetMyOrder, updateOrderStatus } from "../Controllers/orderController.js";
import { isAdmin } from "../middleware/admin.js";


const router:Router = Router();


router.post("/",Protect,createOrder);//user order
router.get("/my",Protect,GetMyOrder);//user orders

router.get("/",Protect,isAdmin,getAllOrder);//admin
router.put("/:id",Protect,isAdmin,updateOrderStatus);//update status

export default router;