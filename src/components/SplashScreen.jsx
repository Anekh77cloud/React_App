import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const quote = "Promoting natural, handmade products to reduce plastic dependency, supporting millions of Indian artisans who keep our traditions alive.";

  useEffect(() => {
    // Show logo after initial delay
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    // Show quote after logo appears
    const quoteTimer = setTimeout(() => {
      setShowQuote(true);
    }, 1500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(quoteTimer);
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (showQuote) {
      let currentIndex = 0;
      const typingTimer = setInterval(() => {
        if (currentIndex <= quote.length) {
          setTypedText(quote.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingTimer);
          // Complete splash screen after typing is done
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 1000);
        }
      }, 30); // Typing speed

      return () => clearInterval(typingTimer);
    }
  }, [showQuote, quote, onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-800 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      {/* Earthy Texture Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100">
        {/* Coir Fiber Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D2691E' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Terracotta Clay Texture */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CD853F' fill-opacity='0.4'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating Craft Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="craft-element element-1">🌾</div>
          <div className="craft-element element-2">🏺</div>
          <div className="craft-element element-3">🧺</div>
          <div className="craft-element element-4">🌿</div>
          <div className="craft-element element-5">🪔</div>
          <div className="craft-element element-6">🥥</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        {/* Logo and Site Name */}
        <div className={`transition-all duration-1000 transform ${showLogo ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <img 
                src="/src/assets/logo.png" 
                alt="EarthMart Logo" 
                className="h-24 w-auto object-contain drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700 mb-2 drop-shadow-sm">
            EarthMart
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Animated Quote */}
        <div className={`transition-all duration-800 ${showQuote ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-200/50 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic">
              "{typedText}"
              <span className="animate-pulse text-green-600 font-bold">|</span>
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="text-2xl">🌱</div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className={`mt-12 transition-all duration-500 ${showQuote ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="text-green-700 text-sm mt-2 font-medium">Loading your sustainable marketplace...</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;