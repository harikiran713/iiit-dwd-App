const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    photoLink: {
        type: String,
        required: true
    },
    registrationNUmber: {
        type: String,
        default: 'anonymous'
    },
    description: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    resolved: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
