const mongoose = require('mongoose');
const Complaint = require('./complaintModel');

const upVoteSchema = new mongoose.Schema({
    ComplaintId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Complaint',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    upVoteCheck: {
        type: Boolean,
        default: false
    }
});

const UpVote = mongoose.model("UpVote", upVoteSchema);
module.exports = UpVote;


