import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Shipping({ cart = [] }) {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0);
  };

  const shippingCost = 5.99;
  const tax = calculateSubtotal() * 0.08; // 8% tax
  const total = calculateSubtotal() + shippingCost + tax;

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order processing
    alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Your cart is empty</h2>
        <button 
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-green-700">Checkout</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={shippingInfo.fullName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shippingInfo.city}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={shippingInfo.state}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={shippingInfo.zipCode}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={shippingInfo.phone}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-4">Payment Method</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Credit/Debit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                PayPal
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold text-lg mt-6"
            >
              Place Order - ${total.toFixed(2)}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          
          <div className="space-y-3 mb-4">
            {cart.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded mr-3" />
                  <div>
                    <div className="font-medium">{item.name}</div>
                  </div>
                </div>
                <div className="font-bold">{item.price}</div>
              </div>
            ))}
          </div>

          <hr className="my-4" />
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}