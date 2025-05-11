
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Briefcase, BookOpenText, Mail, HelpCircle, Users, Award, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'About Us', path: '/about', icon: <Info size={18} /> },
  { name: 'Services', path: '/services', icon: <Briefcase size={18} /> },
  { name: 'Blog', path: '/blog', icon: <BookOpenText size={18} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  { name: 'FAQ', path: '/faq', icon: <HelpCircle size={18} /> },
  { name: 'Careers', path: '/careers', icon: <Users size={18} /> },
  { name: 'Testimonials', path: '/testimonials', icon: <Award size={18} /> },
  { name: 'Pricing', path: '/pricing', icon: <DollarSign size={18} /> },
];

// Group services for dropdown menu
const services = [
  {
    title: "Web Development",
    href: "/services#web",
    description: "Responsive websites tailored to your business needs",
  },
  {
    title: "Software Development",
    href: "/services#software",
    description: "Custom applications to streamline your operations",
  },
  {
    title: "Graphic Design",
    href: "/services#design",
    description: "Eye-catching visuals that communicate your brand",
  },
];

// Resources for dropdown menu
const resources = [
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights on digital trends and technologies",
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Answers to common questions about our services",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "Success stories from our satisfied clients",
  },
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

        {/* Desktop Navigation with Dropdowns */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <Link
                          to={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((resource) => (
                      <li key={resource.title}>
                        <Link
                          to={resource.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{resource.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {resource.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/careers" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-brand-purple text-white hover:bg-brand-purple/90 hover:text-white")}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Alternative Desktop Navigation for Medium Screen Sizes */}
        <nav className="hidden md:flex lg:hidden items-center space-x-6">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link transition-colors hover:text-brand-purple',
                location.pathname === link.path && 'text-brand-purple font-medium'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="flex items-center space-x-1 transition-colors hover:text-brand-purple">
              <span>More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                {navLinks.slice(5).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-40 lg:hidden flex flex-col transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 pt-24 space-y-6 flex flex-col h-full overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'flex items-center text-lg py-2 border-b border-border',
                location.pathname === link.path && 'text-brand-purple font-medium'
              )}
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </Link>
          ))}
          <div className="mt-auto pt-6">
            <Link
              to="/contact"
              className="btn btn-primary w-full text-center flex items-center justify-center"
            >
              <Mail size={18} className="mr-2" />
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
