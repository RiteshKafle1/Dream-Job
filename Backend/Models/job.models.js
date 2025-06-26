import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    requirements: [{ type: String }],
    salary: {
      type: Number,
      min: 0,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    Jtype: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      default: 1,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    created: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const jobModel = mongoose.models.Job || mongoose.model("Job", jobSchema);
export default jobModel;
