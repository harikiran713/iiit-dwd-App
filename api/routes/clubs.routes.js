const express = require("express");
const router = express.router();
const authMiddleware = require("../utils/authMiddleware");
const viewClubs  = require("../controllers/clubs.controller");


router.get('/view', authMiddleware , viewClubs)


module.exports = router