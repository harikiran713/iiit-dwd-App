const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const Otp = require("../models/Otpmodel.js");
const User = require("../models/Usermodel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Both email and password are required." });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const token = jwt.sign(
            { userId: user._id },
            "mgfck"
        );
        
        res.status(200).json({ token, message: "Login successful." });
    } catch (error) {
        res.status(500).json({ message: "Error at the time of login." });
    }
};

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString(); 
}

const OtpSignup = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required." });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "This user already exists." });
        }

     ;
        const Check_domain = email.split("@")[1];
        if (Check_domain !== "iiitdwd.ac.in") {
            return res.status(400).json({ message: "Please use your college email ID." });
        }

        const existingOtp = await Otp.findOne({ email });
        if (existingOtp) {
            return res.status(429).json({ message: "OTP already sent. Please wait." });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 2525,
            auth: {
                user:"harikiranl713@gmail.com",
                pass:"ktuj ghhv ldfu qhkz",
            },
        });

        const otp = generateOTP();
        const mailOptions = {
            from: "noreply@yourdomain.com",
            to: email,
            subject: "Your OTP Code for IIIT-DWD App",
            text: `
Hi ${email},

Thank you for signing up with Campulse! To complete your verification, please use the following code:

🔒 Your verification code: **${otp}**

This code will expire in 5 minutes. If you did not request this code, please ignore this email.

For any assistance, feel free to contact our support team.

Best regards,  
The Campulse Team  
support@campulse.com  

`,
        };

        await transporter.sendMail(mailOptions);
      
        const newOtp = new Otp({ email, otp });
        await newOtp.save();

        res.status(200).json({ message: "OTP sent successfully." });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "An error occurred while sending OTP." });
    }
};


const verifyOtp = async (req, res, next) => {
    try {
        const { email, otp, password, userName } = req.body;
        
        // Validate input
        if (!email || !otp || !password || !userName) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check OTP
        const existingOtp = await Otp.findOne({ email });
        if (!existingOtp) {
            return res.status(404).json({ message: "No OTP found for this email." });
        }

        if (existingOtp.otp !== otp) {
            return res.status(401).json({ message: "Invalid OTP." });
        }

        // Check if user already exists (just in case)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists." });
        }

        // Create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, userName });
        await newUser.save();

        // Generate JWT token for immediate login
        const token = jwt.sign(
            { userId: newUser._id },
            "mgfck", // Replace with your actual secret
            { expiresIn: '1d' }
        );

        // Clean up OTP
        await Otp.deleteOne({ email });

        res.status(200).json({ 
            token,
            message: "Account created and verified successfully." 
        });

    } catch (err) {
        console.error("OTP Verification Error:", err);
        res.status(500).json({ message: "An error occurred during OTP verification." });
    }
};
const keepPasswordUser = async (req, res, next) => {
    try {
        const { token, userName, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match." });
        }

        const decoded = jwt.verify(token, "conformingOtp");
        const { email } = decoded;

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, userName, password: hashedPassword });

        await newUser.save();
        res.status(200).json({ message: "Signup completed successfully." });
    } catch (error) {
        res.status(500).json({ message: "An error occurred during signup." });
    }
};
//google sign in 

//for the forgoten password i am  sending the otp to mail to keep the new password 

const forgottenPassword = async (req, res, next) => {
    const { email } = req.body;

    try {
       
        const existingOtp = await Otp.findOne({ email });
        if (existingOtp) {
            return res.status(429).json({ message: "OTP already sent. Please wait." });
        }

     
        const checkExistingUser = await User.findOne({ email });
        if (!checkExistingUser) {
            return res.status(400).json({ message: "User does not exist." });
        }

     
        const checkDomain = email.split('@')[1];
        if (checkDomain !== "iiitdwd.ac.in") {
            return res.status(400).json({ message: "Use your college ID email." });
        }

        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false, 
            auth: {
                user: "harikiranl713@gmail.com",
                pass:"ktuj ghhv ldfu qhkz",
            },
        });

        
        const otp = generateOTP();
        const mailOptions = {
            from: "harikiranl713@gmail.com",
            to: email,
            subject: "Your OTP Code for IIIT-DWD App",
            text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
        };

        await transporter.sendMail(mailOptions);

        
        const newOtp = new Otp({ email, otp });
        await newOtp.save();

        res.status(200).json({ message: "OTP sent successfully." });
    } catch (err) {
        console.error("Error in sending OTP:", err);
        res.status(500).json({ message: "Error in sending the OTP." });
    }
};

const keepForgottenPassword = async (req, res, next) => {
    try {
        const { token, password, confirmPassword } = req.body;

        
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match." });
        }

        const decoded = jwt.verify(token, "conformingOtp");
        const { email } = decoded;

      
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);

        
        user.password = hashedPasword;
        await user.save();

        res.status(200).json({ message: "Password updated successfully." });
    } catch (error) {
        console.error("Error updating password:", error);
        res.status(500).json({ message: "An error occurred during password update." });
    }
};




module.exports = {
    signin,
    OtpSignup,
    verifyOtp,
    keepPasswordUser,
  
    keepForgottenPassword,
    forgottenPassword 
};
