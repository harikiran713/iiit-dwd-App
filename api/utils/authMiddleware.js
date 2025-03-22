const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    //optional chaining ? is meaning of option chaining 
    
    
    
    if (!token) {
        return res.status(401).json({ message: "Please login first." });
    }
    try {
        const decoded_payload = jwt.verify(token, "mgfck");
        req.body.userId = decoded_payload.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
};

module.exports = authMiddleware;

