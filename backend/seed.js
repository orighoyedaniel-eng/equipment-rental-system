const bcrypt = require("bcrypt");
const sequelize = require("./config/database");
const User = require("./models/User");
const Equipment = require("./models/Equipment");
const Rental = require("./models/Rental");

async function seed() {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced");

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

    await Rental.create({
      user_id: john.id,
      equipment_id: excavator.id,
      status: "rented",
      due_date: new Date(Date.now() + 7*24*60*60*1000)
    });

    await Rental.create({
      user_id: jane.id,
      equipment_id: mixer.id,
      status: "rented",
      due_date: new Date(Date.now() +