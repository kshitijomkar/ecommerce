import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'; // ⬅️ Add this line
import Header from './components/Header';
import CartScreen from './screens/CartScreen';




function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} /> {/* ⬅️ New route */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
