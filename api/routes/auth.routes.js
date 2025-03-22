const express = require("express");
const { OtpSignup, verifyOtp, signin,keepPasswordUser,forgottenPassword,keepForgottenPassword } = require("../controllers/auth.controllers");

const router = express.Router();

router.post('/signup/otp', OtpSignup);

/*fetch("api/auth/signup/otp",{
    method:'POST',
    headers:
    {
      "Content-Type": "application/json"
},
body: JSON.stringify({ email })
}*/
router.post('/verify/otp', verifyOtp);
router.post("/signin", signin);
router.post('/signup/otpverifed/setpassword',keepPasswordUser);
router.post('/forgotenPassword/otp',forgottenPassword);
router.post('/forgoten/verifyOTP',verifyOtp)
router.post('forgoten/setPassword',keepForgottenPassword)



module.exports = router;
