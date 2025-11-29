import React, { useState, useEffect } from 'react';

const KeyFeatures = () => {
  const [animatedTitle, setAnimatedTitle] = useState('');
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const fullTitle = "Advanced Features for Modern Media Platform";
  
  const features = [
    {
      icon: '📰',
      title: 'Real-time News Feed',
      description: 'Instant updates from trusted sources worldwide with live coverage',
      gradient: 'from-red-400 to-orange-500',
      stats: 'Live Updates'
    },
    {
      icon: '🎯',
      title: 'Personalized Content',
      description: 'AI-curated news feed based on your interests and reading habits',
      gradient: 'from-blue-400 to-cyan-500',
      stats: 'Smart Curation'
    },
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: 'Comprehensive news from 100+ countries in multiple languages',
      gradient: 'from-green-400 to-teal-500',
      stats: '100+ Countries'
    },
    {
      icon: '⚡',
      title: 'Breaking News Alerts',
      description: 'Instant notifications for important events and developments',
      gradient: 'from-purple-400 to-pink-500',
      stats: 'Instant Alerts'
    },
    {
      icon: '📊',
      title: 'Trend Analysis',
      description: 'Real-time trending topics and sentiment analysis',
      gradient: 'from-indigo-400 to-purple-500',
      stats: 'Live Trends'
    },
    {
      icon: '🔒',
      title: 'Secure Platform',
      description: 'End-to-end encryption and privacy-focused design',
      gradient: 'from-yellow-400 to-amber-500',
      stats: '100% Secure'
    }
  ];

  // Media emojis for floating animation
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
      if (currentIndex <= fullTitle.length) {
        setAnimatedTitle(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(featureInterval);
  }, []);

  return (
    <div id="features" className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 pt-20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-cyan-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
            <span className="text-white/90 font-medium">Powered by Advanced Media Technology</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {animatedTitle}
            </span>
            <span className="animate-pulse text-white">|</span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of features designed to keep you informed, 
            engaged, and ahead of the curve with real-time media updates and intelligent content delivery.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 h-full">
                {/* Animated Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${index === currentFeature ? 'animate-pulse' : ''}`}>
                    {feature.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                </div>

                {/* Feature Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-cyan-300 font-semibold text-sm">{feature.stats}</span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Demo Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Experience the{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Power of Real-time Media
                </span>
              </h3>
              
              <p className="text-gray-200 text-lg leading-relaxed">
                See how Dharmadhwajam transforms how you consume news with intelligent features and real-time updates.
              </p>

              {/* Feature Showcase */}
              <div className="space-y-4">
                {[
                  'Live news from trusted sources',
                  'Personalized content curation',
                  'Multi-language support',
                  'Cross-platform accessibility'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transform hover:-translate-y-1 flex items-center">
                <i className="fas fa-play mr-3"></i>
                Live Demo
              </button>
            </div>

            {/* Right Side - Animated Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-300/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white font-semibold">Live News Processing</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                
                {/* Animated Progress Bars */}
                <div className="space-y-3">
                  {['News Coverage', 'Update Speed', 'Content Quality', 'User Engagement'].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-200">
                        <span>{item}</span>
                        <span className="text-cyan-300 font-semibold">
                          {['98.7%', '99.2%', '96.5%', '94.8%'][index]}
                        </span>
                      </div>
                      <div className="w-full bg-white/15 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: ['98.7%', '99.2%', '96.5%', '94.8%'][index],
                            animation: `growWidth 2s ease-out ${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/25 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-400/25 rounded-full blur-xl animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '1M+', label: 'Daily Readers', icon: '👥' },
            { number: '50K+', label: 'News Sources', icon: '📚' },
            { number: '99.8%', label: 'Uptime', icon: '🔄' },
            { number: '4.8/5', label: 'User Rating', icon: '⭐' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 group"
            >
              <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
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
        @keyframes growWidth {
          from { width: 0%; }
          to { width: var(--target-width); }
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
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default KeyFeatures;