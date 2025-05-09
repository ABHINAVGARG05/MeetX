const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server working" });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
