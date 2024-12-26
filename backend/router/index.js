import express from 'express'
import { allTasks, deleteTask, sendTask, update } from '../controlller';
export const router=express.Router();
router.get('/',allTasks)
router.post('/create',sendTask)
router.put('/update',update)
router.delete('/delete',deleteTask)
