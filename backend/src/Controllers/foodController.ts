import type { Request, Response } from "express";



export const createFood = async(req:Request,res:Response)=>{
    try{
        const {name,price,description,image,category} = req.body;
        if(!name || !price ||!description||!image||!category){
            res.status(400).json({message:"All fields are required"});
            return;
        }
    }catch(err){
        res.status(500).json({message : "Error Creating Food!"});
    }
}