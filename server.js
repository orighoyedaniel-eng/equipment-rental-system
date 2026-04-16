const sequelize = require("./config/database");
const User = require("./models/User");
const Equipment = require("./models/Equipment");
const Rental = require("./models/Rental");

sequelize.sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch(err => console.error("Error syncing DB:", err));
