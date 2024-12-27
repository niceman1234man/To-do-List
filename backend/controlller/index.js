import { Task } from "../models/model.task.js";
export const sendTask=(req,res)=>{
try {
    const {title,description}=req.body;
    if(!title ||!description) return res.json("All Fields Required")
    const newTask=new Task({title,description})
    newTask.save();
    res.status(201).json({sucess:true,data:newTask}); 
} catch (error) {
    console.log(error)
    res.status(500).json("Internal Server Error");
}

}

export const update =(req,res)=>{
   try {
    const {id}=req.params;
    const {title,description}=req.body;
    if(!title ||!description) return res.json("All Fields Required")
    const updateTask={
               title,
               description
               }
    const task=Task.findByIdAndUpdate(id,updateTask,{new:true});
    res.status(200).json({sucess:true,data:task})
   } catch (error) {
    console.log(error)
    res.status(500).json("Internal Server Error");
   }

}

export const deleteTask=(req,res)=>{
 try {
    const {id}=req.params;
    const deletedTask=Task.findByIdAndDelete(id);
    res.status(200).json({sucess:true,data:deletedTask});
 } catch (error) {
    console.log(error)
    res.status(500).json("Internal Server Error");
 }


}

export const allTasks=(req,res)=>{
    try {
        const tasks=Task.find({});
        res.status(200).json({sucess:true,data:tasks});
        
    } catch (error) {
        console.log(error)
    res.status(500).json("Internal Server Error");
    }
}