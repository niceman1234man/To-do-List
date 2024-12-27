import express from 'express'
import { connectDb } from './db/index.js';
import { router } from './router/index.js';
const app=express();
connectDb();
app.use('/task',router);
const port=5000;
app.listen(port,()=>console.log("server running on ",port))