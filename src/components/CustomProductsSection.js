import React from 'react';
import './CustomProductsSection.css'; // Importing custom styles

function CustomProductsSection() {
  return (
    <div className="custom-products-section flex flex-col md:flex-row justify-between items-center py-16 px-10 bg-white shadow-md mx-auto my-10 rounded-lg">
      {/* Text Section */}
      <div className="text md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-5">Easily add your design to a wide range of products</h2>
        <p className="text-lg text-gray-600 mb-4">
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a href="#" className="cta-link text-green-600 text-lg font-semibold hover:text-green-700 transition-all">
          Learn more about creating custom products &rarr;
        </a>
      </div>

      {/* Image Section */}
      <div className="image md:w-1/2 flex justify-center">
        <div className="image-grid">
          <img src="/path/to/tshirt.png" alt="Custom T-Shirt" className="product-image"/>
          <img src="/path/to/mug.png" alt="Custom Mug" className="product-image"/>
          <img src="/path/to/phonecase.png" alt="Custom Phone Case" className="product-image"/>
          <img src="/path/to/otherproduct.png" alt="Other Products" className="product-image"/>
        </div>
      </div>
    </div>
  );
}

export default CustomProductsSection;
