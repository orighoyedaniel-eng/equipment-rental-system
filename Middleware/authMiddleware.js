// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'Access denied, token missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, 'your_jwt_secret'); // replace with env variable in production
    req.user = decoded; // attach decoded user info to request
    next(); // proceed to the next middleware/route
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
