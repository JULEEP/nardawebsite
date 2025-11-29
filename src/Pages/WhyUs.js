import React, { useState, useEffect } from 'react';

const WhyChooseAlludeAI = () => {
  const [animatedTitle, setAnimatedTitle] = useState('');
  const [activeReason, setActiveReason] = useState(0);
  
  const fullTitle = "Why Millions Choose Dharmadhwajam";
  
  const reasons = [
    {
      icon: '📰',
      title: 'Real-time News Coverage',
      description: 'Get instant updates from trusted sources worldwide with live coverage of breaking news and events.',
      gradient: 'from-red-400 to-orange-500',
      features: ['Live News Updates', 'Breaking News Alerts', '24/7 Coverage']
    },
    {
      icon: '🎯',
      title: 'Personalized Content',
      description: 'AI-curated news feed tailored to your interests, reading habits, and preferred topics.',
      gradient: 'from-blue-400 to-cyan-500',
      features: ['Smart Content Curation', 'Interest-based Feed', 'Custom Categories']
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'Comprehensive coverage from 100+ countries with multi-language support and local insights.',
      gradient: 'from-green-400 to-teal-500',
      features: ['100+ Countries', 'Multi-language', 'Local Correspondents']
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Delivery',
      description: 'Experience blazing fast news delivery with real-time updates and instant notifications.',
      gradient: 'from-purple-400 to-pink-500',
      features: ['Instant Updates', 'Push Notifications', 'Live Feeds']
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Journalist, Times Network",
      text: "Dharmadhwajam has revolutionized how I stay updated with real-time news from across the globe.",
      avatar: "👩‍💼"
    },
    {
      name: "Rahul Verma",
      role: "News Editor, Digital Media",
      text: "The personalized content curation saves me hours of searching for relevant news every day.",
      avatar: "👨‍💻"
    },
    {
      name: "Anita Desai",
      role: "Media Analyst, CNN",
      text: "As a media professional, the real-time updates and global coverage are invaluable for my work.",
      avatar: "🧑‍💼"
    }
  ];

  // Media emojis for floating animation
  const mediaEmojis = [
    { icon: '📰', size: 'w-12 h-12', position: 'top-10 left-10', delay: 'delay-0' },
    { icon: '📱', size: 'w-10 h-10', position: 'top-20 right-20', delay: 'delay-1000' },
    { icon: '🎥', size: 'w-11 h-11', position: 'bottom-20 left-20', delay: 'delay-2000' },
    { icon: '📡', size: 'w-9 h-9', position: 'bottom-10 right-10', delay: 'delay-1500' },
    { icon: '📊', size: 'w-10 h-10', position: 'top-1/3 left-1/4', delay: 'delay-500' },
    { icon: '🎙️', size: 'w-8 h-8', position: 'bottom-1/3 right-1/4', delay: 'delay-2500' }
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
    const reasonInterval = setInterval(() => {
      setActiveReason((prev) => (prev + 1) % reasons.length);
    }, 5000);

    return () => clearInterval(reasonInterval);
  }, []);

  return (
    <div id="why-choose" className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 pt-20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
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
            <span className="text-white/90 font-medium">Trusted by 1M+ Daily Readers</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {animatedTitle}
            </span>
            <span className="animate-pulse text-white">|</span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join millions of readers who trust Dharmadhwajam for real-time news, personalized content, 
            and comprehensive global coverage. Experience the future of media consumption today.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                index === activeReason ? 'scale-105' : 'scale-100'
              }`}
            >
              <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl transform transition-all duration-500 hover:scale-105 h-full">
                {/* Icon and Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${index === activeReason ? 'animate-pulse' : ''}`}>
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <div className="flex space-x-1 mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                  {reason.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active State Glow */}
              {index === activeReason && (
                <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-3xl blur-xl opacity-30 animate-pulse -z-10`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Comparative Advantage Section */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              See the{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Dharmadhwajam Difference
              </span>
            </h3>
            <p className="text-gray-200 text-lg">
              Compare how we stack up against traditional news platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: 'Update Speed',
                dharmadhwajam: 'Real-time',
                traditional: 'Hourly updates',
                improvement: 'Instant delivery',
                color: 'text-green-400'
              },
              {
                metric: 'Content Personalization',
                dharmadhwajam: 'AI-curated',
                traditional: 'Generic feed',
                improvement: 'Tailored content',
                color: 'text-green-400'
              },
              {
                metric: 'Global Coverage',
                dharmadhwajam: '100+ countries',
                traditional: 'Limited regions',
                improvement: 'Comprehensive',
                color: 'text-green-400'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-white mb-4">{item.metric}</div>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 p-4 rounded-xl">
                    <div className="text-cyan-300 font-bold text-lg">Dharmadhwajam</div>
                    <div className="text-white text-xl font-semibold">{item.dharmadhwajam}</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <div className="text-gray-300">Traditional</div>
                    <div className="text-gray-200">{item.traditional}</div>
                  </div>
                  <div className={`text-sm font-semibold ${item.color}`}>
                    {item.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{testimonial.name}</div>
                  <div className="text-cyan-300 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-200 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex space-x-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-lg rounded-3xl p-8 border border-cyan-300/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Stay Informed?
            </h3>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Join millions of readers who trust Dharmadhwajam for real-time news and personalized content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 flex items-center justify-center transform hover:-translate-y-1">
                <i className="fas fa-newspaper mr-3"></i>
                Start Reading
              </button>
              <button className="border-2 border-cyan-300/50 text-cyan-300 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center backdrop-blur-sm">
                <i className="fas fa-play-circle mr-3"></i>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
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

export default WhyChooseAlludeAI;
