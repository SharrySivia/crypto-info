const express = require("express");

const { signup, login } = require("../Controller/userController");

const Router = express.Router();

Router.post("/login", login);
Router.post("/user", signup);

module.exports = Router;
