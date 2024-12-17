const express = require("express");
const { createRestaurant, getAllRestaurants } = require("../controllers/restaurantController");

const router = express.Router();

router.post("/", createRestaurant);
router.get("/", getAllRestaurants);

module.exports = router;










// const express = require("express");
// const Restaurant = require("../models/Restaurant"); // import the restaurant model
// const router = express.Router();

// // POST route for creating a new restaurant
// router.post("/", async (req, res) => {
//   const { name, email, password, profile } = req.body;

//   try {
//     // Create a new restaurant
//     const newRestaurant = new Restaurant({
//       name,
//       email,
//       password,
//       profile,
//     });

//     // Save the restaurant to the database
//     await newRestaurant.save();
//     res.status(201).json({ message: "Restaurant created successfully" });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // GET all restaurants
// router.get("/", async (req, res) => {
//   try {
//     const restaurants = await Restaurant.find(); // Find all restaurants
//     res.json(restaurants); // Send the list as JSON response
//   } catch (err) {
//     res.status(500).json({ message: err.message }); // Error handling
//   }
// });

// module.exports = router;
