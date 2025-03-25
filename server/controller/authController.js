import bcryptjs from "bcryptjs";
import { pool } from "../db/db.js";
import { generateToken } from "../utils/jwt.js";
 
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
 
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
 
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      console.log("query success: No existing user found", email);
    }
 
    const hashedPassword = await bcryptjs.hash(password, 10);
 
    const result = await pool.query(
      "INSERT INTO user (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );
    console.log("User registered:", result[0]);
 
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || "Internal server error" });
  }
};
 
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
 
  if (!(email && password)) {
    return res.status(400).json({ message: "Email and Password are required" });
  }
 
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
 
    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
 
    const user = rows[0];
 
    const isMatch = await bcryptjs.compare(password, user.password);
 
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
 
    user.password = undefined;
    const token = generateToken(user);
 
    res.cookie("access_token", token, {
      httpOnly: true,
    });
 
    return res.status(200).json({
      message: "Login Successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Login error: ", error);
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
 
export const logoutUser = async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
 