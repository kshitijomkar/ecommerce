const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Route to make a user admin
router.get('/make-admin/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.role = 'admin';  // Set role to admin
    await user.save();
    res.send('User role updated to admin');
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
