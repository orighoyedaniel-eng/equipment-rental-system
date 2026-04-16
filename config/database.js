const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("equipment_rental", "root", "your_password", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
