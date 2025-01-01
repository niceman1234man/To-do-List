import { Task } from "../models/model.task.js";

export const sendTask =  async(req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const newTask = new Task({ title, description });
        await newTask.save();
        res.status(201).json({ success: true, data: newTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
  export const getSingleTask=async(req,res)=>{
    try {
        const {id}=req.params;
        const tasks= await Task.findById(id);
        res.status(200).json({sucess:true,data:tasks});
        
    } catch (error) {
        console.log(error)
    res.status(500).json("Internal Server Error");
    }

  }

export const update =async (req,res)=>{
   try {
    const {id}=req.params;
    const {title,description}=req.body;
    if(!title ||!description) return res.json("All Fields Required")
    const updateTask={
               title,
               description
               };
    const task=await Task.findByIdAndUpdate(id,updateTask,{new:true});
    res.status(200).json({sucess:true,data:task})
   } catch (error) {
    console.log(error)
    res.status(500).json("Internal Server Error");
   }

}

export const deleteTask=async (req,res)=>{
 try {
    const {id}=req.params;
    const deletedTask=await Task.findByIdAndDelete(id);
    res.status(200).json({sucess:true,data:deletedTask});
 } catch (error) {
    console.log(error)
    res.status(500).json("Internal Server Error");
 }


}

export const allTasks=async(req,res)=>{
    try {
        const tasks= await Task.find();
        res.status(200).json({sucess:true,data:tasks});
        
    } catch (error) {
        console.log(error)
    res.status(500).json("Internal Server Error");
    }
}