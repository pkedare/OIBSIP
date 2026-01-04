const jwt = require("jsonwebtoken");
const SECRET = "pizza_secret";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json("Access denied");

  const data = jwt.verify(token, SECRET);
  req.user = data;
  next();
};
