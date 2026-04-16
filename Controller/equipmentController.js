// controllers/equipmentController.js

const Equipment = require('../models/Equipment');

// ➡️ Get all equipment
exports.getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findAll();
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch equipment' });
  }
};

// ➡️ Get single equipment by ID
exports.getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findByPk(req.params.id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch equipment' });
  }
};

// ➡️ Add new equipment
exports.addEquipment = async (req, res) => {
  try {
    const { name, description, available } = req.body;
    const newEquipment = await Equipment.create({ name, description, available });
    res.status(201).json(newEquipment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add equipment' });
  }
};

// ➡️ Update equipment
exports.updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByPk(req.params.id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }
    await equipment.update(req.body);
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update equipment' });
  }
};

// ➡️ Delete equipment
exports.deleteEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByPk(req.params.id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }
    await equipment.destroy();
    res.json({ message: 'Equipment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete equipment' });
  }
};

