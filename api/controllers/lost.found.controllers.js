const lostModel = require("../models/lostmodel");
const foundModel = require("../models/found");

const addLost = async (req, res, next) => {
    const { userId, title, description, contact, photoLink } = req.body;
    try {
        const newLost = new lostModel({
            userId,
            title,
            description,
            contact,
            photoLink,
        });
        await newLost.save();
        res.status(200).json({ message: "Successfully added to lost items." });
    } catch (error) {
        res.status(500).json({ message: "Error in adding to lost items." });
    }
};

const addFound = async (req, res, next) => {
    const { userId, title, description, contact, photoLink } = req.body;
    try {
        const newFound = new foundModel({
            userId,
            title,
            description,
            contact,
            photoLink,
        });
        await newFound.save();
        res.status(200).json({ message: "Successfully added to found items." });
    } catch (error) {
        res.status(500).json({ message: "Error in adding to found items." });
    }
};

const viewFound = async (req, res, next) => {
    try {
        const foundArray = await foundModel.find();
        res.status(200).json(foundArray);
    } catch (error) {
        res.status(500).json({ message: "There was an error in viewing the found items." });
    }
};

const viewLost = async (req, res, next) => {
    try {
        const lostArray = await lostModel.find();
        res.status(200).json(lostArray);
    } catch (error) {
        res.status(500).json({ message: "There was an error in viewing the lost items." });
    }
};

module.exports = {
    addLost,
    addFound,
    viewFound,
    viewLost,
};
