import type { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";


export const register = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try{
        const {name,email,password} = req.body;
        if(!name||!email||!password){
            res.status(400).json({message : "All fields required!"});
            return;
        }
        const existingUser = await User.find({email});
        if(existingUser){
            res.status(400).json({message : "User Already exists!"});
            return;
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password : hashedPassword,
        });
        res
    }catch(err){
        res.status(500).json({message : "Server Error!"});
    }
}