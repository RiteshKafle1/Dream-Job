// imports
import express from "express";

const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api endpoints

// ports and db.
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log("Server is Running :)");
});
