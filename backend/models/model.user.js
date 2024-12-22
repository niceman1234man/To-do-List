import mongoose, { Schema } from "mongoose";
const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});

export default User=mongoose.model("User",userSchema);