const User = require("../models/User");
const bcrypt = require("bcrypt");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  // Validate input
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Send success response
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    if (err.code === 11000) {
      // Handle duplicate email error
      return res.status(400).json({ message: "Email already exists" });
    }
    console.error(err);
    res.status(500).json({ message: "Server error, could not create user" });
  }
};

module.exports = { getAllUsers, createUser };
