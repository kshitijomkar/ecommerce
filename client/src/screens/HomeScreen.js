import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');  // Fetch products from the backend
        setProducts(data);  // Update state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);  // Empty dependency array means it will run only once, on component mount

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />  // Render each ProductCard
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
