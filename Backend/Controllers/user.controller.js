import userModel from "../Models/user.model";
import validator from "validator";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {
  try {
    const { email, fullName, password,role} = req.body;

    const EmailExists = await userModel.findOne({ email });

    if (EmailExists)
      return next({ statusCode: 400, message: "User Already Exists." });

    if (!email || !fullName || !password)
      return next({ statusCode: 400, message: "Fields cannot be empty" });

    // if not valid it gives false
    if (!validator.isEmail(email))
      return next({ statusCode: 400, message: "Please Enter a valid email" });

    if (!validator.isStrongPassword(password))
      return next({ statusCode: 400, message: "Password too weak." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new userModel({
      email,
      username:fullName,
      password: hashedPassword,
      role,
    });
    await user.save();
    return res.status(201).json({
      error: false,
      message: "Account Created successfully",
      id: user._id,
      email: user.email,
      name: user.fullName,
    });
  } catch (error) {
    console.log("Error in registering user", error);
    return next({ statusCode: 500, message: "Failed to register User" });
  }
};

