
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Building } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-brand-purple-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SHILPKAR</h1>
            <p className="text-xl text-gray-200">Crafting Digital Excellence Since 2015</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animation">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2015, SHILPKAR began with a simple mission: to transform digital ideas into reality. What started as a small team of passionate designers and developers has grown into a full-service digital agency working with clients across the globe.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our name "SHILPKAR" derives from the Sanskrit word meaning "craftsman" or "artisan," reflecting our dedication to crafting beautiful, functional digital experiences with meticulous attention to detail.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to have helped hundreds of businesses establish their digital presence, optimize their operations, and connect with their audiences through innovative digital solutions.
              </p>
            </div>
            <div className="parallax-container rounded-xl overflow-hidden shadow-xl h-[400px] relative">
              <div 
                className="absolute inset-0 parallax-element" 
                data-depth="0.2"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '120%',
                  width: '120%',
                  top: '-10%',
                  left: '-10%'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg scroll-animation" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Client-Centric</h3>
              <p className="text-gray-700">
                We prioritize understanding our clients' unique needs and goals, ensuring our solutions address their specific challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg scroll-animation" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We're committed to delivering exceptional quality in everything we do, setting high standards and continuously improving our craft.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg scroll-animation" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mb-6">
                <Building size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-700">
                We embrace new technologies and approaches, pushing boundaries to create forward-thinking solutions that keep our clients ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] group">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mb-5 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-6">We build responsive, fast, and intuitive websites that deliver exceptional user experiences across all devices.</p>
              <Link to="/services#web" className="inline-flex items-center text-brand-purple hover:text-brand-purple-dark font-medium">
                Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] group">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mb-5 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Software Development</h3>
              <p className="text-gray-600 mb-6">Custom software solutions tailored to your unique business needs, from mobile apps to enterprise systems.</p>
              <Link to="/services#software" className="inline-flex items-center text-brand-purple hover:text-brand-purple-dark font-medium">
                Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] group">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mb-5 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Graphic Design</h3>
              <p className="text-gray-600 mb-6">Creative visual designs that communicate your brand\'s message effectively and leave lasting impressions.</p>
              <Link to="/services#design" className="inline-flex items-center text-brand-purple hover:text-brand-purple-dark font-medium">
                Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-brand-purple text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to start your digital journey?</h3>
              <p className="text-lg text-white/80">Let's create something amazing together.</p>
            </div>
            <Link to="/contact" className="btn bg-white text-brand-purple-dark hover:bg-gray-100">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
