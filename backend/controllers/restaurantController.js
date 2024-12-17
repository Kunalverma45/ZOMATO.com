const Restaurant = require("../models/Restaurant");

const createRestaurant = async (req, res) => {
  try {
    const { name, email, password, profile } = req.body;

    const restaurantExists = await Restaurant.findOne({ email });
    if (restaurantExists) return res.status(400).json({ message: "Restaurant already exists" });

    const restaurant = await Restaurant.create({ name, email, password, profile });
    res.status(201).json({ message: "Restaurant created successfully", restaurant });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createRestaurant, getAllRestaurants };
