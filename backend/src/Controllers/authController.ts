import type { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

//                          Register function
export const Register = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
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
        res.status(200).json({message:"User registered successfully!",
            id : user._id,
            name : user.name,
            email : user.email,
        });
    }catch(err){
        res.status(500).json({message : "Server Error!"});
    }
}


//                                  Login function
export const Login = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email,password} = req.body;
        
    }catch(err){
        res.status(500).json({message:"Server Error!"});
    }
}