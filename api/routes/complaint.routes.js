const express=require('express')
const router=express.Router()
const authMiddleware = require("../utils/authMiddleware");
const {addComplaint,upvoteComplaint,viewComplaints}=require("../controllers/complaint.controller")
router.get("/view",authMiddleware,viewComplaints)
router.put("/:id/upvote",authMiddleware,upvoteComplaint)
router.post("/add",authMiddleware,addComplaint)
module.exports=router


