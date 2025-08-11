import React, { useState, useRef, useEffect } from 'react';

const NewArrivals = ({ addToCart }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const newProducts = [
    {
      id: 11,
      name: 'Seagrass Storage Basket',
      price: '$18',
      originalPrice: '$25',
      image: 'https://tse3.mm.bing.net/th/id/OIP.AlbCyAPFfxGm6NZzZaHu5gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=400',
      description: 'Handwoven seagrass basket with handles',
      isNew: true,
      discount: '28% OFF'
    },
    {
      id: 12,
      name: 'Bamboo Wind Chimes',
      price: '$22',
      originalPrice: '$30',
      image: 'https://i.pinimg.com/originals/9a/84/ac/9a84acd31b04473ffab270fcd03194a1.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Melodious bamboo wind chimes',
      isNew: true,
      discount: '27% OFF'
    },
    {
      id: 13,
      name: 'Cork Yoga Mat',
      price: '$35',
      originalPrice: '$45',
      image: 'https://tse4.mm.bing.net/th/id/OIP.t87fGZXmsqf1jJqGsfOTnAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=400',
      description: 'Eco-friendly cork yoga mat',
      isNew: true,
      discount: '22% OFF'
    },
    {
      id: 14,
      name: 'Hemp Rope Hammock',
      price: '$65',
      originalPrice: '$85',
      image: 'https://tse1.mm.bing.net/th/id/OIP.3aGlAJLm0kbNXWintJzZQQAAAA?w=366&h=370&rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=400',
      description: 'Comfortable hemp rope hammock',
      isNew: true,
      discount: '24% OFF'
    },
    {
      id: 15,
      name: 'Wooden Spice Rack',
      price: '$28',
      originalPrice: '$35',
      image: 'https://housefulofhandmade.com/wp-content/uploads/2018/01/wooden-spice-rack-5.jpg',
      description: 'Handcrafted wooden spice organizer',
      isNew: true,
      discount: '20% OFF'
    },
    {
      id: 16,
      name: 'Jute Table Runner',
      price: '$15',
      originalPrice: '$20',
      image: 'https://ae01.alicdn.com/kf/HTB1tFklf9fD8KJjSszhq6zIJFXaU/OurWarm-10PCS-30x275cm-Natural-Jute-Table-Runner-for-Wedding-Burlap-Table-Runners-Home-Textiles-Home-Country.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Natural jute table runner',
      isNew: true,
      discount: '25% OFF'
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">New Arrivals</h2>
          <p className="text-gray-600">Fresh handcrafted treasures just for you</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            disabled={scrollPosition === 0}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {newProducts.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </div>
              )}
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {product.discount}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-green-700">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => window.location.href = `/products/${product.id}`}
                  className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  View Details
                </button>
                {addToCart && (
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-green-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;