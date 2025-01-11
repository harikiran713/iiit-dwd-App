const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const errorHandler = require("../utils/errorHandler");
const Otp = require("../models/Otp.model.js");
const jwt=require("jsonwebtoken");
require("dotenv").config();
// const transporter = require("../otp.js");
// const signup= async(req,res,next)=>{

// const {userName,email,password}=req.body;
// if(!email || !userName || !password )
// {
//     next(errorHandler(500,"enter all the components"));
// }
// try
// {
//     if(!(User.findOne({email}))){
//      const hashedpassword=bcrypt.hashSync(password,10);
     
//      const newUser=new User({email,password:hashedpassword});
//      const saveUser =await newUser.save();
//     }
//     else{
//         next(errorHandler(500,"user Already register"));
//     }


// }
// catch(err)
// {
//     next(err);

// }

// }
// const google=async(req,res,next)=>
// {
    
// }
const signin=async(req,res,next)=>
{
   try{
    const {email,password}=req.body;
    if(!email || !password)
    {
        return res.status(500).json({message:"both email and password required"})
    }
    const user= await User.findOne({email});
    if(!user)
    {
        return res.status(500).json({message:"invalid email or password"});

    }
    const check_password=await bcrypt.compare(password,user.password)//return true or false antha
    if(!check_password)
    {
        return res.status(500).json({message:"invalid email or password"})
    }
    const token =jwt.sign({id:user._id},"mgfck")
    res.status(200).json({token,messagae:"Login successful"});

   }
   catch(error)
   {
res.status(500).json({messagae:"error in login"})
   }
    


}
function generateOTP() {  
    let otp = Math.floor(1000 + Math.random() * 9000);  
    return otp.toString(); 
}  

const OtpSignup = async (req, res, next) => {  
    try {  
       // console.log(req.body);  
        const { email } = req.body;  
        const existing_user_check=User.findOne({email});
        if(existing_user_check)
        {
            return res.status(200).json({message:"this user alredy exits"})
        }
        const check_email="@"+email.split('@')[1];
        if(check_email!="@iiitdwd.ac.in")
        {
 return res.status(500).json({message:"please use you collage email id"})
        }

        if (!email) {  
            return res.status(400).json({ message: "Email is required" });  
        }  

    

        let Otp_sent = await Otp.findOne({ email });  
       // console.log(existingOtp);
        if (Otp_sent) {  
            return res.json({ message: "OTP already sent" });  
        }  

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "harikiranl713@gmail.com",
                pass: "ktuj ghhv ldfu qhkz",
            },
        });

        const otp = generateOTP();  
        const mailOptions = {  
            from: "harikiranl713@gmail.com",   
            to: email,  
            subject: "Your OTP code to login to the IIIT-DWD-APP",  
            text: `Your OTP code is ${otp} ...it is valid for only 5 minutes`,  
        };  
       


      

        await transporter.sendMail(mailOptions).then( async()=>
        {

        let newOtp=new Otp({email,otp});
          newOtp.save();
            return res.status(200).json({ message: "OTP sent successfully" });
        });  
       
    } catch (err) {  
        console.error("Error:", err);  
        return next(new Error("An error occurred"));  
    }  
};
const verifyOtp=(req,res,next)=>
{
     const {email,otp}=req.body;
     const check_otp_existing=Otp.findOne({email});
     if(check_otp_existing)
     {
        const {email,otp_have}=Otp.findOne({email});
        if(otp==otp_have)
        {
           return res.status(200).json({message:"verified successfully",success:"true"})
        }
        else
        {
            return res.status(500).json({message:"otp has missmatched",success:"false"});
        }

     }


}
const keep_password_user=(req,res,next)=>
{
    const {email,userName,password,confirmPassword}=req.body;
    if(password!=confirmPassword)
    {
        return next(errorHandler(500,"password is not matching"))
    }
    
    const hashedpassword=bcrypt.hashSync(password,10)
   const new_user=new User({email,userName,password:hashedpassword})
   new_user.save().then(()=>
{
    return res.status(200).json({messagae:"sign up completed sucessfully",success:true})

});
  

}

module.exports = {  
    OtpSignup,verifyOtp  
};
console.log(process.env)