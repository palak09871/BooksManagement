/* const express=require("express");
const app=express();
// middleware 
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.listen(5000,()=>{
    console.log(`server ekdum sahi chl rha h`);
})

app.get('/',(req,res)=>{
    res.send("hellooooo");
})

app.post('/api/cars',(req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted successfully")
}) */



import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";  // middleware

import {connectDB} from "./config/db.js";
import booksRoute from "./routes/booksRoutes.js";

const app=express();

const port=process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/v1/library/book",booksRoute);

app.listen(port,()=>{
    console.log(`Server is Running at PORT:${port}`);
})