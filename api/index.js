import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;
mongoose
    .connect(uri)
    .then(()=>{
    console.log("Connected to Mongo DB")})
    .catch((err) =>{
    console.log(err)
})

const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})