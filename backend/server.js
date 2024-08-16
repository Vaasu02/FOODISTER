import express from "express";
import cors from 'cors';
import connetDB from './config/db.js'
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app=express();
const port=process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());

// api end point
app.use('/api/food',foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)



app.get('/',(req,res)=>{
    res.send("Hello World");

})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connetDB();
})

