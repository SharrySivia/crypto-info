const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./Routes/user");
const connectDB = require("./DBConnection");

const app = express();
app.use(bodyParser.json());

app.use(userRoutes);

connectDB();

app.listen(5000, () => {
  console.log("Server is listening on port: 5000");
});
