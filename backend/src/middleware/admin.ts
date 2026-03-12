import type { NextFunction, Request, Response } from "express";

interface AuthRequest extends Request{
    user?:any;
}

export const isAdmin =async (req:AuthRequest,res:Response,next:NextFunction)=>{
    
}