
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechCore Solutions',
    position: 'CEO',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    quote: 'SHILPKAR transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their team was professional, creative, and incredibly responsive throughout the entire process.',
    rating: 5,
    project: 'Corporate Website Redesign'
  },
  {
    id: 2,
    name: 'David Wilson',
    company: 'Emerald Retail',
    position: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Working with SHILPKAR on our e-commerce platform was a game-changer for our business. Their attention to detail and technical expertise helped us increase our online sales by over 200% in just six months.',
    rating: 5,
    project: 'E-commerce Platform Development'
  },
  {
    id: 3,
    name: 'Jennifer Lee',
    company: 'Verdant Health',
    position: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    quote: 'The mobile app SHILPKAR developed for us exceeded our expectations in every way. The user interface is intuitive, the performance is flawless, and our customers love it. I highly recommend their services.',
    rating: 5,
    project: 'Healthcare Mobile App'
  },
  {
    id: 4,
    name: 'Michael Rodriguez',
    company: 'Fusion Finance',
    position: 'CTO',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    quote: 'SHILPKAR helped us modernize our legacy systems with a secure, scalable solution that has dramatically improved our operational efficiency. Their technical knowledge and problem-solving skills are exceptional.',
    rating: 4,
    project: 'Financial Software Development'
  },
  {
    id: 5,
    name: 'Emily Chang',
    company: 'Artisan Studio',
    position: 'Creative Director',
    image: 'https://randomuser.me/api/portraits/women/54.jpg',
    quote: 'The branding work SHILPKAR did for our startup was absolutely perfect. They understood our vision immediately and created a visual identity that resonates perfectly with our target audience.',
    rating: 5,
    project: 'Brand Identity Design'
  },
  {
    id: 6,
    name: 'Robert Martinez',
    company: 'Global Logistics',
    position: 'Operations Manager',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    quote: "The custom logistics software SHILPKAR developed has revolutionized our supply chain management. Their team took the time to understand our complex needs and delivered a solution that's made a real impact.",
    rating: 5,
    project: 'Supply Chain Management System'
  }
];

// Client logos
const clientLogos = [
  {
    name: 'TechCore',
    logo: 'https://via.placeholder.com/150x80?text=TechCore'
  },
  {
    name: 'Emerald',
    logo: 'https://via.placeholder.com/150x80?text=Emerald'
  },
  {
    name: 'Verdant',
    logo: 'https://via.placeholder.com/150x80?text=Verdant'
  },
  {
    name: 'Fusion',
    logo: 'https://via.placeholder.com/150x80?text=Fusion'
  },
  {
    name: 'Artisan',
    logo: 'https://via.placeholder.com/150x80?text=Artisan'
  },
  {
    name: 'Global',
    logo: 'https://via.placeholder.com/150x80?text=Global'
  },
  {
    name: 'Quantum',
    logo: 'https://via.placeholder.com/150x80?text=Quantum'
  },
  {
    name: 'Skyline',
    logo: 'https://via.placeholder.com/150x80?text=Skyline'
  }
];

// Awards and recognitions
const awards = [
  {
    title: 'Best Web Design Agency 2024',
    organization: 'Digital Excellence Awards',
    icon: '🏆'
  },
  {
    title: 'Top Mobile App Developer',
    organization: 'Tech Innovators List',
    icon: '🥇'
  },
  {
    title: 'Excellence in UX/UI Design',
    organization: 'International Design Association',
    icon: '🎨'
  },
  {
    title: 'Best E-commerce Solutions',
    organization: 'Commerce Technology Awards',
    icon: '🌟'
  }
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-brand-purple-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-gray-200">See what our clients have to say about working with SHILPKAR</p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We take pride in our work and the relationships we build with our clients. Here's what they have to say about their experience working with us.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Slide */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 scroll-animation">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
                  <img 
                    src={testimonials[activeSlide].image} 
                    alt={testimonials[activeSlide].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonials[activeSlide].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote size={32} className="absolute -top-4 -left-3 text-brand-purple/20" />
                    <blockquote className="relative z-10">
                      <p className="text-lg text-gray-700 italic mb-4">
                        {testimonials[activeSlide].quote}
                      </p>
                    </blockquote>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-bold">{testimonials[activeSlide].name}</p>
                    <p className="text-gray-600">{testimonials[activeSlide].position}, {testimonials[activeSlide].company}</p>
                    <p className="text-sm text-brand-purple mt-1">Project: {testimonials[activeSlide].project}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button 
                onClick={prevSlide}
                className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeSlide === index ? 'bg-brand-purple w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center scroll-animation">More Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full scroll-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-4 flex-grow">"{testimonial.quote}"</p>
                
                <p className="text-sm text-brand-purple mt-auto">Project: {testimonial.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center scroll-animation">Our Clients</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 scroll-animation grayscale hover:grayscale-0 transition-all"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center scroll-animation">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 text-center scroll-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-brand-purple text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to start your success story?</h3>
              <p className="text-lg text-white/80">Join our satisfied clients and experience the SHILPKAR difference.</p>
            </div>
            <a href="/contact" className="btn bg-white text-brand-purple-dark hover:bg-gray-100">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
