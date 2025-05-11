
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
      
      setMousePosition({ x, y });
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[10%] left-[15%] w-16 h-16 border-4 border-brand-purple rounded-lg animate-rotate-slow"></div>
        <div className="absolute top-[20%] right-[20%] w-24 h-24 border-4 border-brand-orange animate-float" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
        <div className="absolute bottom-[25%] left-[25%] w-20 h-20 bg-brand-blue/20 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-[15%] right-[30%] w-12 h-12 bg-brand-purple/20 animate-rotate-slow" style={{ borderRadius: '63% 37% 54% 46% / 55% 52% 48% 45%' }}></div>
      </div>

      <div 
        ref={containerRef}
        className="container mx-auto px-4 z-10 parallax-container"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left scroll-animation">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-brand-purple">Crafting Digital</span><br />
              Experiences That <span className="text-brand-orange">Inspire</span>
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto lg:mx-0">
              We blend creativity with technology to build stunning websites, powerful software, 
              and memorable designs that transform businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services" className="btn btn-primary px-8 py-3">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-secondary px-8 py-3 flex items-center justify-center gap-2">
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* 3D Mockup Area */}
          <div className="relative">
            <div 
              className="parallax-element"
              style={{
                transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * 10}deg)`
              }}
            >
              {/* Device Frame */}
              <div className="relative mx-auto w-full max-w-md aspect-[5/4] rounded-2xl bg-gradient-to-br from-brand-purple to-brand-purple-dark p-1 shadow-xl">
                <div className="absolute inset-0.5 rounded-xl bg-white p-5">
                  {/* Browser Bar */}
                  <div className="bg-gray-100 rounded-md h-8 mb-2 flex items-center px-3">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="mx-auto h-5 w-64 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="h-[calc(100%-2.5rem)] rounded-md bg-gradient-to-br from-gray-50 to-white p-3 shadow-inner">
                    {/* Website Mockup */}
                    <div className="h-6 w-24 bg-brand-purple/20 rounded mb-3"></div>
                    <div className="h-10 w-3/4 bg-brand-purple/30 rounded-md mb-4"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-6"></div>
                    
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="aspect-square bg-gray-100 rounded-md"></div>
                      <div className="aspect-square bg-gray-100 rounded-md"></div>
                      <div className="aspect-square bg-gray-100 rounded-md"></div>
                    </div>
                    
                    <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 -left-16 w-28 h-28 bg-brand-orange rounded-lg p-2 shadow-lg flex items-center justify-center transform -translate-y-10 rotate-12 animate-float">
                <div className="w-full h-full bg-white rounded-md flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1 p-1">
                    <div className="bg-gray-200 rounded-sm aspect-square"></div>
                    <div className="bg-brand-orange/30 rounded-sm aspect-square"></div>
                    <div className="bg-brand-orange/30 rounded-sm aspect-square"></div>
                    <div className="bg-gray-200 rounded-sm aspect-square"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-24 bg-brand-blue rounded-lg shadow-lg transform rotate-6 animate-float" style={{ animationDelay: '-1.5s' }}>
                <div className="absolute inset-0.5 rounded-md bg-white p-2">
                  <div className="h-2 w-1/2 bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 w-full bg-brand-blue/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
