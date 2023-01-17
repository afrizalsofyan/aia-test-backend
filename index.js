const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./src/routes"));

app.get("/", async (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "Hello, welcome to the server." });
});

module.exports = app;
