const service=require('../models/service')
const servicesFunction=async(req,res,next)=>
{
    
    try{
        const servicesArray=await services.find()
        res.status(200).json(servicesArray)
    }
    catch(error)
    {
        res.status(500).json({message:"error in fetching the services"})
    }
}
module.exports={
    servicesFunction
}