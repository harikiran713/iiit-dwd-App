const mongoose=require("mongoose")
const serviceSchema=new mongoose.Schema(
    {
        service:
        {
            type:"String",
            required:true
        },
        isOpen:
        {
            type:"String",
            required:true
        }
    }
)
const services =mongoose.model("services",serviceSchema)
module.exports=services

