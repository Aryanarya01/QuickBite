import type { NextFunction, Request, Response } from "express";


export const register = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {name,email,password} = req.body;
        if(!name||!email||!password){
            res.status(400).json({message : "All fields required!"});
            return;
        }
    }catch(err){
        res.status(500).json({message : "Server Error!"});
    }
}