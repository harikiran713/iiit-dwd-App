const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const Otp = require("../models/Otp.model.js");
const User = require("../models/User.model.js");
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
            port: 587,
            auth: {
                user: "harikiranl713@gmail.com",
                pass: "ktuj ghhv ldfu qhkz",
            },
        });

        const otp = generateOTP();
        const mailOptions = {
            from:"harikiranl713@gmail.com",
            to: email,
            subject: "Your OTP Code for IIIT-DWD App",
            text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
        };

        await transporter.sendMail(mailOptions);

        const newOtp = new Otp({ email, otp});
        await newOtp.save();

        res.status(200).json({ message: "OTP sent successfully." });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "An error  while sending OTP." });
    }
};

// Verify OTP
const verifyOtp = async (req, res, next) => {
    try {
        const { email, otp } = req.body;
        const existingOtp = await Otp.findOne({ email });

        if (!existingOtp) {
            return res.status(404).json({ message: "No OTP found to this  email." });
        }

        if (existingOtp.otp !== otp) {
            return res.status(401).json({ message: "OTP mismatch." });
        }

        const token = jwt.sign(
            { email },
            "conformingOtp",
            { expiresIn: "10m" }
        );

        res.status(200).json({ message: "OTP verified successfully.", token });
    } catch (err) {
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

module.exports = {
    signin,
    OtpSignup,
    verifyOtp,
    keepPasswordUser,
};
