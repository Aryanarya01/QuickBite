import type { Request, Response } from "express";
import { Food } from "../models/foodModel.js";


//                                      Create Food(admin)
export const createFood = async(req:Request,res:Response)=>{
    try{
        const {name,price,description,category} = req.body;
        const image = req.file?.path; //Cloudinary url
        if(!name || !price ||!description||!image||!category){
            res.status(400).json({message:"All fields are required"});
            return;
        }
        

        const food = await Food.create({
            name,
            price,
            description,
            image,
            category,
        });
        res.status(201).json({message : "Successfully Created!",
            food
        })
    }catch(err){
        res.status(500).json({message : "Error Creating Food!"});
    }
}

//                              GetAll Food

export const getAllFood = async(req:Request,res:Response)=>{
    try{
        const foods = await Food.find();
        if(!foods){
            res.status(404).json({message : "No Existing Food!"});
            return;
        }
        res.json(foods);
    }catch(err){
        res.status(500).json({message : "Error fetching food!"});
    }
}

//                      get single food
export const getFoodById = async(req:Request,res:Response)=>{
    try{
        const food = await Food.findById(req.params.id);
        if(!food){
            res.status(404).json({message :"Food not found!"});
            return;
        }
        res.status(201).json(food);

    }catch(err){
        res.status(500).json({message : "Error fetching food!"});
    }
}

//                              delete food
export const deleteFood = async(req:Request,res:Response)=>{
    try{ 
        await Food.findByIdAndDelete(req.params.id);
        res.status(200).json({message : "Food deleted!"})
    }catch(err){
        res.status(500).json({message : "Error deleteing food!"});
    }
}

export const updateFood = async(req:Request,res:Response)=>{
    try{
        const {id} = req.params;
        const {}
    }catch(err){
        res.status(500).json({message : "Update Failed!"});
    }
}