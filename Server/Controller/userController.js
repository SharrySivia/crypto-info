const bcrypt = require("bcrypt");

const getToken = require("../getToken.js");
const User = require("../Model/userModel");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const isPasswordSame = await bcrypt.compare(password, user.password);

  if (isPasswordSame) {
    const token = getToken({ email: user.email });
    res.status(200).json({ ...token });
  } else {
    res.status(404).json({ message: "Invalid username or password!" });
  }
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password: hashedPassword });
    const result = await user.save();
    res.status(200).json(result);
  } else {
    res.status(403).json({ message: "User already exists!" });
  }
};
