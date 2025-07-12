import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import logo from '../assets/kali-logo.png'; // Adjust the path as necessary

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // *** Removed hiding mobile menu on scroll to fix the issue ***
      // if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBooking = () => {
    // Open booking modal or redirect to booking page
    const bookingUrl = 'https://calendly.com/your-username'; // Replace with your Calendly link
    window.open(bookingUrl, '_blank');
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-violet-500/20'
          : 'bg-black/80 md:bg-transparent backdrop-blur-sm'
      } touch-action-manipulation`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
              <img src={logo} alt='logo' />
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text">Logesh</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id ? 'text-violet-400' : 'text-gray-300 hover:text-violet-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
                )}
              </button>
            ))}

            {/* CTA Button */}
            <button
              onClick={handleBooking}
              className="px-4 lg:px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 text-sm"
            >
              Book Meeting
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-violet-500/20 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-violet-500/20 bg-black/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-2 pt-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-violet-400 bg-violet-500/10'
                      : 'text-gray-300 hover:text-violet-400 hover:bg-violet-500/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleBooking}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 text-center"
              >
                Book Meeting
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
