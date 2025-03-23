const express=require("express")
const { servicesFunction}=require("../controllers/service.controllers")
const authMiddleware = require("../utils/authMiddleware");
const router=express.Router();
router.post('/view',authMiddleware, servicesFunction)
module.exports=router