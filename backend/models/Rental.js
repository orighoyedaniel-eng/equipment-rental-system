const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Equipment = require("./Equipment");

const Rental = sequelize.define("Rental", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  rent_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  due_date: { type: DataTypes.DATE },
  status: { type: DataTypes.ENUM("rented", "returned"), defaultValue: "rented" }
});

// Associations
User.hasMany(Rental, { foreignKey: "user_id" });
Rental.belongsTo(User, { foreignKey: "user_id" });

Equipment.hasMany(Rental, { foreignKey: "equipment_id" });
Rental.belongsTo(Equipment, { foreignKey: "equipment_id" });

module.exports = Rental;
