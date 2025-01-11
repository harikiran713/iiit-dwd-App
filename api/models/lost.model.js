const mongoose=require("mongoose");
const lostSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
    title:
    {
        type:String,
        required:true
    },
    
description:
{
    type:String,
    required:true


},
contact:
{
    type:String,
    default:null
}
})
const lostModel=mongoose.model("lostModel",lostSchema);