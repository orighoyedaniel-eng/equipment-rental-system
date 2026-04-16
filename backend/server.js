const sequelize = require("/workspaces/equipment-rental-system/config/database.js");
const User = require("/workspaces/equipment-rental-system/models/User.js");
const Equipment = require("/workspaces/equipment-rental-system/models/Equipment.js");
const Rental = require("/workspaces/equipment-rental-system/models/Rental.js");


sequelize.sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch(err => console.error("Error syncing DB:", err));
