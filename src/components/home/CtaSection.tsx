
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-brand-purple to-brand-purple-dark rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg text-white/80 mb-8">
                Partner with SHILPKAR to create impactful digital experiences that drive results. Let's turn your vision into reality.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/contact" className="btn bg-white text-brand-purple-dark hover:bg-gray-100">
                  Get Started
                </Link>
                <Link to="/services" className="btn border border-white/30 text-white hover:bg-white/10 flex items-center gap-2">
                  Explore Services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -top-16 -right-16 w-32 h-32 border-4 border-white/20 rounded-xl transform rotate-12 animate-float"></div>
              <div className="absolute -bottom-20 right-20 w-40 h-40 border-4 border-white/10 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 transform rotate-3 shadow-xl">
                <div className="bg-white/10 rounded-xl p-8 h-full">
                  <div className="h-4 w-20 bg-white/30 rounded mb-6"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-white/20 rounded"></div>
                    <div className="h-4 w-5/6 bg-white/20 rounded"></div>
                    <div className="h-4 w-4/6 bg-white/20 rounded"></div>
                  </div>
                  <div className="mt-8 flex space-x-3">
                    <div className="h-10 w-24 bg-brand-orange/50 rounded"></div>
                    <div className="h-10 w-24 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
