
import React, { useState, useEffect } from 'react';

const stats = [
  { value: 250, label: 'Projects Completed', suffix: '+' },
  { value: 10, label: 'Years of Experience', suffix: '+' },
  { value: 95, label: 'Client Satisfaction', suffix: '%' },
  { value: 30, label: 'Team Members', suffix: '+' }
];

const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        animateNumbers();
        setHasAnimated(true);
      }
    }, { threshold: 0.5 });

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      const duration = 2000; // ms
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const step = stat.value / totalFrames;
      
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        
        const progress = Math.min(frame * step, stat.value);
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(progress);
          return newCounters;
        });
        
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    });
  };

  return (
    <section id="stats-section" className="section py-16 bg-brand-purple-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center scroll-animation"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-orange mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
