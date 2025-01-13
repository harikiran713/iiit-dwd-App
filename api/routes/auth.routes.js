const express=require("express");
const {OtpSignup,verifyOtp}=require("../controllers/auth.controllers")
const router =express.Router();
// router.post('/google_auth',google);
router.post('/otp/signup',OtpSignup);
router.post('/verify/otp',verifyOtp)
 router.post("/signin",signin);
module.exports=router;