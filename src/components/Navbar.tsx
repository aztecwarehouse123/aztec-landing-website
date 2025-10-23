import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              AZTECWMS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
