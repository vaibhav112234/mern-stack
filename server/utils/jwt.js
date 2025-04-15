import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
 
export const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1m",
  });
};
 
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.log("Token verification error:", error.message);
    throw new Error("Invalid token");
  }
};