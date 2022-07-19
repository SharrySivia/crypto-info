const express = require("express");

const {
  signup,
  login,
  addToWatchlist,
} = require("../Controller/userController");

const Router = express.Router();

Router.post("/login", login);
Router.post("/user", signup);
Router.post("/watchlist", addToWatchlist);

module.exports = Router;
