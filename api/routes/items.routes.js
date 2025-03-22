const express = require("express");
const router = express.Router();
const authMiddleware = require("../utils/authMiddleware");
const { viewItems, addItem } = require("../controllers/items.controller");

// fetch all marketplace items
router.get("/view", authMiddleware, viewItems);

//  add a new item 
router.post("/add", authMiddleware, addItem);

module.exports = router;
