import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json({ limit: "10mb", extended: true }));
app.use("/user", router);
const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://zahidali:Hackersonly123@cluster0.djdawwu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log("App listening on ", PORT);
    });
  })
  .catch((error) => console.log(error));
