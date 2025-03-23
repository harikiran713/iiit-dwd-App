const mongoose = require("mongoose");

const clubsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    photoLink: {
        type: String,
        required: true
    },
    email : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    instagram : {
        type : String,
        required : true
    }
});

const clubsModel = mongoose.model('Clubs' , clubsSchema);

module.exports = clubsModel;


