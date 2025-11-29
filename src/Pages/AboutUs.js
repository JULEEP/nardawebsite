import React, { useState, useEffect } from 'react';

const AboutAlludeAI = () => {
  const [animatedTitle, setAnimatedTitle] = useState('');
  const [currentMilestone, setCurrentMilestone] = useState(0);
  
  const fullTitle = "Revolutionizing Media Consumption Through Innovation";
  
  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Dharmadhwajam was founded by a team of media professionals and tech experts to transform news consumption.',
      icon: '🚀'
    },
    {
      year: '2021',
      title: 'Platform Launch',
      description: 'Launched our AI-powered news aggregation platform with real-time updates and personalized feeds.',
      icon: '📱'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to 50+ countries with multi-language support and local content partnerships.',
      icon: '🌍'
    },
    {
      year: '2023',
      title: 'Million Users',
      description: 'Reached 1 million daily active readers and became a trusted news source worldwide.',
      icon: '👥'
    }
  ];

  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Chief Editor',
      expertise: 'Journalism & Content Strategy',
      avatar: '👩‍💼',
      gradient: 'from-red-400 to-orange-500'
    },
    {
      name: 'Rahul Verma',
      role: 'Head of Technology',
      expertise: 'AI & Machine Learning',
      avatar: '👨‍💻',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Anita Desai',
      role: 'Content Director',
      expertise: 'Media & Communications',
      avatar: '🧑‍💼',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      name: 'Arjun Patel',
      role: 'Product Lead',
      expertise: 'User Experience & Design',
      avatar: '👨‍🎨',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const values = [
    {
      icon: '📰',
      title: 'Truth & Accuracy',
      description: 'We are committed to delivering verified, factual news from trusted sources worldwide.'
    },
    {
      icon: '⚡',
      title: 'Real-time Updates',
      description: 'Providing instant access to breaking news and live updates as events unfold.'
    },
    {
      icon: '🎯',
      title: 'Personalization',
      description: 'Tailoring content to individual preferences while maintaining diverse perspectives.'
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'Bringing comprehensive coverage from local to international news sources.'
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
    const milestoneInterval = setInterval(() => {
      setCurrentMilestone((prev) => (prev + 1) % milestones.length);
    }, 4000);

    return () => clearInterval(milestoneInterval);
  }, []);

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 py-20 overflow-hidden relative">
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
            <span className="text-white/90 font-medium">Leading Media Platform Since 2020</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {animatedTitle}
            </span>
            <span className="animate-pulse text-white">|</span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Dharmadhwajam was created with a powerful vision: to revolutionize how people consume news 
            by providing real-time, personalized, and trustworthy content from across the globe.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg">
                🎯
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                <div className="flex space-x-1 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              To empower every individual with real-time, accurate, and personalized news content that keeps them informed, 
              engaged, and connected to the world around them through innovative technology and trusted journalism.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg">
                🔭
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                <div className="flex space-x-1 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              A world where everyone has instant access to reliable, diverse, and personalized news content, 
              breaking down information barriers and creating a more informed and connected global community.
            </p>
          </div>
        </div>

        {/* Our Journey - Timeline */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Journey
              </span>
            </h3>
            <p className="text-gray-200 text-lg">
              From innovative startup to trusted global media platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white/10 rounded-2xl border border-white/20 transition-all duration-500 transform ${
                  index === currentMilestone ? 'scale-105 bg-white/15' : 'scale-100'
                } hover:scale-105 hover:bg-white/15 group`}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {milestone.icon}
                </div>
                <div className="text-cyan-300 font-bold text-2xl mb-2">{milestone.year}</div>
                <div className="text-white font-semibold text-lg mb-3">{milestone.title}</div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {milestone.description}
                </p>
                {index === currentMilestone && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h3>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Experienced professionals bridging journalism, technology, and user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${member.gradient} rounded-2xl flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {member.avatar}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{member.name}</h4>
                <div className="text-cyan-300 font-semibold mb-2">{member.role}</div>
                <div className="text-gray-200 text-sm">{member.expertise}</div>
                <div className="flex justify-center space-x-2 mt-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Core Values
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">{value.title}</h4>
                  <p className="text-gray-200 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '1M+', label: 'Daily Readers', icon: '👥' },
            { number: '50K+', label: 'News Sources', icon: '📚' },
            { number: '100+', label: 'Countries Covered', icon: '🌍' },
            { number: '99.8%', label: 'Platform Uptime', icon: '⚡' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 group"
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

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-lg rounded-3xl p-8 border border-cyan-300/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Us in Shaping the Future of Media
            </h3>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Be part of the revolution in news consumption. Together, we can create a more informed and connected world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 flex items-center justify-center transform hover:-translate-y-1">
                <i className="fas fa-newspaper mr-3"></i>
                Start Reading
              </button>
              <button className="border-2 border-cyan-300/50 text-cyan-300 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center backdrop-blur-sm">
                <i className="fas fa-play-circle mr-3"></i>
                Watch Our Story
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

export default AboutAlludeAI;

