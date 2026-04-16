// seed.js

const sequelize = require('./config/database');
const User = require('./models/User');
const Equipment = require('./models/Equipment');
const Rental = require('./models/Rental');
const bcrypt = require('bcrypt');

const seed = async () => {
  try {
    // Sync database (drop and recreate tables)
    await sequelize.sync({ force: true });
    console.log('✅ Database synced');

    // Seed Users
    const passwordHash = await bcrypt.hash('password123', 10);
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: passwordHash,
      role: 'admin'
    });

    const user = await User.create({
      name: 'Regular User',
      email: 'user@example.com',
      password: passwordHash,
      role: 'user'
    });

    console.log('✅ Users seeded');

    // Seed Equipment
    const camera = await Equipment.create({
      name: 'Camera',
      description: 'Canon DSLR Camera',
      available: true
    });

    const projector = await Equipment.create({
      name: 'Projector',
      description: 'HD Projector',
      available: true
    });

    console.log('✅ Equipment seeded');

    // Seed Rentals
    await Rental.create({
      userId: user.id,
      equipmentId: camera.id,
      rentedAt: new Date(),
      returnedAt: null
    });

    console.log('✅ Rentals seeded');

    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

seed();
