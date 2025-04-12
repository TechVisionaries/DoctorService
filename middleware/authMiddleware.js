const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// Middleware to check if user is authenticated
const authMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; 
    next();
  } catch (error) {
    console.error("JWT error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});

// Middleware to check if user is admin
const isAdmin = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return res.status(403).json({ message: "User not authorized" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "You are not an admin" });
  }

  next();
});

module.exports = { authMiddleware, isAdmin };
