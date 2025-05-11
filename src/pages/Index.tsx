
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/home/HeroSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import TestimonialSection from '@/components/home/TestimonialSection';
import StatsSection from '@/components/home/StatsSection';
import CtaSection from '@/components/home/CtaSection';
import { ArrowRight, Briefcase, DollarSign } from 'lucide-react';

const Index = () => {
  // Add script for animation and 3D effects
  useEffect(() => {
    // Function to initialize parallax effect
    const initParallax = () => {
      const containers = document.querySelectorAll('.parallax-container');
      
      containers.forEach(container => {
        const elements = container.querySelectorAll('.parallax-element');
        
        container.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
          
          elements.forEach(element => {
            const depth = parseFloat(element.getAttribute('data-depth') || '1');
            const translateX = x * 20 * depth;
            const translateY = y * 20 * depth;
            const rotateY = x * 10;
            const rotateX = y * 10;
            
            (element as HTMLElement).style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
          });
        });
        
        container.addEventListener('mouseleave', () => {
          elements.forEach(element => {
            (element as HTMLElement).style.transform = 'translateX(0) translateY(0) rotateY(0) rotateX(0)';
          });
        });
      });
    };
    
    // Initialize effects
    setTimeout(() => {
      initParallax();
    }, 100);
  }, []);
  
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturedServices />
      <TestimonialSection />
      
      {/* Pricing Section Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">Our Pricing Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent and flexible pricing options designed to fit businesses of all sizes
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            <div className="bg-white rounded-xl shadow-lg p-6 md:w-1/3 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-brand-purple/10 flex items-center justify-center">
                  <DollarSign size={32} className="text-brand-purple" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">Starting from</h3>
              <div className="text-center mt-2">
                <span className="text-4xl font-bold">$499</span>
              </div>
              <p className="text-center text-gray-600 mt-2">For small business solutions</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/pricing" 
              className="inline-flex items-center btn btn-secondary"
            >
              View All Pricing Plans <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Careers Section Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of an innovative team passionate about creating digital excellence
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-brand-purple md:w-1/3">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-brand-purple/10 flex items-center justify-center">
                  <Briefcase size={32} className="text-brand-purple" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">We're Hiring!</h3>
              <p className="text-center text-gray-600 mt-4">
                Check out our open positions and be part of our growing team of professionals
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/careers" 
              className="inline-flex items-center btn btn-secondary"
            >
              View Career Opportunities <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <StatsSection />
      <CtaSection />
    </div>
  );
};

export default Index;
