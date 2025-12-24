import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import User from "../models/User.js";
import Job from "../models/Job.js";
import Resume from "../models/Resume.js";

dotenv.config();

const runSeed = async () => {
  try {
    await connectDB();

    // Clear old test data
    await User.deleteMany();
    await Job.deleteMany();
    await Resume.deleteMany();

    // 1️⃣ Create User
    const user = await User.create({
      name: "Test Recruiter",
      email: "recruiter@test.com",
      password: "test123"
    });

    // 2️⃣ Create Job
    const job = await Job.create({
      title: "Machine Learning Engineer",
      description: "Looking for an ML engineer with NLP experience",
      skillsRequired: ["Python", "NLP", "Machine Learning"],
      createdBy: user._id
    });

    // 3️⃣ Create Resume
    await Resume.create({
      job: job._id,
      candidateName: "John Doe",
      email: "john.doe@email.com",
      resumeText:
        "Experienced Machine Learning Engineer with strong NLP and Python background",
      skillsExtracted: ["Python", "NLP", "Machine Learning"],
      score: 85,
      status: "processed"
    });

    console.log("✅ Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

runSeed();
