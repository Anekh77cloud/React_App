import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      type: 'seasonal',
      title: 'Winter Collection Sale',
      subtitle: 'Up to 70% OFF on Handcrafted Items',
      description: 'Cozy up with our eco-friendly winter essentials',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: 'from-blue-600 to-purple-700',
      textColor: 'text-white'
    },
    {
      id: 2,
      type: 'discount',
      title: 'FLAT 50% OFF',
      subtitle: 'On All Natural Fiber Products',
      description: 'Limited time offer - Shop sustainable handicrafts',
      image: 'https://nishadesigns.com/wp-content/uploads/2023/03/fiber-banner8.png?auto=compress&cs=tinysrgb&w=800',
      bgColor: 'from-green-500 to-emerald-600',
      textColor: 'text-white'
    },
    {
      id: 3,
      type: 'category',
      title: 'Home Decor Collection',
      subtitle: 'Transform Your Space Naturally',
      description: 'Baskets, lamps, and decorative items',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: 'from-orange-500 to-red-600',
      textColor: 'text-white'
    },
    {
      id: 4,
      type: 'new-arrivals',
      title: 'New Arrivals',
      subtitle: 'Fresh Handcrafted Treasures',
      description: 'Discover the latest eco-friendly additions',
      image: 'https://images.pexels.com/photos/1598300/pexels-photo-1598300.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: 'from-pink-500 to-rose-600',
      textColor: 'text-white'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8">
      {/* Banner Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`min-w-full h-full bg-gradient-to-r ${banner.bgColor} relative flex items-center`}
          >
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${banner.image})` }}
            />
            
            {/* Content */}
            <div className="relative z-10 w-full px-8 md:px-16">
              <div className="max-w-2xl">
                <div className={`text-sm font-medium mb-2 ${banner.textColor} opacity-90`}>
                  {banner.type === 'seasonal' && '🎄 SEASONAL SALE'}
                  {banner.type === 'discount' && '🏷️ SPECIAL OFFER'}
                  {banner.type === 'category' && '🏠 FEATURED CATEGORY'}
                  {banner.type === 'new-arrivals' && '✨ NEW ARRIVALS'}
                </div>
                <h2 className={`text-3xl md:text-5xl font-bold mb-3 ${banner.textColor}`}>
                  {banner.title}
                </h2>
                <p className={`text-lg md:text-xl mb-2 ${banner.textColor} opacity-90`}>
                  {banner.subtitle}
                </p>
                <p className={`text-sm md:text-base mb-6 ${banner.textColor} opacity-80`}>
                  {banner.description}
                </p>
                <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2">
              <img 
                src={banner.image} 
                alt={banner.title}
                className="w-48 h-48 object-cover rounded-full shadow-2xl opacity-80"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;