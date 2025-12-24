import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

//Initialize app
const app = express();

//connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); //accept json format

//first API
app.use("/api/auth", authRoutes);

// Home Page
app.get("/", (req, res) => {
  res.send("AI Resume Screening Backend is Running using MERN stack..");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
