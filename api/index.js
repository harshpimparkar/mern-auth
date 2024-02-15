import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
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