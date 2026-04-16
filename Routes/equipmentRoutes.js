// routes/equipment.js

const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');

// ➡️ Get all equipment
router.get('/', equipmentController.getAllEquipment);

// ➡️ Get equipment by ID
router.get('/:id', equipmentController.getEquipmentById);

// ➡️ Add new equipment
router.post('/', equipmentController.addEquipment);

// ➡️ Update equipment
router.put('/:id', equipmentController.updateEquipment);

// ➡️ Delete equipment
router.delete('/:id', equipmentController.deleteEquipment);

module.exports = router;
