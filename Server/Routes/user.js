const express = require("express");

const {
  signup,
  login,
  addToWatchlist,
  updateWatchlist,
} = require("../Controller/userController");

const Router = express.Router();

Router.post("/login", login);
Router.post("/user", signup);
Router.post("/watchlist", addToWatchlist);
Router.put("/watchlist", updateWatchlist);

module.exports = Router;
