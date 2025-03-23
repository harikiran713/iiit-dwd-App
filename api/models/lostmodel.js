const mongoose=require("mongoose");
const lostSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

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
    type:String
   // default:null
},
photoLink:
{
    type:String,
    required:true
},
createdAt:
{
    type:Date,
    default:Date.now,
    expires:14*24*60*60,

}
}, { timestamps: true })
const lostModel=mongoose.model("lostModel",lostSchema);
module.exports=lostModel;