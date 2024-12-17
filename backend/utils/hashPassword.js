const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const validatePassword = async (enteredPassword, storedPassword) => {
  return await bcrypt.compare(enteredPassword, storedPassword);
};

module.exports = { hashPassword, validatePassword };