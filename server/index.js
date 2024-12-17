// Importing required modules
import express from "express"; // Use `import` if "type": "module" is specified in package.json
import dotenv from "dotenv"; // For environment variables
import passport from "passport"; // For authentication
import session from "express-session"; // For session handling

// Import private route authentication and Google OAuth configuration
import privateRouteConfig from "./src/config/route_config.js";
import googleAuthConfig from "./src/config/google_config.js";

// Database connection
import ConnectDB from "./src/database/connection.js";

// API routes
import Auth from "./src/api/auth.js";
import Food from "./src/api/food/index.js";
import Restaurant from "./src/api/restaurant/index.js";
import User from "./src/api/user/index.js";
import Menu from "./src/api/menu/index.js";
import Order from "./src/api/order/index.js";
import Review from "./src/api/review/index.js";
import Image from "./src/api/image/index.js";

// Load environment variables from .env file
dotenv.config();

// Configure passport strategies
privateRouteConfig(passport);
googleAuthConfig(passport);

// Initialize express app
const zomato = express();

// Middleware setup
zomato.use(express.json()); // Parse JSON requests
zomato.use(
  session({
    secret: process.env.JWT_SECRET || "defaultsecret", // Use a fallback secret if not defined
    proxy: true,
    resave: true,
    saveUninitialized: true,
  })
);
zomato.use(passport.initialize()); // Initialize Passport
zomato.use(passport.session()); // Use Passport sessions

// Basic root route
zomato.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

// API Routes
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/image", Image);

// Server Port
const PORT = process.env.PORT || 4000;

// Start the server and connect to the database
zomato.listen(PORT, () => {
  ConnectDB()
    .then(() => {
      console.log(`Server is running on port ${PORT}`);
    })
    .catch((error) => {
      console.log("Server is running but database connection failed...");
      console.error(error);
    });
});
