const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
import authRouter from "./routes/authRoutes";

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json({ limit: "1mb", extended: true }));
app.use("/user", authRouter);
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
