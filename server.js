// Load environment variables from .env
require('dotenv').config();

// Import dependencies
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

// Create MySQL connection using .env values
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// Connect to database
db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected to database.');
});

// Simple test route
app.get('/', (req, res) => {
  db.query('SELECT NOW() AS current_time', (err, results) => {
    if (err) {
      console.error('Query error:', err);
      res.status(500).send('Database query failed');
      return;
    }
    res.send(`Database is working! Current time: ${results[0].current_time}`);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
