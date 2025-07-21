// src/screens/ProductScreen.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductScreen = () => {
  const { id } = useParams(); // Get the product ID from URL
  const navigate = useNavigate(); // Hook for navigation
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=1`);
  };

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto rounded shadow-md"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <p className="mt-6 text-xl font-semibold">₹{product.price}</p>
        <p className="mt-2 text-sm">In Stock: {product.countInStock}</p>
        <button
          onClick={addToCartHandler}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={product.countInStock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductScreen;
