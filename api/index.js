import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import { error } from "console";
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
app.use(express.json())
const port = 3000

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})
app.get('/', (req,res) =>{
    res.json({
        message: "API is working."
    })
})

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return  res.status(500).json({
        succes: false,
        message:'Incorrect operation',
        error: message,
        statusCode,
    })
})