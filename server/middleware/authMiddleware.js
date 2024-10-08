import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(`Decoded data:`, decoded);

      // Retrieve the user based on the decoded ID
      req.user = await User.findById(decoded.id).select("-password");

      console.log(`User found:`, req.user);

      next();
    } catch (error) {
      console.error("JWT Verification Error:", error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

const admin = (req, res, next) => {
    console.log(req.user)
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};


export { protect, admin };
