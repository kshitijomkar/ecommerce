const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure emails are unique
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'], // Enum for user roles
      default: 'user', // Default to 'user' if not provided
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

module.exports = mongoose.model('User', userSchema);
