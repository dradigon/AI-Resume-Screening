import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  try {
    let token;

    // 1. Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // 2. No token → deny access
    if (!token) {
      return res.status(401).json({
        message: "Not authorized, token missing"
      });
    }

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach user to request (excluding password)
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(401).json({
      message: "Not authorized, token invalid"
    });
  }
};

export default protect;
