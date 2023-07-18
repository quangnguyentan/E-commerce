const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8888;
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use("/", (req, res) => {
  res.send("ok");
});
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
