import mongoose from "mongoose";

const Resumeschema=new mongoose.Schema(
    {
        job:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Job",
            required:true,
        },
        candidateName:{
            type:String,
            trim:true
        },
        email: {
            type: String,
            lowercase: true,
            trim: true
        },
        resumeText: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            default: 0
        },
        skillsExtracted: [
            {
                type: String,
                trim: true
            }
        ],
        status: {
            type: String,
            enum: ["pending", "processed"],
            default: "pending"
        }
    },
    {
        timestamp:true
    }
);

const Resume=mongoose.model("Resume",Resumeschema);

export default Resume;