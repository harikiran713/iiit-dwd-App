const Marketplace = require("../models/Marketmodel.js");

// POST /api/items/add
const addItem = async (req, res, next) => {
  const { itemName, description, price, contact, photoLink } = req.body;

  try {
    const newItem = new Marketplace({
      userId: req.userId, // Make sure your auth middleware sets this
      itemName,
      description,
      price,
      contact,
      photoLink,
    });

    await newItem.save();
    res.status(200).json({ message: "Item successfully added to marketplace!" });
  } catch (error) {
    console.error("Error saving item:", error);
    res.status(500).json({ message: "Error adding item to marketplace." });
  }
};

// GET /api/items/view
const viewItems = async (req, res, next) => {
  try {
    const itemsArray = await Marketplace.find().sort({ createdAt: -1 });
    res.status(200).json(itemsArray);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Error fetching items." });
  }
};

module.exports = {
  addItem,
  viewItems,
};
