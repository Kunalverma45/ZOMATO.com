const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  } catch (err) {
    throw new Error('Error generating JWT');
  }
};

module.exports = generateToken;
