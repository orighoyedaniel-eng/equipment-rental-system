// middleware/roleMiddleware.js

// Pass in allowed roles as an array, e.g. ['admin', 'manager']
const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    // req.user should already be set by authMiddleware
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized, no user info found' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden, insufficient role' });
    }

    next(); // user has the required role, proceed
  };
};

module.exports = roleMiddleware;
