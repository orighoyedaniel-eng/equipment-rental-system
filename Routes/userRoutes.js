// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ➡️ Register a new user
router.post('/register', userController.registerUser);

// ➡️ Login user
router.post('/login', userController.loginUser);

// ➡️ Get user profile by ID
router.get('/:id', userController.getUserProfile);

module.exports = router;
