import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user :{
            type : mongoose.Types.ObjectId,
            ref : "User",
            required : true,
        },
        items : [
            {
                food:{
                    type:mongoose.Types.ObjectId,
                    ref : "Food",
                    required : true,
                },
                quantity :{
                    type:Number,
                    required : true,
                },
                price : {
                    type : Number,
                    required : true,
                },
            },
        ],
        
})