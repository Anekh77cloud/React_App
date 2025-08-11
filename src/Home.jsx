import React from 'react';
import BannerSlider from './components/BannerSlider';
import PromoBanners from './components/PromoBanners';
import CategoryBanners from './components/CategoryBanners';
import NewArrivals from './components/NewArrivals';

export default function Home({ addToCart }) {
  const products = [
    {
      id: 1,
      name: 'Jute Basket',
      price: '$15',
      image: 'https://i.pinimg.com/originals/86/39/d9/8639d95343028640a5661855ef01143f.jpg',
      description: 'Handmade basket crafted from natural jute fibers. Perfect for storage and decor.',
      material: 'Natural Jute Fiber',
      dimensions: '12" x 8" x 6"',
      weight: '0.8 lbs',
      origin: 'Handcrafted in Bangladesh',
      care: 'Spot clean with damp cloth, air dry',
      features: ['Eco-friendly', 'Durable', 'Lightweight', 'Versatile storage']
    },
    {
      id: 2,
      name: 'Bamboo Lamp',
      price: '$25',
      image: 'https://ae01.alicdn.com/kf/HTB1Drh4jxSYBuNjSsphq6zGvVXaN/23x28cm-25x38cm-modern-bamboo-work-hand-knitted-bamboo-Pendant-Lamp-Pendant-Lamp-With-bamboo-Shades-For.jpg',
      description: 'Eco-friendly lamp made from sustainable bamboo. Adds a warm glow to any room.',
      material: 'Sustainable Bamboo',
      dimensions: '10" x 6" x 6"',
      weight: '1.2 lbs',
      origin: 'Handcrafted in Vietnam',
      care: 'Dust with soft cloth, avoid moisture',
      features: ['LED compatible', 'Warm lighting', 'Natural finish', 'Energy efficient']
    },
    {
      id: 3,
      name: 'Coconut Shell Bowl',
      price: '$10',
      image: 'https://ae01.alicdn.com/kf/HTB1Xt.ABZyYBuNkSnfoq6AWgVXa1/1pc-Vintage-Natural-Coconut-Shell-Bowl-Eco-friendly-Ice-Cream-Bowls-Creative-Fruit-Bowl-Handicraft-Art.jpg',
      description: 'Unique bowl made from real coconut shells. Great for serving snacks or as a decorative piece.',
      material: 'Natural Coconut Shell',
      dimensions: '5" diameter x 2.5" height',
      weight: '0.3 lbs',
      origin: 'Handcrafted in Philippines',
      care: 'Hand wash with mild soap, oil occasionally',
      features: ['Food safe', 'Unique grain pattern', 'Lightweight', 'Sustainable']
    },
    {
      id: 4,
      name: 'Palm Leaf Bag',
      price: '$20',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Stylish and sturdy bag woven from palm leaves. Ideal for shopping or outings.',
      material: 'Woven Palm Leaves',
      dimensions: '14" x 12" x 4"',
      weight: '0.6 lbs',
      origin: 'Handcrafted in Thailand',
      care: 'Spot clean, avoid prolonged water exposure',
      features: ['Water resistant', 'Strong handles', 'Spacious', 'Eco-friendly']
    },
    {
      id: 5,
      name: 'Banana Fiber Pouch',
      price: '$16',
      image: 'https://th.bing.com/th/id/R.219c117687025e7755881ae3c8be81e3?rik=uPVJlr7pywsXpA&riu=http%3a%2f%2fwww.dsource.in%2fsites%2fdefault%2ffiles%2fresource%2fbanana-fiber-craft-%e2%80%93-anegundi-karnataka%2fproducts%2fminigallery%2f12361%2f04.jpg&ehk=iC2SGVwyZgL00Ehz%2b5uZCea3aEHloiLpi%2bylHGeE7fA%3d&risl=&pid=ImgRaw&r=0',
      description: 'Handcrafted pouch made from banana fiber, perfect for carrying essentials.',
      material: 'Natural Banana Fiber',
      dimensions: '8" x 6" x 2"',
      weight: '0.3 lbs',
      origin: 'Handcrafted in India',
      care: 'Spot clean with damp cloth, air dry',
      features: ['Lightweight', 'Natural texture', 'Durable', 'Eco-friendly']
    },
    {
      id: 6,
      name: 'Reed Pen Holder',
      price: '$12',
      image: 'https://tse2.mm.bing.net/th/id/OIP.G5T5KfiOQaJjjswVRA1aLwHaF4?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Handcrafted pen holder made from natural reed.',
      material: 'Natural Reed',
      dimensions: '4" x 4" x 5"',
      weight: '0.4 lbs',
      origin: 'Handcrafted in Indonesia',
      care: 'Dust regularly, keep dry',
      features: ['Multiple compartments', 'Natural finish', 'Desk organizer', 'Eco-friendly']
    },
    {
      id: 7,
      name: 'Grass Coaster Set',
      price: '$8',
      image: 'https://images.pexels.com/photos/6207745/pexels-photo-6207745.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Set of 4 coasters made from wild grass.',
      material: 'Wild Grass Weave',
      dimensions: '4" diameter each',
      weight: '0.2 lbs (set)',
      origin: 'Handcrafted in Kenya',
      care: 'Wipe clean, air dry',
      features: ['Set of 4', 'Heat resistant', 'Natural patterns', 'Lightweight']
    },
    {
      id: 8,
      name: 'Cane Fruit Basket',
      price: '$22',
      image: 'https://casavolka.com/wp-content/uploads/2022/06/rattan-basket-756x800.jpg',
      description: 'Large fruit basket woven from cane.',
      material: 'Natural Cane',
      dimensions: '16" x 12" x 8"',
      weight: '1.5 lbs',
      origin: 'Handcrafted in Myanmar',
      care: 'Clean with damp cloth, air dry completely',
      features: ['Large capacity', 'Ventilated design', 'Strong construction', 'Natural finish']
    },
    {
      id: 9,
      name: 'Kerala Coir Door Mat',
      price: '$14',
      image: 'https://tse3.mm.bing.net/th/id/OIP.jjX_nfcbwyKoLVuCcsAbagHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Traditional Kerala coir door mat made from coconut fiber.',
      material: 'Natural Coconut Coir',
      dimensions: '24" x 16"',
      weight: '1.8 lbs',
      origin: 'Handcrafted in Kerala, India',
      care: 'Shake out regularly, hose down when needed',
      features: ['Weather resistant', 'Non-slip backing', 'Durable', 'Natural drainage']
    },
    {
      id: 10,
      name: 'Clay Plate Set',
      price: '$28',
      image: 'https://cdn.shopify.com/s/files/1/0594/7251/1153/files/clay_cookware_65a3f9fa-04f6-412f-a8de-246f7ae208a4.jpg?v=1672134491',
      description: 'Set of 4 handmade clay plates, perfect for serving traditional meals.',
      material: 'Natural Clay',
      dimensions: '10" diameter x 1" height (each)',
      weight: '3.2 lbs (set)',
      origin: 'Handcrafted in Rajasthan, India',
      care: 'Hand wash with mild soap, season before first use',
      features: ['Set of 4 plates', 'Food safe', 'Heat resistant', 'Traditional craftsmanship']
    }
  ];

  return (
    <div className="py-8 flex justify-center">
      <div className="w-full">
        {/* Main Banner Slider */}
        <BannerSlider />
        
        {/* Promotional Banners */}
        <PromoBanners />
        
        {/* Category Banners */}
        <CategoryBanners />
        
        {/* New Arrivals Section */}
        <NewArrivals addToCart={addToCart} />
        
        {/* Featured Products Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Products</h2>
          <p className="mb-8 text-gray-600 text-center">Discover and buy beautiful, sustainable handicrafts made from natural fibers.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 object-cover rounded mb-1 hover:scale-105 transition-transform" 
                onClick={() => window.location.href = `/products/${product.id}`}
              />
              <h3 className="font-semibold text-base mb-1">{product.name}</h3>
              <p className="text-green-700 font-bold mb-1">{product.price}</p>
              <p className="text-gray-500 text-xs mb-1 text-center">{product.description}</p>
              <button 
                className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 text-sm mb-1"
                onClick={() => window.location.href = `/products/${product.id}`}
              >
                View Details
              </button>
              {addToCart && (
                <button className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 text-sm" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
