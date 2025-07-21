import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <strong>{product.name}</strong>: ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
