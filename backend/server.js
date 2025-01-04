// Import necessary packages
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Import routes
const userRoutes = require("./routes/user");
const restaurantRoutes = require("./routes/restaurantRoutes");
const restaurantDataRoutes = require('./routes/restaurantDataRoute.js');
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["https://zomatocom.vercel.app/main-page"]
  // methods: ["POST", "GET"],
  // credentials: true
}));

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://kv47871:Lte0SNh6S4grItS7@fliprcluster.aeivs.mongodb.net/ZomatoCollections?retryWrites=true&w=majority&appName=FLiPRcluster")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
    process.exit(1); // Exit process on database connection error
  });


// Use routes
app.use("/api/users", userRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/restaurantsData", restaurantDataRoutes);
// app.use('/api', uploadRoutes);

// Start the server
const PORT = process.env.PORT || 5009;
app.listen(PORT, () => console.log(`\nServer running on port ${PORT}`));
