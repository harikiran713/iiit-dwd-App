const express = require("express");
const router = express.Router();
const authMiddleware = require("../utils/authMiddleware");
const { Profile} = require("../controllers/profile.controllers");


router.get("/view", authMiddleware, Profile);



module.exports = router;