// routes/authRoutes.js
const express = require("express");
const authController = require("../helpers/authController");
const router = express.Router();

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

module.exports = router;
