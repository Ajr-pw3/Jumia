import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT JUMIA</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-orange-500">Careers</Link></li>
              <li><Link to="/terms" className="hover:text-orange-500">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-orange-500">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-orange-500">Shipping Information</Link></li>
              <li><Link to="/returns" className="hover:text-orange-500">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PAYMENT METHODS</h3>
            <ul className="space-y-2">
              <li>Credit Card</li>
              <li>Debit Card</li>
              <li>Bank Transfer</li>
              <li>Cash on Delivery</li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONNECT WITH US</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500"><Facebook /></a>
              <a href="#" className="hover:text-orange-500"><Twitter /></a>
              <a href="#" className="hover:text-orange-500"><Instagram /></a>
              <a href="#" className="hover:text-orange-500"><Youtube /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Jumia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;