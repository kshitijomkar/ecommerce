import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Make GET request to backend
    axios.get('http://localhost:5000/')
      .then(res => setMessage(res.data)) // Set the response data to state
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <header>
        <h1>eCommerce Website</h1>
      </header>
      <main>
        <h2>{message}</h2>  {/* Display the message from the backend */}
      </main>
      <footer>
        <p>&copy; 2025 eShop</p>
      </footer>
    </div>
  )
}

export default App
