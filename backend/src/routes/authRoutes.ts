import { Router } from "express";
import { Login, Register } from "../Controllers/authController.js";

const router :Router = Router();
router.post("/register",Register);
router.post("/login",Login);
