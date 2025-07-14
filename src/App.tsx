import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Star, Users, Zap, Shield, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = ['home', 'features', 'about', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Brand
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                      activeSection === item.id
                        ? isScrolled 
                          ? 'text-blue-600' 
                          : 'text-blue-300'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-blue-600' 
                          : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                      activeSection === item.id ? 'w-full' : ''
                    }`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                    : 'text-white hover:text-blue-300 hover:bg-white/10'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-100 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to the Future
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience innovation like never before with our cutting-edge solutions
          </p>
          <button
            onClick={() => scrollToSection('features')}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Amazing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes our platform unique and powerful
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Experience blazing fast performance with our optimized infrastructure</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure</h3>
              <p className="text-gray-600">Your data is protected with enterprise-grade security measures</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative</h3>
              <p className="text-gray-600">Work together seamlessly with your team in real-time</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're passionate about creating solutions that transform how people work and collaborate. 
                Our platform is built with the latest technologies to ensure reliability, scalability, and ease of use.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of satisfied customers who have already discovered the power of our platform.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "This platform has completely transformed how our team collaborates. The interface is intuitive and the performance is outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">CEO, TechCorp</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The security features give me peace of mind, and the customer support is exceptional. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-600">CTO, DataFlow</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Easy to use, powerful features, and excellent value for money. Our productivity has increased significantly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                  <div className="text-sm text-gray-600">Designer, Creative Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to get started? Contact us today and discover how we can help your business grow
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> hello@brand.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Address:</span> 123 Innovation Street, Tech City, TC 12345
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Brand</h3>
              <p className="text-gray-400">
                Building the future of collaboration, one innovation at a time.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
