import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    origin: 'Handcrafted in Rajasthan, India',
    care: 'Spot clean with damp cloth, air dry',
    features: ['Eco-friendly', 'Durable', 'Lightweight', 'Versatile storage'],
    category: 'Jute & Hemp'
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
    origin: 'Handcrafted in Karnataka, India',
    care: 'Dust with soft cloth, avoid moisture',
    features: ['LED compatible', 'Warm lighting', 'Natural finish', 'Energy efficient'],
    category: 'Bamboo Crafts'
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
    origin: 'Handcrafted in Kerala, India',
    care: 'Hand wash with mild soap, oil occasionally',
    features: ['Food safe', 'Unique grain pattern', 'Lightweight', 'Sustainable'],
    category: 'Coir Products'
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
    origin: 'Handcrafted in Kerla, India',
    care: 'Spot clean, avoid prolonged water exposure',
    features: ['Water resistant', 'Strong handles', 'Spacious', 'Eco-friendly'],
    category: 'Palm Leaf Crafts'
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
    features: ['Lightweight', 'Natural texture', 'Durable', 'Eco-friendly'],
    category: 'Natural Fiber Bags'
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
    origin: 'Handcrafted in TamilNadu, India',
    care: 'Dust regularly, keep dry',
    features: ['Multiple compartments', 'Natural finish', 'Desk organizer', 'Eco-friendly'],
    category: 'Bamboo Crafts'
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
    origin: 'Handcrafted in Kerala, India',
    care: 'Wipe clean, air dry',
    features: ['Set of 4', 'Heat resistant', 'Natural patterns', 'Lightweight'],
    category: 'Palm Leaf Crafts'
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
    origin: 'Handcrafted in Kerala, India',
    care: 'Clean with damp cloth, air dry completely',
    features: ['Large capacity', 'Ventilated design', 'Strong construction', 'Natural finish'],
    category: 'Bamboo Crafts'
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
    features: ['Weather resistant', 'Non-slip backing', 'Durable', 'Natural drainage'],
    category: 'Coir Products'
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
    features: ['Set of 4 plates', 'Food safe', 'Heat resistant', 'Traditional craftsmanship'],
    category: 'Clay & Pottery'
  },
  {
    id: 11,
    name: 'Seagrass Storage Basket',
    price: '$18',
    image: 'https://tse3.mm.bing.net/th/id/OIP.AlbCyAPFfxGm6NZzZaHu5gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=400',
    description: 'Handwoven seagrass basket with handles',
    material: 'Natural Seagrass',
    dimensions: '14" x 10" x 8"',
    weight: '1.0 lbs',
    origin: 'Handcrafted in India',
    care: 'Spot clean, avoid moisture',
    features: ['Sturdy handles', 'Natural texture', 'Versatile storage', 'Eco-friendly'],
    category: 'Palm Leaf Crafts'
  },
  {
    id: 12,
    name: 'Bamboo Wind Chimes',
    price: '$22',
    image: 'https://i.pinimg.com/originals/9a/84/ac/9a84acd31b04473ffab270fcd03194a1.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Melodious bamboo wind chimes',
    material: 'Natural Bamboo',
    dimensions: '18" length',
    weight: '0.7 lbs',
    origin: 'Handcrafted in India',
    care: 'Dust regularly, protect from harsh weather',
    features: ['Soothing sounds', 'Weather resistant', 'Natural finish', 'Handtuned'],
    category: 'Bamboo Crafts'
  },
  {
    id: 13,
    name: 'Cork Yoga Mat',
    price: '$35',
    image: 'https://tse4.mm.bing.net/th/id/OIP.t87fGZXmsqf1jJqGsfOTnAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=400',
    description: 'Eco-friendly cork yoga mat',
    material: 'Natural Cork',
    dimensions: '72" x 24" x 0.25"',
    weight: '2.5 lbs',
    origin: 'Handcrafted in India',
    care: 'Wipe with damp cloth, air dry',
    features: ['Non-slip surface', 'Antimicrobial', 'Sustainable', 'Comfortable grip'],
    category: 'Natural Fiber Bags'
  },
  {
    id: 14,
    name: 'Tangaliya Shirt',
    price: '$55',
    image: 'src/assets/tangaliya_shirt.jpeg ', objectFit: 'cover',objectPosition: 'top', height: '100px', width: '100px',
    description: 'Handcrafted Tangaliya shirt made from natural fibers.',
    material: 'Natural Cotton',
    dimensions: 'Available in S, M, L, XL',
    weight: '0.5 lbs',
    origin: 'Handcrafted in India',
    care: 'Machine wash cold, tumble dry low',
    category: 'Handloom Fabrics'
  },
  {
    id: 15,
    name: 'Hemp Rope Hammock',
    price: '$25',
    image: 'https://tse1.mm.bing.net/th/id/OIP.3aGlAJLm0kbNXWintJzZQQAAAA?w=366&h=370&rs=1&pid=ImgDetMain&o=7&rm=3?auto=compress&cs=tinysrgb&w=400',
    description: 'Comfortable hemp rope hammock',
    material: 'Natural Hemp Rope',
    dimensions: '78" x 39"',
    weight: '4.2 lbs',
    origin: 'Handcrafted in Kerala, India',
    care: 'Store dry, check knots regularly',
    features: ['Weather resistant', 'Strong support', 'Comfortable weave', 'Portable'],
    category: 'Jute & Hemp'
  },
  {
    id: 16,
    name: 'Wooden Spice Rack',
    price: '$28',
    image: 'https://housefulofhandmade.com/wp-content/uploads/2018/01/wooden-spice-rack-5.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Handcrafted wooden spice organizer',
    material: 'Natural Wood',
    dimensions: '12" x 8" x 6"',
    weight: '2.0 lbs',
    origin: 'Handcrafted in India',
    care: 'Oil occasionally, keep dry',
    features: ['Multiple compartments', 'Natural finish', 'Kitchen organizer', 'Durable'],
    category: 'Bamboo Crafts'
  },
  {
    id: 17,
    name: 'Jute Table Runner',
    price: '$15',
    image: 'https://ae01.alicdn.com/kf/HTB1tFklf9fD8KJjSszhq6zIJFXaU/OurWarm-10PCS-30x275cm-Natural-Jute-Table-Runner-for-Wedding-Burlap-Table-Runners-Home-Textiles-Home-Country.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Natural jute table runner',
    material: 'Natural Jute',
    dimensions: '72" x 14"',
    weight: '0.8 lbs',
    origin: 'Handcrafted in India',
    care: 'Spot clean, iron on low heat',
    features: ['Natural texture', 'Versatile decor', 'Durable weave', 'Eco-friendly'],
    category: 'Jute & Hemp'
  },
  {
    id: 18,
    name: 'Hemp Tote Bag',
    price: '$20',
    image: 'https://hamrohemp.com/wp-content/uploads/2023/10/il_fullxfull.4163851895_ouuu.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Eco-friendly hemp tote bag',
    material: 'Natural Hemp',
    dimensions: '15" x 15" x 5"',
    weight: '1.0 lbs',
    origin: 'Handcrafted in India',
    care: 'Spot clean, air dry',
    features: ['Spacious', 'Durable', 'Eco-friendly', 'Stylish'],
    category: 'Natural Fiber Bags'
  },
  {
    id: 19,
    name: 'Hemp Backpack',
    price: '$40',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/WG/DK/ZB/62604146/3-500x500.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Eco-friendly hemp backpack',
    material: 'Natural Hemp',
    dimensions: '18" x 12" x 6"',
    weight: '1.5 lbs',
    origin: 'Handcrafted in India',
    care: 'Spot clean, air dry',
    features: ['Spacious', 'Durable', 'Eco-friendly', 'Stylish'],
    category: 'Natural Fiber Bags'
  },
  {
    id: 20,
    name: 'Bamboo Serving Tray',
    price: '$35',
    image: 'https://i.pinimg.com/736x/53/2f/95/532f9563ae82736acfaf9d400d9585da--bamboo-stalks-criss-cross.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Handcrafted bamboo serving tray',
    material: 'Natural Bamboo',
    dimensions: '18" x 12" x 2"',
    weight: '1.0 lbs',
    origin: 'Handcrafted in TamilNadu, India',
    care: 'Wipe clean with a damp cloth',
    features: ['Lightweight', 'Durable', 'Eco-friendly', 'Versatile'],
    category: 'Bamboo Crafts'
  },
  {
    id: 21,
    name: 'Bamboo Cutting Board',
    price: '$30',
    image: 'https://i.pinimg.com/736x/53/2f/95/532f9563ae82736acfaf9d400d9585da--bamboo-stalks-criss-cross.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Handcrafted bamboo cutting board',
    material: 'Natural Bamboo',
    dimensions: '18" x 12" x 0.75"',
    weight: '1.5 lbs',
    origin: 'Handcrafted in TamilNadu, India',
    care: 'Hand wash, do not soak',
    features: ['Durable', 'Eco-friendly', 'Knife-friendly surface', 'Versatile'],
    category: 'Bamboo Crafts'
  },
  {
    id: 22,
    name: 'Handcrafted Teak Wood Sculpture',
    price: '$9',
    image: 'https://steeloniture.com/cdn/shop/files/msg5509484675-709.jpg?v=1704056773?auto=compress&cs=tinysrgb&w=400',
    description: 'Handcrafted teak wood sculpture',
    material: 'Natural Teak Wood',
    dimensions: '12" x 8" x 6"',
    weight: '2.0 lbs',
    origin: 'Handcrafted in TamilNadu, India',
    care: 'Dust with a soft cloth',
    features: ['Intricate design', 'Natural finish', 'Artistic decor', 'Durable'],
    category: 'Wooden Crafts'
  },
  {
    id: 23,
    name: 'Khadi Cotton Shirt',
    price: '$25',
    image: 'https://sellon.kraftly.com/web/tr:f-auto,w-1200,h-1200,cm-pad_resize,pr-true/shop_28610/4_1472131866.jpg',
    description: 'Classic handspun khadi cotton shirt for a timeless look',
    material: '100% Khadi Cotton',
    dimensions: 'Varies by size',
    weight: '0.5 lbs',
    origin: 'Handwoven in India',
    care: 'Machine wash cold, line dry, warm iron if needed',
    features: ['Breathable fabric', 'Handspun yarn', 'Eco-friendly', 'Naturally textured'],
    category: 'Handloom Fabrics'
  },
  {
    id: 24,
    name: 'Kanchipuram Silk Saree',
    price: '$180',
    image: 'https://mavuris.com/cdn/shop/products/Green_Kanchipuram_Silk_Sari_968161403.jpg?v=1649856177',
    description: 'Luxurious silk saree with intricate zari borders',
    material: 'Pure Mulberry Silk',
    dimensions: '6.2m x 1.2m',
    weight: '1.5 lbs',
    origin: 'Kanchipuram, Tamil Nadu',
    care: 'Dry clean only',
    features: ['Intricate zari work', 'Rich colors', 'Traditional weave', 'Occasion wear'],
    category: 'Handloom Fabrics'
  },
  {
    id: 25,
    name: 'Pochampally Ikat Dupatta',
    price: '$40',
    image: 'https://tse4.mm.bing.net/th/id/OIP._yDL7c3ShNwA5AYrWijLJwHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Vibrant ikat patterned dupatta from Pochampally',
    material: 'Cotton-Silk Blend',
    dimensions: '2.5m x 0.9m',
    weight: '0.4 lbs',
    origin: 'Pochampally, Telangana',
    care: 'Hand wash separately in cold water',
    features: ['Handwoven ikat design', 'Soft texture', 'Colorfast dyes', 'Lightweight'],
    category: 'Handloom Fabrics'
  },
  {
    id: 26,
    name: 'Aruvikkara Cotton Lungis',
    price: '$18',
    image: 'https://i.etsystatic.com/19462345/r/il/5e818c/4235567410/il_1080xN.4235567410_sbif.jpg',
    description: 'Traditional handloom cotton lungi from Kerala',
    material: '100% Cotton',
    dimensions: '2m x 1.2m',
    weight: '0.35 lbs',
    origin: 'Aruvikkara, Kerala',
    care: 'Machine wash cold, tumble dry low',
    features: ['Breathable fabric', 'Handwoven stripes', 'Soft texture', 'Everyday comfort'],
    category: 'Handloom Fabrics'
  },
  {
    id: 27,
    name: 'Banarasi Silk Dupatta',
    price: '$65',
    image: 'https://images.wholesalesalwar.com/2020y/January/15257/Blue-Banarasi-Silk-Traditional-Wear-Zari-Work-Dupatta-KD209_BLU.jpg',
    description: 'Elegant silk dupatta with gold zari motifs',
    material: 'Pure Silk',
    dimensions: '2.5m x 1m',
    weight: '0.45 lbs',
    origin: 'Varanasi, Uttar Pradesh',
    care: 'Dry clean only',
    features: ['Gold zari motifs', 'Rich sheen', 'Traditional weave', 'Festive wear'],
    category: 'Handloom Fabrics'
  }

];

export default function Products({ addToCart, searchTerm = '' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const navigate = useNavigate();

  // Update local search term when prop changes
  React.useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const categories = ['All', 'Coir Products', 'Clay & Pottery', 'Bamboo Crafts', 'Jute & Hemp', 'Palm Leaf Crafts', 'Natural Fiber Bags'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
                         product.material.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(localSearchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Catalogue</h1>
        <p className="text-gray-600 text-lg">Browse our complete selection of eco-friendly handicrafts made from natural fibers.</p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {sortedProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => navigate(`/products/${product.id}`)}
              />
              <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {product.category}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">{product.name}</h3>
              <p className="text-green-700 font-bold text-xl mb-2">{product.price}</p>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">
                  <span className="font-medium">Material:</span> {product.material}
                </p>
                <p className="text-xs text-gray-500">
                  <span className="font-medium">Origin:</span> {product.origin}
                </p>
              </div>
              
              <div className="flex gap-2">
                <button 
                  className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  View Details
                </button>
                {addToCart && (
                  <button 
                    className="flex-1 bg-green-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Results Count */}
      <div className="mt-8 text-center text-gray-600">
        Showing {sortedProducts.length} of {products.length} products
      </div>
    </div>
  );
}