const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController");
const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// POST to create a new user
router.post("/", createUser);

module.exports = router;
