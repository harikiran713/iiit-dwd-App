const express = require("express");
const router = express.Router();
const authMiddleware = require("../utils/authMiddleware");
const { addLost, addFound, viewFound, viewLost } = require("../controllers/lost.found.controllers");

router.post("/lost/add", authMiddleware, addLost);
router.get("/lost/view", authMiddleware, viewLost);
router.post("/found/add", authMiddleware, addFound);
router.get("/found/view", authMiddleware, viewFound);


module.exports = router;
