import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-orange-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-white text-2xl font-bold">JUMIA</h1>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="w-full px-4 py-2 rounded-md focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/account" className="text-white hover:text-gray-200 flex items-center gap-2">
              <User size={20} />
              <span>Account</span>
            </Link>
            <Link to="/cart" className="text-white hover:text-gray-200 flex items-center gap-2">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search (visible only on mobile) */}
        <div className="md:hidden py-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-md focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Search className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/account"
                className="text-white block px-3 py-2 rounded-md hover:bg-orange-600"
              >
                Account
              </Link>
              <Link
                to="/cart"
                className="text-white block px-3 py-2 rounded-md hover:bg-orange-600"
              >
                Cart
              </Link>
              <Link
                to="/categories"
                className="text-white block px-3 py-2 rounded-md hover:bg-orange-600"
              >
                Categories
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;