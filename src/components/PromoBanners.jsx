import React, { useState, useEffect } from 'react';

const PromoBanners = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const promoBanners = [
    {
      id: 1,
      title: 'MEGA SALE',
      subtitle: 'Up to 60% OFF',
      description: 'On all eco-friendly products',
      bgColor: 'from-red-500 to-pink-600',
      icon: '🔥'
    },
    {
      id: 2,
      title: 'FREE SHIPPING',
      subtitle: 'On orders above $50',
      description: 'Sustainable delivery nationwide',
      bgColor: 'from-green-500 to-emerald-600',
      icon: '🚚'
    },
    {
      id: 3,
      title: 'NEW ARRIVALS',
      subtitle: 'Fresh Collection',
      description: 'Handpicked artisan crafts',
      bgColor: 'from-blue-500 to-indigo-600',
      icon: '✨'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % promoBanners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [promoBanners.length]);

  return (
    <div className="mb-8">
      <div className="relative h-24 overflow-hidden rounded-lg shadow-md">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentBanner * 100}%)` }}
        >
          {promoBanners.map((banner) => (
            <div
              key={banner.id}
              className={`min-w-full h-full bg-gradient-to-r ${banner.bgColor} flex items-center justify-center text-white relative overflow-hidden`}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-full animate-bounce delay-500" />
              </div>
              
              <div className="text-center z-10">
                <div className="text-2xl mb-1">{banner.icon}</div>
                <h3 className="text-lg font-bold">{banner.title}</h3>
                <p className="text-sm font-medium">{banner.subtitle}</p>
                <p className="text-xs opacity-90">{banner.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {promoBanners.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-1 rounded-full transition-all ${
                currentBanner === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoBanners;