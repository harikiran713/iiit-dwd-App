const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
    tile : {
        type : String,
        required : true
    },
    time : {
        type : Date,
        required : true
    },
    venue : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    photoLink: {
        type: String,
        required: true
    }
});

const eventsModel = mongoose.model('Events',eventsSchema);

module.exports = eventsModel;