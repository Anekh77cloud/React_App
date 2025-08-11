import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart({ cart = [], removeFromCart }) {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, idx) => (
              <div key={idx} className="flex items-center bg-white rounded-lg shadow-md p-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                <div className="flex-1">
                  <strong className="text-lg">{item.name}</strong>
                  <div className="text-green-700 font-bold">{item.price}</div>
                  <div className="text-gray-500 text-sm">{item.description}</div>
                </div>
                {removeFromCart && (
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 ml-4" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
          
          {/* Cart Summary */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Total: ${calculateTotal()}</span>
            </div>
            <button 
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold text-lg"
              onClick={() => navigate('/shipping')}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}