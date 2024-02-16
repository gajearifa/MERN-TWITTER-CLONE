import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/auths.js"
import tweetRoutes from "./routes/tweetsRoute.js"

const app=express();

dotenv.config();

const connect=()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connect to mongodb")
    }).catch((err)=>{
        throw err
    });
}
app.use(cookieParser());
app.use(express.json());

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/tweets",tweetRoutes);

app.listen(5000,()=>{
    connect();
  console.log("server is listening port 5000")
});