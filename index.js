const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./src/routes"));

app.get("/", async (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "Hello, welcome to the server." });
});

module.exports = app;
