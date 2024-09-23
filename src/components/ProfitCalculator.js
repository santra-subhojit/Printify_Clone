// src/components/ProfitCalculator.js
import React from 'react';
import './ProfitCalculator.css'; // Custom CSS for enhanced styling

function ProfitCalculator() {
  return (
    <div className="profit-calculator bg-[#1e2b3a] text-white py-16 px-10 rounded-lg shadow-md mx-auto my-10 flex flex-col md:flex-row items-center justify-between">
      {/* Profit Calculator Content */}
      <div className="profit-calculator-content md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold text-white mb-6">Make Money, Risk-Free</h2>
        <p className="text-lg text-gray-200 mb-8">
          You pay for fulfillment only when you make a sale
        </p>

        {/* Profit Table */}
        <div className="profit-table bg-[#2c3e50] p-6 rounded-lg shadow-md mb-8">
          <div className="flex justify-between mb-4">
            <span className="text-lg text-gray-300">You sell a t-shirt</span>
            <span className="text-lg text-gray-300">$30</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-lg text-gray-300">You pay for production</span>
            <span className="text-lg text-gray-300">$12</span>
          </div>
          <div className="flex justify-between text-lg font-semibold text-green-500">
            <span>Your profit</span>
            <span>$18</span>
          </div>
        </div>

        {/* Start Selling Button */}
        <button className="start-selling-btn px-8 py-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 mb-4">
          Start Selling
        </button>

        <p className="text-gray-400">100% Free to use - 900+ Products - Largest print network</p>
      </div>

      {/* Profit Calculator Image */}
      <div className="profit-calculator-image md:w-1/2 flex justify-center">
        <img src="https://via.placeholder.com/400x300" alt="Woman watering money plant" className="rounded-lg shadow-md w-full h-auto" />
      </div>
    </div>
  );
}

export default ProfitCalculator;
