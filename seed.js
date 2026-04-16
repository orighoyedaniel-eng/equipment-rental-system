const bcrypt = require("bcrypt");
const sequelize = require("/workspaces/equipment-rental-system/config/database.js");
const User = require("/workspaces/equipment-rental-system/models/User.js");
const Equipment = require("/workspaces/equipment-rental-system/models/Equipment.js");
const Rental = require("/workspaces/equipment-rental-system/models/Rental.js");

async function seed() {
  try {
    // Sync database (drop and recreate tables if needed)
    await sequelize.sync({ force: true });
    console.log("Database synced");

    // Create users
    const adminPassword = await bcrypt.hash("admin123", 10);
    const userPassword = await bcrypt.hash("user123", 10);

    const admin = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password_hash: adminPassword,
      role: "admin"
    });

    const john = await User.create({
      name: "John Doe",
      email: "john@example.com",
      password_hash: userPassword,
      role: "user"
    });

    const jane = await User.create({
      name: "Jane Smith",
      email: "jane@example.com",
      password_hash: userPassword,
      role: "user"
    });

    console.log("Users created");

    // Create equipment
    const excavator = await Equipment.create({
      name: "Excavator",
      category: "Heavy Machinery",
      serial_number: "EXC-001",
      item_condition: "Good",
      quantity: 2
    });

    const mixer = await Equipment.create({
      name: "Concrete Mixer",
      category: "Construction",
      serial_number: "CMX-101",
      item_condition: "Excellent",
      quantity: 5
    });

    const chainsaw = await Equipment.create({
      name: "Chainsaw",
      category: "Tools",
      serial_number: "CHS-555",
      item_condition: "Fair",
      quantity: 10
    });

    console.log("Equipment created");

    // Create rentals
    await Rental.create({
      user_id: john.id,
      equipment_id: excavator.id,
      status: "rented",
      due_date: new Date(Date.now() + 7*24*60*60*1000) // 7 days
    });

    await Rental.create({
      user_id: jane.id,
      equipment_id: mixer.id,
      status: "rented",
      due_date: new Date(Date.now() + 7*24*60*60*1000)
    });

    await Rental.create({
      user_id: john.id,
      equipment_id: chainsaw.id,
      status: "returned",
      due_date: new Date(Date.now() + 7*24*60*60*1000)
    });

    console.log("Rentals created");

    process.exit();
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seed();
