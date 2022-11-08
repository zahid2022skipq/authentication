import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb", extended: true }));
app.use("/user", router);
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("APP IS UP AND RUNNING");
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    app.listen(PORT, () => {
      console.log("App listening on ", PORT);
    });
  })
  .catch((error) => console.log(error));
