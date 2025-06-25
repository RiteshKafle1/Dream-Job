import mongoose from "mongoose";

const connectDB = async (DB_URI) => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Connected to db success :) ")
    );
    mongoose.connection.on("disconnected", () =>
      console.log("disconnected to db  :) ")
    );
    await mongoose.connect(DB_URI);
  } catch (error) {
    console.log("Error in connecting to a db", error);
  }
};
export default connectDB;
