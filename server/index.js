const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json({ limit: "1mb", extended: true }));

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("App is up and running");
});

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
