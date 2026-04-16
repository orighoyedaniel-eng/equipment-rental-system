// routes/rental.js

const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentalController');

// ➡️ Get all rentals (admin view)
router.get('/', rentalController.getAllRentals);

// ➡️ Get rentals for a specific user
router.get('/user/:userId', rentalController.getUserRentals);

// ➡️ Rent equipment
router.post('/', rentalController.rentEquipment);

// ➡️ Return equipment
router.put('/:id/return', rentalController.returnEquipment);

module.exports = router;
