import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true
        },
        Skills:[
            {
                type:String,
                trim:true
            }
        ],
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        status:{
            type:String,
            enum:["Open","Closed"],
            default:"Open"
        }
    },
    {
        timestamp:true
    }
);

const Job=mongoose.model("Job",JobSchema);

export default Job;