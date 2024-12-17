const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: Object },
});

// Check if the model already exists, if not, create it
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
