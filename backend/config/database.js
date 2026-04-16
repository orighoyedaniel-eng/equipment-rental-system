const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("equipment_rental", "root", "strongpassword", {
  host: "localhost",
  port: 3000
  dialect: "mysql"
});

module.exports = sequelize;
