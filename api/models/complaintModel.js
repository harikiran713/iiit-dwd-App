const mongoose=require('mongoose')
const complaintSchema=new mongoose.Schema({
    photoUrl:
    {
        type:String,
        required:true
    },
    registrationNUmber:
    {
        type:String,
        default:'anonymous'
    },
    decription:{
        type:String,
        required:true
    },
    upvotes:{
        type:Number,
        default:0
    }

}, { timestamps: true })
const Complaint =mongoose.model('Complaint',complaintSchema)
module.exports=Complaint;
