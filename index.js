require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./src/routes"));

app.get("/", async (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "Hello, welcome to the server." });
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
