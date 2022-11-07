const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send({ status: 200, message: "Nice work so far" });
});

app.listen(PORT, () => {
  console.log("App listening on ", PORT);
});
