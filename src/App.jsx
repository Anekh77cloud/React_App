import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Categories from './Categories';
import Cart from './Cart';
import About from './About';
import ProductDetails from './ProductDetails';
import Login from './Login';
import Signup from './Signup';
import Shipping from './Shipping';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: 'Anekh', email: 'anekh@example.com' }); // Example user
  const [notification, setNotification] = useState('');
  const [showSplash, setShowSplash] = useState(true);

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      setNotification('This product is already in your cart!');
      setTimeout(() => setNotification(''), 3000);
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const handleSignOut = () => {
    setUser(null);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50 flex flex-col">
      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse-notification">
          {notification}
        </div>
      )}
      <Router>
        
        <Navbar user={user} onSignOut={handleSignOut} />
        <main className="pt-20 flex-1">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home addToCart={addToCart} />} />
              <Route path="/products" element={<Products addToCart={addToCart} />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login onLogin={setUser} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/shipping" element={<Shipping cart={cart} />} />
            </Routes>
          </div>
        </main>
        <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-500 text-sm mt-8">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8">
            <div>&copy; {new Date().getFullYear()} Lokha-Eco Shop. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-green-700">Privacy Policy</a>
              <a href="#" className="hover:text-green-700">Terms of Service</a>
              <a href="#" className="hover:text-green-700">Contact</a>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
