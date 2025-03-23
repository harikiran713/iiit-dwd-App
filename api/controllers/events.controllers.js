const eventsModel = require("../models/eventsModel");

const viewEvents = async (req,res,next)=>{
    try{
        const eventsArray = await eventsModel.find().sort({createdAt:-1})
       
        res.status(200).json(eventsArray)
    }catch(err){
        res.status(500).json({message : "Error while sending Events"})
    }
};

module.exports = viewEvents;