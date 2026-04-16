// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // make sure you have config/database.js
const authRoutes = require('./routes/auth');     // routes/auth.js
const equipmentRoutes = require('./routes/equipment'); // routes/equipment.js
const rentalRoutes = require('./routes/rental'); // routes/rental.js

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/rentals', rentalRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Equipment Rental System Backend is running');
});

// Sync database and start server
sequelize.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });
