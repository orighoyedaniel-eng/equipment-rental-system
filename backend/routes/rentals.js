const express = require("express");
const router = express.Router();
const Rental = require("../models/Rental");
const Equipment = require("../models/Equipment");
const { authMiddleware } = require("../middleware/auth");

// Rent equipment
router.post("/rent", authMiddleware, async (req, res) => {
  const { equipment_id } = req.body;
  const eq = await Equipment.findByPk(equipment_id);
  if (!eq || eq.quantity < 1) return res.status(400).json({ message: "Not available" });

  eq.quantity -= 1;
  await eq.save();

  const rental = await Rental.create({
    user_id: req.user.id,
    equipment_id,
    status: "rented",
    due_date: new Date(Date.now() + 7*24*60*60*1000) // 7 days
  });

  res.json(rental);
});

// Return equipment
router.post("/return", authMiddleware, async (req, res) => {
  const { rental_id } = req.body;
  const rental = await Rental.findByPk(rental_id);
  if (!rental || rental.status !== "rented") return res.status(400).json({ message: "Invalid rental" });

  rental.status = "returned";
  await rental.save();

  const eq = await Equipment.findByPk(rental.equipment_id);
  eq.quantity += 1;
  await eq.save();

  res.json(rental);
});

// Get user's rentals
router.get("/my", authMiddleware, async (req, res) => {
  const rentals = await Rental.findAll({ where: { user_id: req.user.id } });
  res.json(rentals);
});

module.exports = router;
