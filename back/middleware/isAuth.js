const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1]; // Assuming Bearer token

        if (!token) {
            console.log("No token, authorization denied");
            return res.status(401).json({ msg: "No token, authorization denied" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add decoded token (user info) to request object
        console.log("Authentication successful");
        next();
    } catch (error) {
        console.error("Authentication error:", error);

        if (error.name === "TokenExpiredError") {
            console.log("Token expired");
            res.status(401).json({ msg: "Token expired" });
        } else {
            console.log("Server error");
            res.status(500).json({ msg: "Server error" });
        }
    }
};

module.exports = isAuth;
