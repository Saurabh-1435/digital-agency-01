
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import TestimonialSection from '@/components/home/TestimonialSection';
import StatsSection from '@/components/home/StatsSection';
import CtaSection from '@/components/home/CtaSection';

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
      <StatsSection />
      <CtaSection />
    </div>
  );
};

export default Index;
