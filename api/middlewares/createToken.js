const jwt = require("jsonwebtoken");

function createToken(id, isAdmin) {
  return jwt.sign({ id: id, isAdmin: isAdmin }, process.env.TOKEN_KEY, {
    expiresIn: "3d",
  });
}

module.exports = { createToken };
