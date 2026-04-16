const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Equipment = sequelize.define("Equipment", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING },
  serial_number: { type: DataTypes.STRING, unique: true },
  item_condition: { type: DataTypes.STRING },
  quantity: { type: DataTypes.INTEGER, defaultValue: 0 }
});

module.exports = Equipment;
