const express=require("express");
const router=express.Router();
const {addLost,addFound,viewFound,viewLost}=require("../controllers/lost.found.controllers");
router.post("/lost/add",authMiddleware,addLost)
router.post("/lost/view",authMiddleware,viewLost);
router.post("/found/add",authMiddleware,addFound);
router.post("/found/view",authMiddleware,viewFound);
module.exports=router;
