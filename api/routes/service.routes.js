const express=require("express")
const services=require("../controllers/service.controllers")
const router=express.Router();
router.post('/view',services)
module.exports=router