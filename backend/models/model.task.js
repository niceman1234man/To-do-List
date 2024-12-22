import mongoose, { Schema } from "mongoose";
const taskSchema=new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
},{timestamps:true});

export default Task=mongoose.model("Task",taskSchema);