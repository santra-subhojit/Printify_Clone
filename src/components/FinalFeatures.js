// src/components/FinalFeatures.js
import React from 'react';

function FinalFeatures() {
  return (
    <div className="final-features flex flex-col md:flex-row justify-around items-center py-16 bg-gray-50">
      {/* Feature 1: Sell on Your Terms */}
      <div className="final-feature text-center p-6 max-w-sm">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Sell on Your Terms Icon" 
          className="mx-auto mb-4 w-24 h-24" 
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Sell on Your Terms</h3>
        <p className="text-gray-600">
          No up-front fees, no minimum order, and the freedom to sell where you want.
        </p>
      </div>

      {/* Feature 2: We Handle Fulfillment */}
      <div className="final-feature text-center p-6 max-w-sm">
        <img 
          src="https://via.placeholder.com/100" 
          alt="We Handle Fulfillment Icon" 
          className="mx-auto mb-4 w-24 h-24" 
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">We Handle Fulfillment</h3>
        <p className="text-gray-600">
          Once you make a sale, we’ll fulfill the order and send it to your customer.
        </p>
      </div>
    </div>
  );
}

export default FinalFeatures;
