const jwt=require("jsonwebtoken");
const authMiddleware=(req,res,next)=>
{
    const token=req.headers.authorization?.split(" ")[1];
    //dont confuse friends i did optional chaining
    if(!token)
    {
        return res.status(500).json({message:"please login kindly"});
    }
    try {
        const decode_payload=jwt.verify(token,"mgfck");
        req.userId=decode_payload.userId;
       next();
    } catch (error) {
        res.status(500).json({message:"Invalid token "});
        
    }
}
module.exports=authMiddleware;
