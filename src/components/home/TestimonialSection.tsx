
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'SHILPKAR transformed our outdated website into a stunning digital platform that perfectly captures our brand. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director, Innovate Inc',
    content: 'The team at SHILPKAR delivered exceptional results for our software project. They were communicative, met all deadlines, and provided innovative solutions to complex problems.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, DesignHub',
    content: 'As a design professional myself, I have high standards. SHILPKAR exceeded my expectations with their creative approach and flawless execution of our brand identity.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
    }
  };
  
  return (
    <section className="section bg-brand-purple/5 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in delivering exceptional results that exceed our clients' expectations
          </p>
        </div>

        <div 
          className="relative overflow-hidden scroll-animation"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-all duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-full px-4"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={`${testimonial.image}?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all ${
                index === activeIndex ? 'bg-brand-purple scale-125' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
