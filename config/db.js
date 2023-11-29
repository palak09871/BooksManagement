import mongoose from "mongoose";

const connectDB=async()=>{
    try{
       await mongoose.connect(process.env.DB_URL);
       console.log("Database Connection ho gya");
    }
    catch(error){
        console.log("Error in connecting To database...",error.message);
    }
}

export {connectDB};