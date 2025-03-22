const express =require('express');
const router=express.Router();
const authMiddleware = require("../utils/authMiddleware");
const {uploadPhoto}=require("../controllers/uploadPhoto")
router.post('/upload/:type',uploadPhoto)
module.exports=router