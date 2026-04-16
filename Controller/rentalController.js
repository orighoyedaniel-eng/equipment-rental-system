// controllers/rentalController.js

const Rental = require('../models/Rental');
const Equipment = require('../models/Equipment');
const User = require('../models/User');

// ➡️ Get all rentals (admin view)
exports.getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.findAll({
      include: [User, Equipment]
    });
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rentals' });
  }
};

// ➡️ Get rentals for a specific user
exports.getUserRentals = async (req, res) => {
  try {
    const rentals = await Rental.findAll({
      where: { userId: req.params.userId },
      include: [Equipment]
    });
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user rentals' });
  }
};

// ➡️ Rent equipment
exports.rentEquipment = async (req, res) => {
  try {
    const { userId, equipmentId } = req.body;

    const equipment = await Equipment.findByPk(equipmentId);
    if (!equipment || !equipment.available) {
      return res.status(400).json({ error: 'Equipment not available' });
    }

    const rental = await Rental.create({
      userId,
      equipmentId,
      rentedAt: new Date(),
      returnedAt: null
    });

    await equipment.update({ available: false });

    res.status(201).json(rental);
  } catch (err) {
    res.status(500).json({ error: 'Failed to rent equipment' });
  }
};

// ➡️ Return equipment
exports.returnEquipment = async (req, res) => {
  try {
    const rental = await Rental.findByPk(req.params.id, { include: Equipment });
    if (!rental || rental.returnedAt) {
      return res.status(400).json({ error: 'Rental not found or already returned' });
    }

    rental.returnedAt = new Date();
    await rental.save();

    await rental.Equipment.update({ available: true });

    res.json({ message: 'Equipment returned successfully', rental });
  } catch (err) {
    res.status(500).json({ error: 'Failed to return equipment' });
  }
};

