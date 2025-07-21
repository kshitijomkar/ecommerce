import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="border p-3 rounded shadow-md my-3 hover:shadow-lg transition-shadow duration-200">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>
        <p className="text-gray-600">₹{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
