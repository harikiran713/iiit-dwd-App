const Marketplace = require("../models/Marketmodel.js");

const addItem = async (req, res, next) => {
    const { userId, title, description, price, contact, photoLink } = req.body;
    try {
        const newItem = new Marketplace({
            userId,
            itemName,
            description,
            price,
            contact,
            photoLink, //  S3  link
        });
        await newItem.save();
        res.status(200).json({ message: "Item successfully added to marketplace!" });
    } catch (error) {
        res.status(500).json({ message: "Error adding item to marketplace." });
    }
};

const viewItems = async (req, res, next) => {
    try {
        const itemsArray = await Marketplace.find();
        res.status(200).json(itemsArray);
    } catch (error) {
        res.status(500).json({ message: "Error fetching  items." });
    }
};

module.exports = {
    addItem,
    viewItems
};
