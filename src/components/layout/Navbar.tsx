
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Careers', path: '/careers' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Pricing', path: '/pricing' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/95 shadow-md backdrop-blur-sm py-3' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="SHILPKAR Logo"
          >
            <div className="h-10 w-10 bg-brand-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-display text-xl">S</span>
            </div>
            <span className="text-xl md:text-2xl font-display font-bold text-brand-purple-dark">
              SHILPKAR
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link',
                location.pathname === link.path && 'active'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-40 md:hidden flex flex-col transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 pt-24 space-y-6 flex flex-col h-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-lg py-2 border-b border-border',
                location.pathname === link.path && 'text-brand-purple font-medium'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto pt-6">
            <Link
              to="/contact"
              className="btn btn-primary w-full text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
