import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

const server=express();
server.use(express.json());
server.use(cors());

const connectDB=async ()=>{
    const connection=await mongoose.connect(process.env.MONGO_URL)

    if(connection){
        console.log("mongoDB is connected ✅")
    }
}

connectDB();

server.get("/",(req,res)=>{
    res.json({
        message:"welcome to server"
    })
})

const PORT=process.env.PORT || 6000

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})