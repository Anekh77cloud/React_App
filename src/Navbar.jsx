import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountDetails from './AccountDetails';

export default function Navbar({ user, onSignOut, onSearch }) {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    if (searchTerm) {
      onSearch(searchTerm);
      navigate('/products');
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-md px-6 py-3 flex items-center flex-wrap gap-4">
      <div className="flex items-center justify-between w-full">
        {/* Logo/Site Name (left) */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="Earth Mart Logo" className="h-12 w-auto object-contain" />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-700">EarthMart</span>
        </div>
        

        {/* Navigation Links (center) */}
        <nav className="flex items-center gap-6 text-base font-medium flex-shrink-0">
          <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
          <Link to="/categories" className="text-gray-700 hover:text-green-700">Categories</Link>
          <Link to="/products" className="text-gray-700 hover:text-green-700">Products</Link>
          <Link to="/cart" className="text-gray-700 hover:text-green-700">Cart</Link>
          <Link to="/about" className="text-gray-700 hover:text-green-700">About</Link>
          {user && user.email === 'admin@earthmart.com' && (
            <Link to="/admin" className="text-gray-700 hover:text-green-700">Admin</Link>
          )}
        </nav>

        {/* Search Bar (right) */}
        <form onSubmit={handleSearch} className="flex items-center flex-shrink-0">
          <input 
            type="text" 
            name="search"
            placeholder="Search products..." 
            className="w-32 sm:w-40 md:w-56 lg:w-72 max-w-md rounded-l-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700" 
          />
          <button type="submit" className="px-4 py-2 rounded-r-full bg-green-600 text-white font-semibold hover:bg-green-700 transition border border-green-600">
            Search
          </button>
        </form>

        {/* Account Details (top right) */}
        <div className="ml-4">
          <AccountDetails user={user} onSignOut={() => { onSignOut(); navigate('/login'); }} />
        </div>
      </div>
    </header>
  );
}
