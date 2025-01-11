const mongoose=require("mongoose");
const userScheme=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        userName:
        {
            type:String

        },
        password:{
            type:String,
            required:true,
            
        }
    }
)
const User=mongoose.model("User",userScheme);