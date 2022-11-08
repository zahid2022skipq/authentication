import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json({ limit: "10mb", extended: true }));
app.use("/user", router);
const PORT = 5000;

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    app.listen(PORT, () => {
      console.log("App listening on ", PORT);
    });
  })
  .catch((error) => console.log(error));
