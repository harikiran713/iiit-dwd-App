const express = require("express");
const router = express.Router();
const authMiddleware = require("../utils/authMiddleware");
const { viewItems, addItem } = require("../controllers/items.contollers");

router.get("/view", authMiddleware, viewItems);


router.post("/add", authMiddleware, addItem);

module.exports = router;
