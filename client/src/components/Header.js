// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MyStore
        </Link>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-300">
                Cart
              </Link>
            </li>
            {/* Extend with Login/Profile later */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
