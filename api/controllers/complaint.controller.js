
const UpVote = require("../models/upVoteModel");

const ComplaintModel = require("../models/complaintModel"); // adjust path accordingly

const addComplaint = async (req, res) => {
    try {
        const { userId, photoLink, registrationNumber, description } = req.body;

        if (!description) {
            return res.status(400).json({ message: "Description is required" });
        }

        const regNumberToUse = registrationNumber?.trim() || "Anonymous";

        const newComplaint = new ComplaintModel({
            userId,
            photoLink,
            registrationNumber: regNumberToUse,
            description,
        });

        await newComplaint.save();
        res.status(201).json({ message: "Complaint was added successfully" });
    } catch (error) {
        console.error("Add Complaint Error:", error);
        res.status(500).json({ message: "Failed in adding the complaint", error: error.message });
    }
};
// Upvote a complaint
const upvoteComplaint = async (req, res, next) => {
    try {
        const complaintId = req.params.id;
        const { userId } = req.body;

        const complaint = await ComplaintModel.findById(complaintId);
        if (!complaint) {
            return res.status(404).json({ message: "Complaint not found" });
        }

        const existingUpvote = await UpVote.findOne({ ComplaintId: complaintId, userId });

        if (!existingUpvote) {
            const upvote = new UpVote({ ComplaintId: complaintId, userId, upVoteCheck: true });
            await upvote.save();

            complaint.upvotes += 1;
            await complaint.save();

            return res.status(200).json({ message: "Upvoted successfully" });
        } else {
            return res.status(409).json({ message: "Already upvoted" });
        }

    } catch (error) {
        console.error("Upvote Error:", error);
        res.status(500).json({ message: "Failed to upvote the complaint", error: error.message });
    }
};

// View all complaints
const viewComplaints = async (req, res, next) => {
    try {
        const complaints = await ComplaintModel.find().sort({ createdAt: -1 });
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch complaints", error: error.message });
    }
};

module.exports = {
    addComplaint,
    upvoteComplaint,
    viewComplaints,
};
