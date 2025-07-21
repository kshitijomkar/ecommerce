const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); // Import the auth routes
const userRoutes = require('./routes/userRoutes');  // Import user routes
const devRoutes = require('./routes/devRoutes');  // Import dev routes

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);  // Register the user routes under /api/user
app.use('/api/dev', devRoutes);  // Register dev routes


app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
