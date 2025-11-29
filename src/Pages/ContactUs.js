import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [animatedTitle, setAnimatedTitle] = useState('');
  const [currentContact, setCurrentContact] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const fullTitle = "Get in Touch with Dharmadhwajam";
  
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime and we\'ll respond within 24 hours',
      details: 'contact@dharmadhwajam.com',
      gradient: 'from-cyan-300 to-blue-400'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly with our support team during business hours',
      details: '+1 (555) 123-NEWS',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Get instant answers from our support team',
      details: 'Available 24/7',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: '🏢',
      title: 'Visit Us',
      description: 'Schedule an in-person meeting at our headquarters',
      details: 'New Delhi, India',
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I get real-time news updates?',
      answer: 'Download our mobile app or enable browser notifications for instant breaking news alerts.'
    },
    {
      question: 'Is Dharmadhwajam available in multiple languages?',
      answer: 'Yes, we support 10+ languages including English, Hindi, Spanish, French, and more.'
    },
    {
      question: 'Can I customize my news feed?',
      answer: 'Absolutely! Our AI learns your preferences and curates content based on your interests.'
    },
    {
      question: 'How do you ensure news accuracy?',
      answer: 'We partner with verified news sources and use AI to fact-check content in real-time.'
    }
  ];

  // Media emojis for floating animation
  const mediaEmojis = [
    { icon: '📰', size: 'w-12 h-12', position: 'top-10 left-10', delay: 'delay-0' },
    { icon: '📱', size: 'w-10 h-10', position: 'top-20 right-20', delay: 'delay-1000' },
    { icon: '🎥', size: 'w-11 h-11', position: 'bottom-20 left-20', delay: 'delay-2000' },
    { icon: '📡', size: 'w-9 h-9', position: 'bottom-10 right-10', delay: 'delay-1500' }
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
    const contactInterval = setInterval(() => {
      setCurrentContact((prev) => (prev + 1) % contactMethods.length);
    }, 3000);

    return () => clearInterval(contactInterval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 pt-20 overflow-hidden relative">
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
            <span className="text-white/90 font-medium">We're Here to Keep You Informed</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {animatedTitle}
            </span>
            <span className="animate-pulse text-white">|</span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Have questions about our news platform or need assistance? 
            Our team is ready to help you stay informed and connected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl border border-white/20 transition-all duration-500 transform ${
                      index === currentContact ? 'scale-105 bg-white/15' : 'bg-white/10'
                    } hover:scale-105 hover:bg-white/15 group`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center text-xl text-white transform group-hover:scale-110 transition-transform duration-300 ${index === currentContact ? 'animate-pulse' : ''}`}>
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">{method.title}</h4>
                        <p className="text-cyan-300 font-medium">{method.details}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm mt-3">
                      {method.description}
                    </p>
                    {index === currentContact && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/25 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                        {faq.question}
                      </h4>
                      <span className="text-cyan-300 transform group-hover:rotate-180 transition-transform duration-300">
                        ▼
                      </span>
                    </div>
                    <p className="text-gray-200 mt-2 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '24/7', label: 'News Updates', icon: '🕒' },
                { number: '1M+', label: 'Daily Readers', icon: '👥' },
                { number: '98%', label: 'Accuracy Rate', icon: '⭐' },
                { number: '100+', label: 'Countries', icon: '🌍' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-200 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form (Compact Height) */}
          <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-6 border border-white/25 shadow-2xl transform hover:scale-105 transition-all duration-500 h-fit">
            <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
            <p className="text-gray-200 mb-6">We'll get back to you as soon as possible</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-white font-medium mb-2 group-hover:text-cyan-300 transition-colors duration-300 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/25 rounded-xl px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-300 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div className="group">
                  <label className="block text-white font-medium mb-2 group-hover:text-cyan-300 transition-colors duration-300 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/25 rounded-xl px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-300 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-white font-medium mb-2 group-hover:text-cyan-300 transition-colors duration-300 text-sm">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/25 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-cyan-300 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm text-sm"
                >
                  <option value="">Select a topic</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="advertising">Advertising Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-white font-medium mb-2 group-hover:text-cyan-300 transition-colors duration-300 text-sm">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full bg-white/10 border border-white/25 rounded-xl px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-300 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm resize-none text-sm"
                  placeholder="Tell us how we can help you stay informed..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transform hover:-translate-y-1 flex items-center justify-center group text-sm"
              >
                <i className="fas fa-paper-plane mr-2 transform group-hover:translate-x-1 transition-transform"></i>
                Send Message
              </button>

              <p className="text-gray-300 text-xs text-center">
                We respect your privacy and will never share your information with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* Breaking News Support Banner */}
        <div className="mt-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-lg rounded-3xl p-6 border border-cyan-300/30 text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold text-white">Breaking News Support</h3>
            <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-200 text-sm mb-3">
            For urgent breaking news submissions or media partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <div className="text-white font-bold text-lg bg-red-500/20 px-4 py-2 rounded-xl border border-red-400/50">
              📰 Breaking News: +1 (555) 911-NEWS
            </div>
            <button className="border border-red-400/50 text-red-400 hover:bg-red-400/10 font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center backdrop-blur-sm text-sm">
              <i className="fas fa-bullhorn mr-2"></i>
              Submit News
            </button>
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
            transform: translateY(-10px) rotate(2deg); 
          }
          66% { 
            transform: translateY(5px) rotate(-1deg); 
          }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;