const express = require("express");
const router = express.router();
const authMiddleware = require("../utils/authMiddleware");
const viewEvents = require("../controllers/events.controllers");


router.get('/view', authMiddleware , viewEvents)


module.exports = router;