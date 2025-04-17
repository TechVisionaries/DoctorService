const jwt = require("jsonwebtoken");
const { Buffer } = require("buffer");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or malformed token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedSecret = Buffer.from(process.env.JWT_SECRET, "base64");

    const decoded = jwt.verify(token, decodedSecret);


    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

module.exports = {
  authMiddleware,
  isAdmin,
};
