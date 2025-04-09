const User = require("../models/Usermodel"); 


const Profile = async (req, res) => {
  try {
    const {userId} = req.body

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const studentId = user.email.split("@")[0];

    res.status(200).json({
      userName: user.userName,
      email: user.email,
      studentId: studentId,
    });
  } catch (error) {
    console.error("Get User Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  Profile,
};
