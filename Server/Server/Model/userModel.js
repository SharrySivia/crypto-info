const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  watchlist: {
    type: mongoose.Schema.Types.Array,
  },
});

module.exports = mongoose.model("Users", UserSchema);
