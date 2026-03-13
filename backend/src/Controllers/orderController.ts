import type { NextFunction, Request, Response } from "express";

interface AuthRequest extends Request{
    user?:any;
}
export const createOrder = async(req:AuthRequest,res:Response,next:NextFunction)=>{
    try{
        const {items,address} = req.body;
        if(!items || items.length === 0){
            res.status(400).json({message : "No items in orders!"});
            return;
        }

        //total price calculate
        const totalPrice = items.reduce((acc:number,item:any)=>acc + item.price * item.quantity,0)
    }catch(err){
        res.status(500).json({message : "Order Creation Failed!!"});
    }
}