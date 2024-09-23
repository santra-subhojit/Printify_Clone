// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-white shadow-md mx-auto my-10 rounded-lg">
      <div className="md:w-1/2 mb-5 md:mb-0">
        <h1 className="text-5xl font-bold text-gray-800 mb-5">
          Create and sell <br /> custom products
        </h1>
        <ul className="list-none text-lg text-gray-600 space-y-2">
          <li>✔ 100% Free to use</li>
          <li>✔ 900+ High-Quality Products</li>
          <li>✔ Largest global print network</li>
        </ul>
        <div className="mt-5">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg mr-3 hover:bg-green-700">Start for free</button>
          <button className="px-6 py-3 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-100">How it works?</button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src="https://via.placeholder.com/300" alt="Custom Product" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
}

export default HeroSection;
