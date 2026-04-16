// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const equipmentRoutes = require('./routes/equipment');
const rentalRoutes = require('./routes/rental');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/rentals', rentalRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Equipment Rental System Backend is running');
});

// Sync database and start server
sequelize.sync()
  .then(() => {
    console.log('✅ Database connected');
    app.listen(3000, () => {
      console.log('🚀 Server running on http://localhost:3000');
    });
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err);
  });
