const express = require("express");
const { OtpSignup, verifyOtp, signin,keepPasswordUser } = require("../controllers/auth.controllers");

const router = express.Router();

router.post('/signup/otp', OtpSignup);
router.post('/verify/otp', verifyOtp);
router.post("/signin", signin);
router.post('/signup/otpverifed/setpassword',keepPasswordUser);
router.post('/forgotenPassword/otp',FPotp);


module.exports = router;
