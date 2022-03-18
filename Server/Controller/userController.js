const bcrypt = require("bcrypt");

const getToken = require("../getToken.js");
const User = require("../Model/userModel");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "No user exist with this email!" });
  }

  const isPasswordSame = await bcrypt.compare(password, user.password);

  if (isPasswordSame) {
    const token = getToken({ email: user.email });
    res
      .status(200)
      .json({ username: user._doc.name, id: user._doc._id, ...token });
  } else {
    res.status(404).json({ message: "Invalid username or password!" });
  }
};

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name: username, email, password: hashedPassword });
    const result = await user.save();
    const token = getToken({ email: user.email });
    res.status(200).json({ username, id: result._doc._id, ...token });
  } else {
    res.status(403).json({ message: "User already exists!" });
  }
};

exports.addToWatchlist = async (req, res) => {
  const { userId, watchlist } = req.body;

  const user = await User.findById(userId);

  if (user) {
    user.watchlist = [...user.watchlist, watchlist];
    const result = await user.save();
    res.status(200).json({ id: userId, watchlist: result._doc.watchlist });
  } else {
    res.status(404).json({ message: "Invalid Id" });
  }
};

exports.updateWatchlist = async (req, res) => {
  const { userId, updatedWatchlist } = req.body;

  const user = await User.findById(userId);

  if (user) {
    user.watchlist = [...updatedWatchlist];
    const result = await user.save();
    res.status(200).json({ id: userId, watchlist: result._doc.watchlist });
  } else {
    res.status(404).json({ message: "Invalid Id" });
  }
};
