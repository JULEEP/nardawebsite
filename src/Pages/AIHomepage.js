import React, { useState, useEffect } from 'react';

const AIHomepage = () => {
  const [animatedText, setAnimatedText] = useState('');
  const [currentCategory, setCurrentCategory] = useState(0);
  const fullText = "Stay Informed with Real-Time News & Media Updates";

  const categories = [
    { 
      type: "Breaking News", 
      description: "Instant updates on current events worldwide",
      icon: "📰",
      color: "from-red-500 to-orange-500"
    },
    { 
      type: "Technology", 
      description: "Latest in tech, AI, and digital innovations",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      type: "Entertainment", 
      description: "Movies, music, and celebrity news",
      icon: "🎬",
      color: "from-purple-500 to-pink-500"
    },
    { 
      type: "Sports", 
      description: "Live scores, matches, and player updates",
      icon: "⚽",
      color: "from-green-500 to-teal-500"
    },
    { 
      type: "Business", 
      description: "Market trends and financial news",
      icon: "💼",
      color: "from-yellow-500 to-amber-500"
    },
    { 
      type: "Politics", 
      description: "Government policies and election updates",
      icon: "🏛️",
      color: "from-indigo-500 to-blue-700"
    }
  ];

  // Media-related emojis for floating animation
  const mediaEmojis = [
    { icon: '📰', size: 'w-12 h-12', position: 'top-10 left-10', delay: 'delay-0' },
    { icon: '📱', size: 'w-10 h-10', position: 'top-20 right-20', delay: 'delay-1000' },
    { icon: '🎥', size: 'w-11 h-11', position: 'bottom-20 left-20', delay: 'delay-2000' },
    { icon: '📡', size: 'w-9 h-9', position: 'bottom-10 right-10', delay: 'delay-1500' },
    { icon: '📊', size: 'w-10 h-10', position: 'top-1/3 left-1/4', delay: 'delay-500' },
    { icon: '🎙️', size: 'w-8 h-8', position: 'bottom-1/3 right-1/4', delay: 'delay-2500' },
    { icon: '📸', size: 'w-9 h-9', position: 'top-1/4 right-1/3', delay: 'delay-3000' },
    { icon: '🌐', size: 'w-11 h-11', position: 'bottom-1/4 left-1/3', delay: 'delay-3500' },
    { icon: '📻', size: 'w-7 h-7', position: 'top-40 left-40', delay: 'delay-4000' },
    { icon: '🎭', size: 'w-10 h-10', position: 'bottom-40 right-40', delay: 'delay-4500' }
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length);
    }, 3000);

    return () => clearInterval(categoryInterval);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 pt-20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Media Emojis */}
      {mediaEmojis.map((emoji, index) => (
        <div
          key={index}
          className={`absolute ${emoji.position} ${emoji.size} bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 flex items-center justify-center text-xl animate-float-slow ${emoji.delay} z-20 shadow-lg`}
        >
          {emoji.icon}
        </div>
      ))}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Animated Main Heading */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                <span className="text-sm text-white/90 font-medium">Trusted by 1M+ Daily Readers</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  {animatedText}
                </span>
                <span className="animate-pulse text-white">|</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Dharmadhwajam delivers real-time news, trending stories, and media content 
                across all fields - from politics to entertainment, technology to sports.
              </p>

              {/* Animated Category */}
              <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <div className={`text-4xl transform transition-all duration-500 ${categories[currentCategory].color}`}>
                  {categories[currentCategory].icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {categories[currentCategory].type}
                  </div>
                  <div className="text-gray-300">
                    {categories[currentCategory].description}
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '⚡', text: 'Real-time Updates', sub: 'Live news feeds' },
                { icon: '🌍', text: 'Global Coverage', sub: 'Worldwide news' },
                { icon: '🎯', text: 'Personalized Feed', sub: 'Tailored content' },
                { icon: '📊', text: 'Trend Analysis', sub: 'What\'s trending' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                  <div>
                    <div className="text-white font-semibold">{feature.text}</div>
                    <div className="text-gray-300 text-sm">{feature.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 flex items-center justify-center transform hover:-translate-y-1">
                <i className="fas fa-newspaper mr-3 animate-pulse"></i>
                Explore News
                <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform"></i>
              </button>
              <button className="border-2 border-cyan-300/50 text-cyan-300 hover:bg-cyan-400/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center backdrop-blur-sm">
                <i className="fas fa-play-circle mr-3"></i>
                Watch News Reel
              </button>
            </div>
          </div>

          {/* Right Side - Advanced Glassmorphism Cards */}
          <div className="relative">
            {/* Main Interactive Card */}
            <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: '📰', title: 'Latest News', desc: 'Breaking updates', color: 'from-red-400 to-orange-500', pulse: true },
                  { icon: '💻', title: 'Tech News', desc: 'Innovation trends', color: 'from-blue-400 to-cyan-500', pulse: false },
                  { icon: '🎬', title: 'Entertainment', desc: 'Movies & TV', color: 'from-purple-400 to-pink-500', pulse: true },
                  { icon: '⚽', title: 'Sports', desc: 'Matches & scores', color: 'from-green-400 to-teal-500', pulse: false },
                  { icon: '💼', title: 'Business', desc: 'Market updates', color: 'from-yellow-400 to-amber-500', pulse: true },
                  { icon: '🏛️', title: 'Politics', desc: 'Government news', color: 'from-indigo-400 to-blue-600', pulse: false }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className={`relative w-20 h-20 mx-auto bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3 ${item.pulse ? 'animate-pulse' : ''}`}>
                      {item.icon}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    <p className="text-white font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                      {item.title}
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Glass Elements */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-cyan-400/30 rounded-3xl blur-xl animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400/30 rounded-3xl blur-xl animate-bounce delay-1000"></div>
            
            {/* Rotating Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-cyan-300/40 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        {/* Advanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { number: '1M+', label: 'Daily Readers', icon: '👥', gradient: 'from-cyan-400 to-blue-500' },
            { number: '50K+', label: 'News Articles', icon: '📚', gradient: 'from-purple-400 to-pink-500' },
            { number: '24/7', label: 'Live Updates', icon: '🔄', gradient: 'from-green-400 to-teal-500' },
            { number: '100+', label: 'Countries Covered', icon: '🌍', gradient: 'from-orange-400 to-red-500' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-200 mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-15px) rotate(3deg); 
          }
          66% { 
            transform: translateY(10px) rotate(-2deg); 
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AIHomepage;

