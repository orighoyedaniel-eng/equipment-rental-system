const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Equipment = require("../models/Equipment");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");

// GET all equipment
router.get("/", authMiddleware, async (req, res) => {
  const equipment = await Equipment.findAll();
  res.json(equipment);
});

// Search equipment
router.get("/search", authMiddleware, async (req, res) => {
  const { query } = req.query;
  const equipment = await Equipment.findAll({
    where: { name: { [Op.like]: `%${query}%` } }
  });
  res.json(equipment);
});

// Add equipment (Admin only)
router.post("/", authMiddleware, adminMiddleware, async (req, res) => {
  const newEq = await Equipment.create(req.body);
  res.json(newEq);
});

// Update equipment (Admin only)
router.put("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  const eq = await Equipment.findByPk(req.params.id);
  await eq.update(req.body);
  res.json(eq);
});

// Delete equipment (Admin only)
router.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  await Equipment.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
});

module.exports = router;
