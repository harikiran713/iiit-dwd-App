const ComplaintModel = require("../models/complaintModel");
const UpVote = require("../models/upVoteModel");

const addComplaint = async (req, res, next) => {
    try {
        const {userId, photoUrl, registrationNumber, decription } = req.body;
        const newComplaint = new ComplaintModel({
            userId,  photoUrl,
            registrationNumber,
            decription,
        });
 
        await newComplaint.save();
        res.status(200).json({ message: "Complaint was added" });
    } catch (error) {
        res.status(500).json({ message: "Failed in adding the complaint" });
    }
};

const upvoteComplaint = async (req, res, next) => {
    try {
        const complaint = await ComplaintModel.findById(req.params.id);
        if (!complaint) {
            return res.status(404).json({ message: "The complaint is not found" });
        }
        const complaintId=req.params.id
        const {userId}=req.body;
    let Upvote =await UpVote.findOne({ComplaintId:complaintId,userId:userId})
    if(!Upvote)
    {
        Upvote = new UpVote({ ComplaintId: complaintId, userId: userId, upVoteCheck: true });
        await Upvote.save();
        complaint.upvotes += 1;
        await complaint.save();
        res.status(200).json({ message: "Upvote is done" });
    }
    else{
        res.status(500).json({message:"already the upvote is done"})
    }
  
       
    } catch (error) {
        res.status(500).json({ message: "Failed to upvote the complaint" });
    }
};
const viewComplaints=async(req,res,next)=>
{
    const complaint=await ComplaintModel.find().sort({createdAt:-1})
    res.status(200).json(complaint)
}
module.exports = {
    addComplaint,
    upvoteComplaint,
    viewComplaints
};
