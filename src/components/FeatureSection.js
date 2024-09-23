// src/components/FeatureSection.js
import React from 'react';

function FeatureSection() {
  return (
    <div className="features-section flex flex-col md:flex-row justify-around items-center py-12 bg-gray-100">
      {/* Feature 1 */}
      <div className="feature text-center p-6 max-w-sm">
        <img src="https://via.placeholder.com/80" alt="Higher Profits Icon" className="mx-auto mb-4"/>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Higher Profits</h3>
        <p className="text-gray-600">
          We offer some of the lowest prices in the industry because print providers
          continuously compete to win your business.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="feature text-center p-6 max-w-sm">
        <img src="https://via.placeholder.com/80" alt="Robust Scaling Icon" className="mx-auto mb-4"/>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Robust Scaling</h3>
        <p className="text-gray-600">
          Easily handle peak holiday seasons, with our wide network of partners and automatic
          routing functionality.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="feature text-center p-6 max-w-sm">
        <img src="https://via.placeholder.com/80" alt="Best Selection Icon" className="mx-auto mb-4"/>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Best Selection</h3>
        <p className="text-gray-600">
          With 900+ products and top quality brands, you can choose the best products
          for your business.
        </p>
      </div>
    </div>
  );
}

export default FeatureSection;
