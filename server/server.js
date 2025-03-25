

import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"

dotenv.config();

import { checkConnection } from "./db/db.js";

const app = express();
 
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', authRoutes);
 
const PORT = process.env.PORT || 7000;
 
app.get("/test", (req, res) => {
  res.json("It works!");
});
 

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await checkConnection();
  } catch (error) {
    console.log("Failed to connect to the database:", error);
  }
});
 
 