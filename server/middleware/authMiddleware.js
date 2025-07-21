const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Import User model

// Middleware to protect routes (requires authentication)
const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer')) {
    try {
      token = token.split(' ')[1];  // Extract the token from the header
      const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify the token
      req.user = await User.findById(decoded.id).select('-password');  // Attach the user to the request object
      next();  // Proceed to the next middleware or route handler
    } catch (error) {
      return res.status(401).json({ message: 'Token failed, not authorized' });
    }
  } else {
    return res.status(401).json({ message: 'No token, not authorized' });
  }
};

// Middleware to allow access only to admin users
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();  // Proceed if the user is an admin
  } else {
    return res.status(403).json({ message: 'Admin access only' });
  }
};

module.exports = { protect, adminOnly };
