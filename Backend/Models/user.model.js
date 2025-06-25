import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      reqiured: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },

    phone: {
      type: Number,
      maxLength: 10,
    },
    profile: {
      bio: {
        type: String,
      },
      skills: [
        {
          type: String,
          default: [],
        },
      ],
      resumeUrl: {
        type: String,
        default: "",
      },
      resumePublicId: {
        type: String,
        default: "",
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      profilePhoto: {
        type: String,
        default: "",
      },
      profilePublicId: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);
const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
