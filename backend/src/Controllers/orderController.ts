import type { NextFunction, Request, Response } from "express";

interface AuthRequest extends Request{
    user?:any;
}
export const createOrder = async(req:AuthRequest,res:Response,next:NextFunction)=>{
    try{

    }catch(err){
        res.status(500).json({message : "Order Creation Failed!!"});
    }
}