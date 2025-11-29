import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [hoveredLink, setHoveredLink] = useState(null);

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Real-time News', href: '#', icon: '📰' },
        { name: 'Personalized Feed', href: '#', icon: '🎯' },
        { name: 'Global Coverage', href: '#', icon: '🌍' },
        { name: 'Breaking Alerts', href: '#', icon: '⚡' },
        { name: 'Trend Analysis', href: '#', icon: '📊' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#', icon: '🏢' },
        { name: 'Our Mission', href: '#', icon: '🎯' },
        { name: 'Leadership', href: '#', icon: '👨‍💼' },
        { name: 'Careers', href: '#', icon: '💼' },
        { name: 'News & Press', href: '#', icon: '📰' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#', icon: '📚' },
        { name: 'Blog', href: '#', icon: '✍️' },
        { name: 'Tutorials', href: '#', icon: '🎓' },
        { name: 'API', href: '#', icon: '🔧' },
        { name: 'Help Center', href: '#', icon: '❓' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '#', icon: '📞' },
        { name: 'Feedback', href: '#', icon: '💬' },
        { name: 'Report Issue', href: '#', icon: '🐛' },
        { name: 'Status', href: '#', icon: '🟢' },
        { name: 'Community', href: '#', icon: '👥' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼', color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: '🐦', color: 'hover:text-cyan-400' },
    { name: 'Instagram', href: '#', icon: '📸', color: 'hover:text-pink-400' },
    { name: 'YouTube', href: '#', icon: '📺', color: 'hover:text-red-400' },
    { name: 'Facebook', href: '#', icon: '👥', color: 'hover:text-blue-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-rose-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  {/* Continuously Animated Logo Container */}
                  <div className="relative">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur-md opacity-70 scale-110 animate-pulse-slow"></div>
                    
                    {/* Logo Image with Continuous Animations */}
                    <div className="relative w-12 h-12 bg-white rounded-2xl flex items-center justify-center animate-float">
                      <img 
                        src={logo} 
                        alt="Dharmadhwajam Logo"
                        className="w-10 h-10 object-contain animate-gentle-scale"
                      />
                      
                      {/* Continuous Pulse Ring Effect */}
                      <div className="absolute inset-0 border-2 border-amber-400 rounded-2xl animate-ping-slow opacity-30"></div>
                    </div>

                    {/* Continuous Floating Particles */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-500 rounded-full animate-ping delay-700"></div>
                    <div className="absolute -top-1 -left-1 w-1 h-1 bg-amber-300 rounded-full animate-ping delay-1400"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                      ధర్మధ్వజం
                    </h3>
                    <p className="text-amber-700 text-sm">Stay Informed. Stay Ahead.</p>
                  </div>
                </div>
                <p className="text-amber-800 mb-6 leading-relaxed">
                  Transforming how you consume news with real-time updates, personalized content, 
                  and comprehensive global coverage. Stay informed with trusted journalism.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 flex items-center justify-center text-amber-700 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white transform hover:-translate-y-1 shadow-sm`}
                      onMouseEnter={() => setHoveredLink(social.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              {footerSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-amber-900 font-bold text-lg mb-4 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="flex items-center space-x-2 text-amber-700 hover:text-amber-900 transition-all duration-300 group"
                          onMouseEnter={() => setHoveredLink(link.name)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <span className="text-sm transform group-hover:scale-110 transition-transform duration-300">
                            {link.icon}
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                          {hoveredLink === link.name && (
                            <span className="w-1 h-1 bg-amber-500 rounded-full animate-ping"></span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Features */}
        <div className="border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '📰', text: 'Real-time News', sub: 'Live Updates' },
                { icon: '🌍', text: 'Global Coverage', sub: '100+ Countries' },
                { icon: '⚡', text: 'Instant Alerts', sub: 'Breaking News' },
                { icon: '🎯', text: '98% Accuracy', sub: 'Verified Sources' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 hover:bg-white transition-all duration-300 hover:scale-105 group shadow-sm"
                >
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="text-amber-900 font-semibold text-sm">{feature.text}</div>
                  <div className="text-amber-600 text-xs">{feature.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-amber-700 text-sm">
              © {currentYear} ధర్మధ్వజం. All rights reserved. 
              <span className="text-amber-600 ml-2">Transforming News Consumption</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {[
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Cookie Policy', href: '#' },
                { name: 'Security', href: '#' },
                { name: 'Compliance', href: '#' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-amber-700 hover:text-amber-900 text-sm transition-all duration-300 hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-500/20 px-3 py-1 rounded-full border border-green-400/30">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-600 text-xs font-semibold">Verified Sources</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-blue-600 text-xs font-semibold">Secure Platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white p-4 rounded-2xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 group cursor-pointer floating-cta">
            <div className="flex items-center space-x-2">
              <span className="text-lg">💬</span>
              <div className="text-sm font-semibold">
                <div>Need Help?</div>
                <div className="text-amber-100 text-xs">Chat with us</div>
              </div>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          33% { 
            transform: translateY(-3px) rotate(2deg) scale(1.02); 
          }
          66% { 
            transform: translateY(2px) rotate(-1deg) scale(0.98); 
          }
        }
        
        @keyframes gentle-scale {
          0%, 100% { 
            transform: scale(1); 
          }
          50% { 
            transform: scale(1.05); 
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.5;
            transform: scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        
        @keyframes ping-slow {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gentle-scale {
          animation: gentle-scale 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .floating-cta {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;