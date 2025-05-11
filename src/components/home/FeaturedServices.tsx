
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Layout, PenTool, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'We build responsive, fast, and intuitive websites that deliver exceptional user experiences across all devices.',
    link: '/services#web'
  },
  {
    icon: <Layout size={32} />,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your unique business needs, from mobile apps to enterprise systems.',
    link: '/services#software'
  },
  {
    icon: <PenTool size={32} />,
    title: 'Graphic Design',
    description: 'Creative visual designs that communicate your brand's message effectively and leave lasting impressions.',
    link: '/services#design'
  }
];

const FeaturedServices = () => {
  return (
    <section className="section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="scroll-animation"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] group">
                <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mb-5 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-brand-purple hover:text-brand-purple-dark font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
