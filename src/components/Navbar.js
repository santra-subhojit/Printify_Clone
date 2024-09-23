// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-green-600">Printify</div>

      {/* Hamburger icon */}
      <button className="text-2xl md:hidden" onClick={handleMenuToggle}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu (collapsible) */}
      <div
        className={`fixed inset-0 bg-white p-10 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        {/* Close Button */}
        <button
          onClick={handleMenuToggle}
          className="absolute top-5 right-5 text-2xl font-bold"
        >
          ✕
        </button>
        <ul className="space-y-5 mt-10">
          <li><a href="#" className="text-gray-700 text-lg hover:text-green-600">Catalog</a></li>
          <li><a href="#" className="text-gray-700 text-lg hover:text-green-600">How it works</a></li>
          <li><a href="#" className="text-gray-700 text-lg hover:text-green-600">Pricing</a></li>
          <li><a href="#" className="text-gray-700 text-lg hover:text-green-600">Blog</a></li>
          <li><a href="#" className="text-gray-700 text-lg hover:text-green-600">Services</a></li>
          <li><a href="#" className="text-gray-700 text-lg hover:text-green-600">Use-cases</a></li>
          <li><a href="#" className="text-gray-700 text-lg hover:text-green-600">Need help?</a></li>
        </ul>
      </div>

      {/* Desktop Menu (static) */}
      <ul className="hidden md:flex space-x-5">
        <li><a href="#" className="text-gray-700 hover:text-green-600">Catalog</a></li>
        <li><a href="#" className="text-gray-700 hover:text-green-600">How it works</a></li>
        <li><a href="#" className="text-gray-700 hover:text-green-600">Pricing</a></li>
        <li><a href="#" className="text-gray-700 hover:text-green-600">Blog</a></li>
        <li><a href="#" className="text-gray-700 hover:text-green-600">Services</a></li>
        <li><a href="#" className="text-gray-700 hover:text-green-600">Use-cases</a></li>
        <li><a href="#" className="text-gray-700 hover:text-green-600">Need help?</a></li>
      </ul>

      {/* Login/Sign Up buttons for desktop */}
      <div className="hidden md:flex space-x-3">
        <button className="px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100">Log in</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
