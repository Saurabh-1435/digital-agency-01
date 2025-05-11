
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Layout, PenTool, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const servicesData = [
  {
    id: 'web',
    title: 'Web Development',
    icon: <Code size={32} />,
    description: 'We build responsive, fast, and intuitive websites that deliver exceptional user experiences across all devices.',
    categories: [
      {
        title: 'E-Commerce',
        description: 'Fully-featured online stores with secure payment processing, inventory management, and customer accounts.',
        examples: ['Fashion Boutique', 'Electronics Store', 'Handmade Crafts Shop']
      },
      {
        title: 'Corporate Sites',
        description: 'Professional websites that showcase your company, services, and strengthen your brand identity.',
        examples: ['Financial Services', 'Law Firm', 'Consulting Agency']
      },
      {
        title: 'Web Applications',
        description: 'Custom web applications with complex functionality for specific business needs.',
        examples: ['Project Management Tool', 'CRM System', 'Booking Platform']
      }
    ]
  },
  {
    id: 'software',
    title: 'Software Development',
    icon: <Layout size={32} />,
    description: 'Custom software solutions tailored to your unique business needs, from mobile apps to enterprise systems.',
    categories: [
      {
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
        examples: ['Fitness Tracker', 'Food Delivery', 'Social Networking']
      },
      {
        title: 'Enterprise Software',
        description: 'Large-scale software solutions for streamlining operations and boosting productivity.',
        examples: ['ERP Systems', 'Workflow Management', 'Data Analytics Platform']
      },
      {
        title: 'API Development',
        description: 'Robust and scalable APIs to connect your systems and enable seamless data exchange.',
        examples: ['Payment Gateway Integration', 'Third-party Service Connection', 'Microservices Architecture']
      }
    ]
  },
  {
    id: 'design',
    title: 'Graphic Design',
    icon: <PenTool size={32} />,
    description: 'Creative visual designs that communicate your brand\'s message effectively and leave lasting impressions.',
    categories: [
      {
        title: 'Brand Identity',
        description: 'Comprehensive branding packages including logos, color schemes, typography, and brand guidelines.',
        examples: ['Logo Design', 'Brand Style Guide', 'Business Stationery']
      },
      {
        title: 'Marketing Materials',
        description: 'Eye-catching designs for both digital and print marketing campaigns.',
        examples: ['Social Media Graphics', 'Brochures', 'Billboard Designs']
      },
      {
        title: 'UI/UX Design',
        description: 'User-centered interface designs that enhance usability and user satisfaction.',
        examples: ['Website Mockups', 'App Interface Design', 'Dashboard Layouts']
      }
    ]
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get the service to highlight from URL hash if present
  React.useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && servicesData.find(s => s.id === hash)) {
      setExpandedService(hash);
      window.scrollTo({
        top: document.getElementById(hash)?.offsetTop - 100 || 0,
        behavior: 'smooth'
      });
    }
  }, []);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
    setActiveCategory(null);
  };

  const toggleCategory = (categoryTitle: string) => {
    setActiveCategory(activeCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-brand-purple-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">Comprehensive Digital Solutions for Your Business</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">
              From concept to completion, we provide end-to-end digital solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="space-y-10">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-animation" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
                >
                  <div 
                    className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer"
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-start space-x-6 mb-6 md:mb-0">
                      <div className="w-16 h-16 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="text-brand-purple">
                      {expandedService === service.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                  
                  {expandedService === service.id && (
                    <div className="border-t border-gray-200 p-8 animate-accordion-down">
                      <h4 className="text-xl font-semibold mb-6">Categories</h4>
                      <div className="space-y-4">
                        {service.categories.map((category) => (
                          <div key={category.title} className="border border-gray-200 rounded-lg overflow-hidden">
                            <div 
                              className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer"
                              onClick={() => toggleCategory(category.title)}
                            >
                              <h5 className="font-semibold">{category.title}</h5>
                              <div className="text-brand-purple">
                                {activeCategory === category.title ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                              </div>
                            </div>
                            
                            {activeCategory === category.title && (
                              <div className="p-4 animate-accordion-down">
                                <p className="text-gray-600 mb-4">{category.description}</p>
                                <div>
                                  <h6 className="font-medium mb-2">Examples:</h6>
                                  <ul className="list-disc list-inside text-gray-600">
                                    {category.examples.map((example) => (
                                      <li key={example}>{example}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">
              We follow a structured approach to ensure your projects are delivered efficiently and effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
            <div className="flex flex-col items-center text-center px-4 scroll-animation" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-brand-purple text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-600">We learn about your business, goals, and requirements to create a strategic roadmap.</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 scroll-animation" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-brand-purple text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">We create wireframes and design concepts that align with your brand and vision.</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 scroll-animation" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-full bg-brand-purple text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-600">Our experts build your solution using cutting-edge technologies and best practices.</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 scroll-animation" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 rounded-full bg-brand-purple text-white flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-600">After thorough testing, we deploy your solution and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-brand-purple text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to start your project?</h3>
              <p className="text-lg text-white/80">Let's discuss how we can help bring your vision to life.</p>
            </div>
            <Link to="/contact" className="btn bg-white text-brand-purple-dark hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
