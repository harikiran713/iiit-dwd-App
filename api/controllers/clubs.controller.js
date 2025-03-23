const clubsModel = require("../models/clubsModel");

const viewClubs = async (req,res,next)=>{
    try{
        const clubsArray = await clubsModel.find()
        
        res.status(200).json(clubsArray)
    }catch(err){
        res.status(500).json({message : "Error while sending Clubs"})
    }
};

module.exports = viewClubs;