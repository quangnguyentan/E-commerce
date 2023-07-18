const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
const initRouter = require("./routes/index");
const PORT = process.env.PORT || 8888;
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
connectDB();
initRouter(app);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
