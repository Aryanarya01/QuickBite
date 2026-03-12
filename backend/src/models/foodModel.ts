import mongoose from "mongoose";
import { IFood } from "../types/types.js";


const foodSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
    },
    price : {
        type : Number,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    }
}
,
{timestamps : true})

export const Food = mongoose.model<IFood>("Food",foodSchema);
