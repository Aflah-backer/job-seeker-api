// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const JWT_SECRET = process.env.JWT_SECRET; // Replace with a secure secret key

async function registerUser(req, res) {
    try {
      console.log(req.body, "hello");
    const { email, password } = req.body;

    // Check if user with given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the passwordss
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h", // Token expiration time
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function loginUser(req, res) {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
        expiresIn: "1h", // Token expiration time
      });
  
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error("Error during user login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  

module.exports = { registerUser, loginUser };
