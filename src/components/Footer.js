// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="footer-content container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* Column 1: Integrations */}
        <div className="footer-column">
          <h3 className="text-xl font-bold text-white mb-4">Integrations</h3>
          <ul>
            <li><a href="#" className="hover:text-green-400">Shopify</a></li>
            <li><a href="#" className="hover:text-green-400">Etsy</a></li>
            <li><a href="#" className="hover:text-green-400">eBay</a></li>
            <li><a href="#" className="hover:text-green-400">WooCommerce</a></li>
            <li><a href="#" className="hover:text-green-400">Wix</a></li>
          </ul>
        </div>

        {/* Column 2: Discover */}
        <div className="footer-column">
          <h3 className="text-xl font-bold text-white mb-4">Discover</h3>
          <ul>
            <li><a href="#" className="hover:text-green-400">Blog</a></li>
            <li><a href="#" className="hover:text-green-400">Guides</a></li>
            <li><a href="#" className="hover:text-green-400">Products</a></li>
            <li><a href="#" className="hover:text-green-400">Shipping times</a></li>
            <li><a href="#" className="hover:text-green-400">Mockup generator</a></li>
          </ul>
        </div>

        {/* Column 3: Start Selling */}
        <div className="footer-column">
          <h3 className="text-xl font-bold text-white mb-4">Start selling</h3>
          <ul>
            <li><a href="#" className="hover:text-green-400">Custom T-shirts</a></li>
            <li><a href="#" className="hover:text-green-400">Custom Hoodies</a></li>
            <li><a href="#" className="hover:text-green-400">Custom Mugs</a></li>
            <li><a href="#" className="hover:text-green-400">Custom Socks</a></li>
            <li><a href="#" className="hover:text-green-400">Custom Stickers</a></li>
          </ul>
        </div>

        {/* Column 4: Printify */}
        <div className="footer-column">
          <h3 className="text-xl font-bold text-white mb-4">Printify</h3>
          <ul>
            <li><a href="#" className="hover:text-green-400">Print on Demand</a></li>
            <li><a href="#" className="hover:text-green-400">Print Providers</a></li>
            <li><a href="#" className="hover:text-green-400">Expense Tracker</a></li>
            <li><a href="#" className="hover:text-green-400">Printify Experts</a></li>
            <li><a href="#" className="hover:text-green-400">About</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="social-icons flex justify-center space-x-6 mt-8">
        <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="#" aria-label="Pinterest" className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faPinterest} size="lg" />
        </a>
        <a href="#" aria-label="TikTok" className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faTiktok} size="lg" />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center mt-8 text-gray-400">
        <p>&copy; 2024 Printify, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
