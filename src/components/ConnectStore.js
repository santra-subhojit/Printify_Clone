// src/components/ConnectStore.js
import React from 'react';

function ConnectStore() {
  return (
    <div className="connect-store text-center py-16 bg-white shadow-md mx-auto my-10 rounded-lg">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-5">Connect Your Store</h2>
      
      {/* Section Description */}
      <p className="text-lg text-gray-600 mb-8">
        Printify easily integrates with major e-commerce platforms and marketplaces.
      </p>

      {/* Store Icons */}
      <div className="store-icons flex justify-center flex-wrap gap-10">
        <img src="https://via.placeholder.com/100" alt="API" className="w-24 h-24 transition-transform transform hover:scale-110"/>
        <img src="https://via.placeholder.com/100" alt="Shopify" className="w-24 h-24 transition-transform transform hover:scale-110"/>
        <img src="https://via.placeholder.com/100" alt="Etsy" className="w-24 h-24 transition-transform transform hover:scale-110"/>
        <img src="https://via.placeholder.com/100" alt="WooCommerce" className="w-24 h-24 transition-transform transform hover:scale-110"/>
        <img src="https://via.placeholder.com/100" alt="eBay" className="w-24 h-24 transition-transform transform hover:scale-110"/>
      </div>
    </div>
  );
}

export default ConnectStore;
