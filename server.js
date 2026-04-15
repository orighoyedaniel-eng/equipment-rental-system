const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/equipment', equipmentRoutes);
app.use('/rentals', rentalRoutes);

app.get('/', (req, res) => {
  res.send('Equipment Rental System API running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
