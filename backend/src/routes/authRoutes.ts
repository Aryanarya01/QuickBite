import { Router } from "express";
import { Login, Logout, Register } from "../Controllers/authController.js";
import { Protect } from "../middleware/protect.js";

const router: Router = Router();
router.post("/register", Register);
router.post("/login", Login);
router.get("/profile",Protect,(req:any,res)=>{
    res.json({user :req.user});
})
router.post("/logout", Logout);


export default router;