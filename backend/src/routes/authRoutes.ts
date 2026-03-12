import { Router } from "express";
import { Login, Logout, Register } from "../Controllers/authController.js";

const router: Router = Router();
router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
