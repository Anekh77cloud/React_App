import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [currentCraftStory, setCurrentCraftStory] = useState(0);
  const [currentSeasonalBanner, setCurrentSeasonalBanner] = useState(0);
  const [currentArtisan, setCurrentArtisan] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 32, seconds: 45 });

  // Craft Stories Banners
  const craftStories = [
    {
      id: 1,
      title: "Handcrafted in Kerala – Shop the Tradition",
      artisanImage: "https://tse3.mm.bing.net/th/id/OIP.Z0wPSd0fV8jcOqewsCUmEgHaLH?w=600&h=900&rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=600",
      productImage: "https://tse3.mm.bing.net/th/id/OIP.jjX_nfcbwyKoLVuCcsAbagHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "From coconut husks to beautiful coir mats",
      bgColor: "from-amber-600 to-orange-700",
      category: "Coir Products"
    },
    {
      id: 2,
      title: "Clay Artistry from Rajasthan Villages",
      artisanImage: "https://decodemalayalam.com/wp-content/uploads/2024/07/2-5.jpg?auto=compress&cs=tinysrgb&w=600",
      productImage: "https://cdn.shopify.com/s/files/1/0594/7251/1153/files/clay_cookware_65a3f9fa-04f6-412f-a8de-246f7ae208a4.jpg?v=1672134491",
      description: "Traditional pottery techniques passed down generations",
      bgColor: "from-red-600 to-pink-700",
      category: "Clay Products"
    },
    {
      id: 3,
      title: "Bamboo Crafts from Northeast India",
      artisanImage: "https://th.bing.com/th/id/R.b56c3342e95a6d4a4be68874e167f6d6?rik=QeGtuJCJmObGCQ&riu=http%3a%2f%2fwww.indianholiday.com%2fphoto-gallery%2fchattishgarh%2ftourism--chhattisgarh%2farts-and-crafts%2fchattisgarh-crafts%2fbamboo-work-2206.jpg&ehk=Xj8MhE9GTgBaeOwuTyfY%2frXbrUThvf93s%2b4v%2bRPXW7c%3d&risl=&pid=ImgRaw&r=0?auto=compress&cs=tinysrgb&w=600",
      productImage: "https://ae01.alicdn.com/kf/HTB1Drh4jxSYBuNjSsphq6zGvVXaN/23x28cm-25x38cm-modern-bamboo-work-hand-knitted-bamboo-Pendant-Lamp-Pendant-Lamp-With-bamboo-Shades-For.jpg",
      description: "Sustainable bamboo transformed into beautiful lamps",
      bgColor: "from-green-600 to-emerald-700",
      category: "Bamboo Products"
    }
  ];

  // Seasonal/Festival Banners
  const seasonalBanners = [
    {
      id: 1,
      title: "Onam Fest – Up to 30% Off",
      subtitle: "Celebrate with Traditional Crafts",
      image: "https://images.creativemarket.com/0.1.0/ps/11681192/2340/1560/m1/fpnw/wm1/m16bf0029onam004-.jpg?1642390726&s=4f622f1cdf7a42f6b605340c42e4901e?auto=compress&cs=tinysrgb&w=800",
      bgColor: "from-yellow-500 to-orange-600",
      decorativeElements: "🪔✨🌺",
      description: "Kathakali colors meet traditional crafts"
    },
    {
      id: 2,
      title: "Monsoon Home Essentials",
      subtitle: "Cozy Up with Natural Crafts",
      image: "https://img.freepik.com/premium-vector/monsoon-season-banner-sale-with-pastel-color-scheme-vector-illustration_581980-502.jpg?w=740?auto=compress&cs=tinysrgb&w=800",transform: "scale(0.8)", transformOrigin: "center", 
      bgColor: "from-blue-500 to-teal-600",
      decorativeElements: "☔🍃🏠",
      description: "Perfect for rainy weather comfort"
    },
    {
      id: 3,
      title: "Diwali Special Collection",
      subtitle: "Light Up Your Home Naturally",
      image: "https://static.vecteezy.com/system/resources/previews/000/676/013/original/indian-festival-happy-diwali-greeting-banner-vector.jpg?auto=compress&cs=tinysrgb&w=800", transform: "scaleX(-1)",
      bgColor: "from-purple-500 to-pink-600",
      decorativeElements: "🪔🎆✨",
      description: "Traditional lamps and decorative items"
    }
  ];

  // Artisan Highlights
  const artisans = [
    {
      id: 1,
      name: "Kalyani Amma",
      location: "Kollam, Kerala",
      photo: "https://thumbs.dreamstime.com/b/kerala-woman-weaving-old-preparing-thread-derived-coconut-backwaters-village-india-55747762.jpg?auto=compress&cs=tinysrgb&w=400",
      specialty: "Coir Mat Weaving",
      bestSeller: "Kerala Coir Door Mat",
      experience: "45+ years",
      story: "Master weaver keeping traditional techniques alive"
    },
    {
      id: 2,
      name: "Damodaran",
      location: "Kannur, Kerala",
      photo: "https://tse1.mm.bing.net/th/id/OIP.f-4E9vBrXXODzKDOGMrCJwHaLI?w=599&h=900&rs=1&pid=ImgDetMain&o=7&rm=3?s=612x612&w=gi&k=20&c=XrjY54gVUoVUqkmS1sdKhxKrhB-Lf5P8ZF3eQEV1gdY=?auto=compress&cs=tinysrgb&w=400",
      specialty: "Clay Pottery",
      bestSeller: "Clay Plate Set",
      experience: "30+ years",
      story: "Third-generation potter creating timeless pieces"
    },
    {
      id: 3,
      name: "Vyshnavi K K",
      location: "Thrissur, Kerala",
      photo: "https://img.freepik.com/premium-photo/young-indian-malayali-girl-as-she-enjoys-serene-moment-cozy-cafe_684705-2147.jpg?w=996?auto=compress&cs=tinysrgb&w=400",
      specialty: "Coconut Shell Products",
      bestSeller: "Teap Pott",
      experience: "10+ years",
      story: "Sustainable craft innovator and teacher"
    }
  ];

  // Categories Data
  const categories = [
    {
      id: 1,
      name: "Coir Products",
      description: "Natural coconut fiber crafts",
      image: "https://tse3.mm.bing.net/th/id/OIP.jjX_nfcbwyKoLVuCcsAbagHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      productCount: 2,
      discount: "25% OFF",
      bgColor: "from-amber-400 to-orange-500"
    },
    {
      id: 2,
      name: "Clay & Pottery",
      description: "Handmade earthenware",
      image: "https://cdn.shopify.com/s/files/1/0594/7251/1153/files/clay_cookware_65a3f9fa-04f6-412f-a8de-246f7ae208a4.jpg?v=1672134491",
      productCount: 2,
      discount: "30% OFF",
      bgColor: "from-red-400 to-pink-500"
    },
    {
      id: 3,
      name: "Bamboo Crafts",
      description: "Sustainable bamboo products",
      image: "https://ae01.alicdn.com/kf/HTB1Drh4jxSYBuNjSsphq6zGvVXaN/23x28cm-25x38cm-modern-bamboo-work-hand-knitted-bamboo-Pendant-Lamp-Pendant-Lamp-With-bamboo-Shades-For.jpg",
      productCount: 6,
      discount: "20% OFF",
      bgColor: "from-green-400 to-emerald-500"
    },
    {
      id: 4,
      name: "Jute & Hemp",
      description: "Natural fiber accessories",
      image: "https://i.pinimg.com/originals/86/39/d9/8639d95343028640a5661855ef01143f.jpg",
      productCount: 5,
      discount: "35% OFF",
      bgColor: "from-yellow-400 to-amber-500"
    },
    {
      id: 5,
      name: "Palm Leaf Crafts",
      description: "Woven palm leaf products",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400",
      productCount: 5,
      discount: "40% OFF",
      bgColor: "from-teal-400 to-cyan-500"
    },
    {
      id: 6,
      name: "Natural Fiber Bags",
      description: "Eco-friendly carry solutions",
      image: "https://th.bing.com/th/id/R.219c117687025e7755881ae3c8be81e3?rik=uPVJlr7pywsXpA&riu=http%3a%2f%2fwww.dsource.in%2fsites%2fdefault%2ffiles%2fresource%2fbanana-fiber-craft-%e2%80%93-anegundi-karnataka%2fproducts%2fminigallery%2f12361%2f04.jpg&ehk=iC2SGVwyZgL00Ehz%2b5uZCea3aEHloiLpi%2bylHGeE7fA%3d&risl=&pid=ImgRaw&r=0",
      productCount: 6,
      discount: "28% OFF",
      bgColor: "from-purple-400 to-indigo-500"
    },
    {
      id: 7,
      name: "Handloom Fabrics",
      description: "Handcrafted handloom textiles from the villages of India",
      image: "https://static.fibre2fashion.com/articleresources/images/98/9737/big_Handloom%20saree%20weaving%20india_Big.jpg",
      productCount: 7,
      discount: "15% OFF",
      bgColor: "from-gray-400 to-gray-500"
    }
  ];

  // Auto-slide effects
  useEffect(() => {
    const craftTimer = setInterval(() => {
      setCurrentCraftStory((prev) => (prev + 1) % craftStories.length);
    }, 5000);

    const seasonalTimer = setInterval(() => {
      setCurrentSeasonalBanner((prev) => (prev + 1) % seasonalBanners.length);
    }, 4000);

    const artisanTimer = setInterval(() => {
      setCurrentArtisan((prev) => (prev + 1) % artisans.length);
    }, 6000);

    return () => {
      clearInterval(craftTimer);
      clearInterval(seasonalTimer);
      clearInterval(artisanTimer);
    };
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Craft Categories</h1>
          <p className="text-gray-600 text-lg">Discover authentic handcrafted treasures from across India</p>
        </div>

        {/* Craft Stories Banner */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">From Village to Your Home</h2>
          <div className="relative h-80 overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentCraftStory * 100}%)` }}
            >
              {craftStories.map((story) => (
                <div
                  key={story.id}
                  className={`min-w-full h-full bg-gradient-to-r ${story.bgColor} relative flex items-center`}
                >
                  <div className="w-full px-8 md:px-16 flex items-center justify-between">
                    {/* Left Side - Artisan */}
                    <div className="flex-1 text-white">
                      <div className="mb-4">
                        <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
                          {story.category}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{story.title}</h3>
                      <p className="text-lg mb-6 opacity-90">{story.description}</p>
                      <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Shop Collection
                      </button>
                    </div>
                    
                    {/* Right Side - Before/After Images */}
                    <div className="hidden md:flex items-center space-x-8">
                      <div className="text-center">
                        <img 
                          src={story.artisanImage} 
                          alt="Artisan at work"
                          className="w-32 h-32 object-cover rounded-full shadow-lg mb-2"
                        />
                        <p className="text-white text-sm font-medium">Artisan at Work</p>
                      </div>
                      <div className="text-white text-2xl">→</div>
                      <div className="text-center">
                        <img 
                          src={story.productImage} 
                          alt="Final product"
                          className="w-32 h-32 object-cover rounded-full shadow-lg mb-2"
                        />
                        <p className="text-white text-sm font-medium">Final Product</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {craftStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCraftStory(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentCraftStory === index ? 'bg-white scale-110' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Limited Stock + Countdown Banner */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-6 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">⏳ Limited Time Offer!</h3>
              <p className="text-lg mb-4">Only 50 Clay Water Pots Left – Offer Ends Soon</p>
              <div className="flex justify-center space-x-4 mb-4">
                <div className="bg-white bg-opacity-20 px-3 py-2 rounded">
                  <div className="text-2xl font-bold">{timeLeft.days}</div>
                  <div className="text-xs">Days</div>
                </div>
                <div className="bg-white bg-opacity-20 px-3 py-2 rounded">
                  <div className="text-2xl font-bold">{timeLeft.hours}</div>
                  <div className="text-xs">Hours</div>
                </div>
                <div className="bg-white bg-opacity-20 px-3 py-2 rounded">
                  <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-xs">Minutes</div>
                </div>
                <div className="bg-white bg-opacity-20 px-3 py-2 rounded">
                  <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-xs">Seconds</div>
                </div>
              </div>
              <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Shop Now - 40% OFF
              </button>
            </div>
          </div>
        </div>

        {/* Seasonal/Festival Banners */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Seasonal Collections</h2>
          <div className="relative h-64 overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSeasonalBanner * 100}%)` }}
            >
              {seasonalBanners.map((banner) => (
                <div
                  key={banner.id}
                  className={`min-w-full h-full bg-gradient-to-r ${banner.bgColor} relative flex items-center`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${banner.image})` }}
                  />
                  <div className="relative z-10 w-full px-8 md:px-16 flex items-center justify-between">
                    <div className="text-white">
                      <div className="text-3xl mb-2">{banner.decorativeElements}</div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">{banner.title}</h3>
                      <p className="text-xl mb-2">{banner.subtitle}</p>
                      <p className="text-sm opacity-90 mb-4">{banner.description}</p>
                      <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Explore Collection
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eco-Friendly Promise Banner */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="swaying-leaves">
                <div className="leaf leaf-1">🌿</div>
                <div className="leaf leaf-2">🍃</div>
                <div className="leaf leaf-3">🌱</div>
                <div className="leaf leaf-4">🌿</div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">🌍 Our Eco-Friendly Promise</h3>
              <p className="text-lg">Every product saves plastic from our landfills and supports sustainable living</p>
            </div>
          </div>
        </div>

        {/* Artisan Highlights */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Artisans</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-6">
              <img 
                src={artisans[currentArtisan].photo} 
                alt={artisans[currentArtisan].name}
                className="w-24 h-24 object-cover rounded-full shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{artisans[currentArtisan].name}</h3>
                <p className="text-gray-600 mb-1">{artisans[currentArtisan].location}</p>
                <p className="text-green-700 font-semibold mb-1">{artisans[currentArtisan].specialty}</p>
                <p className="text-sm text-gray-500 mb-2">{artisans[currentArtisan].experience} • {artisans[currentArtisan].story}</p>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">Best Seller: {artisans[currentArtisan].bestSeller}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
                    View Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.name}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${category.bgColor} relative`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all" />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {category.discount}
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-2">{category.description}</p>
                    <p className="text-xs opacity-75">{category.productCount} products available</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;