const mongoose = require("mongoose");

const foundSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: String
    },
    photoLink: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 14 * 24 * 60 * 60 
    }
});


const foundModel = mongoose.model('Found', foundSchema);

module.exports = foundModel;
