const express=require("express");
const router=express.Router();
router.post("/lost/create",lostCreate)
router.post("/lost/view",lost-view);
router.post("/found/create",found-create);
router.post("/found/view",found-view);
module.exports=router;
