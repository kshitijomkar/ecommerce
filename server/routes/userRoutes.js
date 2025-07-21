const express = require('express');
const { protect, adminOnly } = require('../middleware/authMiddleware');  // Import middleware

const router = express.Router();

// Route to get the logged-in user's profile (protected route)
router.get('/profile', protect, (req, res) => {
  res.json(req.user);  // Return the user data (excluding password)
});

// Admin-only route (protected and restricted to admins)
router.get('/admin', protect, adminOnly, (req, res) => {
  res.json({ message: 'Welcome, admin user!' });  // Admin-specific message
});

module.exports = router;
