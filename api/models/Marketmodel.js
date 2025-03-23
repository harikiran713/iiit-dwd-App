const mongoose = require("mongoose");

const marketplaceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    photoLink: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 30 * 24 * 60 * 60  // Expire after 30 days
    }
}, { timestamps: true });

const Marketplace = mongoose.model('Marketplace', marketplaceSchema);

module.exports = Marketplace;
