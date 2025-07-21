const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// Initialize dotenv to read environment variables
dotenv.config()

// Initialize Express
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())  // Enable Cross-Origin Resource Sharing
app.use(express.json())  // Parse incoming JSON requests

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express Backend!')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
