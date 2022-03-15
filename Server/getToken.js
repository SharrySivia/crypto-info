const jwt = require("jsonwebtoken");

const getToken = (userInfo) => {
  const token = jwt.sign({ ...userInfo }, "SUPER_SECRET", { expiresIn: "24h" });
  const expiry = Date.now() + 86400000;
  return { token, expiry };
};

module.exports = getToken;
