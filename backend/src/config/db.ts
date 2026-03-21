import mongoose from "mongoose";

export const connectDB =async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(err)
        console.error("Database connection failed");
    process.exit(1);
    }
}