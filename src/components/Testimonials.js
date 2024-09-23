// src/components/Testimonials.js
import React from 'react';

function Testimonials() {
  return (
    <div className="testimonials py-16 bg-gray-50 text-center rounded-lg shadow-md mx-auto my-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">What our customers say</h2>
      <div className="testimonial-cards grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Testimonial 1 */}
        <div className="testimonial bg-white p-6 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/80" alt="Customer Photo" className="w-20 h-20 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold mb-3">John Doe</h3>
          <p className="text-gray-600 mb-4">"Printify helped me scale my business quickly with their easy-to-use platform."</p>
          <div className="stars text-yellow-500">★★★★★</div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial bg-white p-6 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/80" alt="Customer Photo" className="w-20 h-20 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold mb-3">Jane Smith</h3>
          <p className="text-gray-600 mb-4">"The print quality and variety of products are unbeatable."</p>
          <div className="stars text-yellow-500">★★★★★</div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial bg-white p-6 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/80" alt="Customer Photo" className="w-20 h-20 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold mb-3">Mike Johnson</h3>
          <p className="text-gray-600 mb-4">"The customer support team was incredibly helpful and responsive."</p>
          <div className="stars text-yellow-500">★★★★★</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
