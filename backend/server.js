import express from 'express'
import { connectDb } from './db/index.js';
import { router } from './router/index.js';
import cors from 'cors'
const app=express();
connectDb();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  
 }));
app.use('/task',router);
const port=5000;
app.listen(port,()=>console.log("server running on ",port))