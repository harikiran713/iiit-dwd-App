const express = require("express");
const router = express.Router();
const authMiddleware = require("../utils/authMiddleware");
const viewEvents = require("../controllers/events.controllers");


router.get('/view', authMiddleware , viewEvents)


module.exports = router;