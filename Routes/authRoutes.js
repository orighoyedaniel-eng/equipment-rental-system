// routes/auth.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// ➡️ Register a new user
router.post('/register', authController.register);

// ➡️ Login user
router.post('/login', authController.login);

// ➡️ Protected route example (requires token)
router.get('/profile/:id', authController.verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});

module.exports = router;
