const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./Routes/user");
const connectDB = require("./DBConnection");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-type");
  next();
});

app.use(bodyParser.json());

app.use(userRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
