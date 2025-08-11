import React from 'react';

const CategoryBanners = () => {
  const categories = [
    {
      id: 1,
      name: 'Kitchen & Dining',
      image: 'https://image.shutterstock.com/image-vector/vector-banner-kitchen-interior-flat-260nw-1297580386.jpg?auto=compress&cs=tinysrgb&w=400',
      discount: '40% OFF',
      bgColor: 'from-amber-400 to-orange-500'
    },
    {
      id: 2,
      name: 'Home Decor',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '50% OFF',
      bgColor: 'from-emerald-400 to-teal-500'
    },
    {
      id: 3,
      name: 'Storage Solutions',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '35% OFF',
      bgColor: 'from-purple-400 to-pink-500'
    },
    {
      id: 4,
      name: 'Lighting',
      image: 'https://tse1.mm.bing.net/th/id/OIF.3D1uJfLj7Ii532FpoRdymQ?rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=400',
      discount: '45% OFF',
      bgColor: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer bg-gradient-to-br ${category.bgColor}`}
          >
            <div className="aspect-square relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="text-white">
                  <div className="text-xs font-bold bg-red-500 px-2 py-1 rounded-full inline-block mb-2">
                    {category.discount}
                  </div>
                  <h3 className="font-bold text-sm md:text-base leading-tight">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanners;