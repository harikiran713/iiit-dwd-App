const express=require("express");
const app =express();
const mongoose=require("mongoose")
const authRouter=require("./routes/auth.routes.js");
const nodemailer=require("nodemailer")

require('dotenv').config();



async function connect()
{
    
    return  await mongoose.connect(process.env.DB_URL);
}
connect().then(()=>
{
    console.log("connected to data base ")
})

app.use(express.json());

//this is for parse the json to js object and provides it to the req.body as a js object


// this is a error handling middlware when you call next(error) in any of the routes then the express skips all its middleware and look for next middleware this it that middleware 



app.use("/api",authRouter);
app.use("lostandfound",lostandfound);
app.get("/",()=>
{

})

app.use((err,req,res,next)=>
{
const statuscode=err.statusCode || 500;
const message=err.message || "some error in doing";
res.status(statuscode).json(
    {
        message,statuscode
    }
)
})
app.listen(process.env.PORT,()=>
{
   
    console.log(`http://localhost:${process.env.PORT}`);
})
