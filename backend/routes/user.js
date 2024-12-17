const express = require("express");
const { getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);

module.exports = router;








// const express = require("express");
// const User = require("../models/User"); // Import the User model
// const router = express.Router();
// const bcrypt = require("bcryptjs");

// // POST route for creating a new user (sign-up)
// router.post("/", async (req, res) => {
//   const { name, email, password, profile } = req.body;

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword, // Store the hashed password
//       profile,
//     });

//     // Save the user to the database
//     await newUser.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // POST route for user login (optional)
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Compare the password with the hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     res.status(200).json({ message: "Login successful", user });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // GET all users
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find(); // Find all users
//     res.json(users); // Send the list as JSON response
//   } catch (err) {
//     res.status(500).json({ message: err.message }); // Error handling
//   }
// });

// module.exports = router;
