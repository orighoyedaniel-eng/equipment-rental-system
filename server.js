const express = require("express");
const path = require("path");
const sequelize = require("./config/database");

// Import routes
const authRoutes = require("./routes/auth");
const equipmentRoutes = require("./routes/equipment");
const rentalRoutes = require("./routes/rentals");

const app = express();
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/rentals", rentalRoutes);

// Sync DB
sequelize.sync()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("DB error:", err));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
