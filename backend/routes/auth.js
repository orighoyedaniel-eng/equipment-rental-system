const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, role: user.role });
});

module.exports = router;
