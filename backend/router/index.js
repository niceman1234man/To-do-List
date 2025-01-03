import express from 'express'
import { allTasks, deleteTask, getSingleTask, sendTask, update } from '../controlller/index.js'
export const router=express.Router();
router.get('/',allTasks);
router.post('/create',sendTask);
router.post('/update/:id',update);
router.delete('/delete/:id',deleteTask);
router.get('/getOne/:id',getSingleTask);