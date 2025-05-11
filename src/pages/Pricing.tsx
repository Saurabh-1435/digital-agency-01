
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Pricing data
const pricingPlans = {
  web: [
    {
      name: 'Basic',
      price: '999',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Responsive Design',
        'Up to 5 Pages',
        'Contact Form',
        'Basic SEO Setup',
        'CMS Integration',
        'Social Media Links',
        '3 Rounds of Revisions',
        '30 Days Support',
      ],
      notIncluded: [
        'E-commerce Functionality',
        'Custom Animations',
        'Multiple Language Support'
      ],
      popular: false,
      btnText: 'Choose Basic'
    },
    {
      name: 'Professional',
      price: '1,999',
      description: 'Ideal for growing businesses with specific needs',
      features: [
        'Responsive Design',
        'Up to 10 Pages',
        'Advanced Contact Forms',
        'Complete SEO Package',
        'CMS Integration',
        'Social Media Integration',
        'Blog Setup',
        'Custom Animations',
        'Speed Optimization',
        '5 Rounds of Revisions',
        '60 Days Support',
      ],
      notIncluded: [
        'E-commerce Functionality',
        'Multiple Language Support'
      ],
      popular: true,
      btnText: 'Choose Professional'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Advanced solutions for larger organizations',
      features: [
        'Responsive Design',
        'Unlimited Pages',
        'Advanced Forms & Features',
        'Complete SEO Package',
        'CMS Integration',
        'Social Media Integration',
        'Blog Setup',
        'Custom Animations',
        'Speed Optimization',
        'E-commerce Functionality',
        'Multiple Language Support',
        'Unlimited Revisions',
        '90 Days Support',
        'Priority Support',
      ],
      notIncluded: [],
      popular: false,
      btnText: 'Contact Us'
    }
  ],
  software: [
    {
      name: 'Startup',
      price: '4,999',
      description: 'Essential features for new applications',
      features: [
        'Requirements Analysis',
        'UI/UX Design',
        'Core Functionality',
        'User Authentication',
        'Basic Admin Panel',
        'Responsive Design',
        'Cross-browser Compatibility',
        'Basic API Integration',
        '60 Days Support',
      ],
      notIncluded: [
        'Advanced Security Features',
        'Scalability Planning',
        'Third-party Integrations'
      ],
      popular: false,
      btnText: 'Choose Startup'
    },
    {
      name: 'Business',
      price: '9,999',
      description: 'Comprehensive solution for most business needs',
      features: [
        'Requirements Analysis',
        'UI/UX Design',
        'Full Feature Development',
        'User Authentication',
        'Advanced Admin Panel',
        'Responsive Design',
        'Cross-browser Compatibility',
        'API Development',
        'Third-party Integrations',
        'Basic Security Features',
        'Testing & QA',
        '90 Days Support',
      ],
      notIncluded: [
        'Advanced Security Features',
        'Scalability Planning'
      ],
      popular: true,
      btnText: 'Choose Business'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for complex requirements',
      features: [
        'Requirements Analysis',
        'UI/UX Design',
        'Full Feature Development',
        'User Authentication',
        'Advanced Admin Panel',
        'Responsive Design',
        'Cross-browser Compatibility',
        'API Development',
        'Third-party Integrations',
        'Advanced Security Features',
        'Scalability Planning',
        'Performance Optimization',
        'Testing & QA',
        'Documentation',
        '12 Months Support',
        'Dedicated Project Manager',
      ],
      notIncluded: [],
      popular: false,
      btnText: 'Contact Us'
    }
  ],
  design: [
    {
      name: 'Essential',
      price: '799',
      description: 'Basic branding for new businesses',
      features: [
        'Logo Design (3 concepts)',
        'Business Card Design',
        'Brand Color Palette',
        'Typography Selection',
        'Social Media Profile Images',
        '3 Rounds of Revisions',
      ],
      notIncluded: [
        'Brand Guidelines',
        'Stationery Design',
        'Marketing Materials'
      ],
      popular: false,
      btnText: 'Choose Essential'
    },
    {
      name: 'Complete',
      price: '1,499',
      description: 'Comprehensive branding package',
      features: [
        'Logo Design (5 concepts)',
        'Business Card Design',
        'Brand Color Palette',
        'Typography Selection',
        'Social Media Profile Images',
        'Email Signature',
        'Basic Brand Guidelines',
        'Stationery Design',
        '5 Rounds of Revisions',
      ],
      notIncluded: [
        'Marketing Materials',
        'Brand Strategy'
      ],
      popular: true,
      btnText: 'Choose Complete'
    },
    {
      name: 'Premium',
      price: '2,999',
      description: 'Strategic brand identity development',
      features: [
        'Logo Design (8 concepts)',
        'Business Card Design',
        'Brand Color Palette',
        'Typography Selection',
        'Social Media Profile & Cover Images',
        'Email Signature',
        'Comprehensive Brand Guidelines',
        'Stationery Design',
        'Marketing Materials (Brochure, Flyer)',
        'Brand Strategy Session',
        'Unlimited Revisions',
      ],
      notIncluded: [],
      popular: false,
      btnText: 'Choose Premium'
    }
  ]
};

const faqs = [
  {
    question: 'Do you offer customized packages?',
    answer: 'Yes, we understand that every project is unique. If our standard packages don\'t match your specific requirements, we can create a custom solution tailored to your needs.'
  },
  {
    question: 'What is your payment structure?',
    answer: 'We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.'
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes, we offer various maintenance packages to keep your website or application running smoothly after launch. These can include regular updates, security monitoring, content updates, and technical support.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A basic website might take 2-4 weeks, while complex web applications or software could take several months. We\'ll provide a specific timeline during our initial consultation.'
  },
  {
    question: 'What happens if I need changes after the project is complete?',
    answer: 'Our packages include a specified number of revision rounds. After project completion, additional changes are billed at our hourly rate or can be covered by a maintenance package.'
  }
];

const Pricing = () => {
  const [pricingCategory, setPricingCategory] = useState('web');
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-brand-purple-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-gray-200">Clear, competitive rates for high-quality digital solutions</p>
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12 scroll-animation">
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                pricingCategory === 'web' 
                  ? 'bg-brand-purple text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setPricingCategory('web')}
            >
              Web Development
            </button>
            
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                pricingCategory === 'software' 
                  ? 'bg-brand-purple text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setPricingCategory('software')}
            >
              Software Development
            </button>
            
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                pricingCategory === 'design' 
                  ? 'bg-brand-purple text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setPricingCategory('design')}
            >
              Graphic Design
            </button>
          </div>
          
          {/* Billing Switch */}
          {pricingCategory !== 'design' && (
            <div className="flex justify-center items-center space-x-4 mb-12 scroll-animation">
              <span className={billingPeriod === 'monthly' ? 'font-semibold text-brand-purple' : 'text-gray-500'}>
                Monthly
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={billingPeriod === 'annual'}
                  onChange={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-purple"></div>
              </label>
              <span className={billingPeriod === 'annual' ? 'font-semibold text-brand-purple' : 'text-gray-500'}>
                Annual <span className="text-xs text-green-500 font-medium">(Save 20%)</span>
              </span>
            </div>
          )}

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans[pricingCategory as keyof typeof pricingPlans].map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300 scroll-animation ${plan.popular ? 'ring-2 ring-brand-purple' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="bg-brand-purple text-white py-2 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-500">
                        {pricingCategory !== 'design' && (
                          billingPeriod === 'monthly' ? '/mo' : '/yr'
                        )}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold">Includes:</h4>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <Check size={18} className="text-green-500 mr-3 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold mt-6">Not included:</h4>
                        {plan.notIncluded.map((feature, i) => (
                          <div key={i} className="flex items-center">
                            <X size={18} className="text-red-500 mr-3 shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full text-center py-3 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-brand-purple text-white hover:bg-brand-purple-dark'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.btnText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Premium Services Section */}
      <section className="py-16 bg-gray-50">
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

      {/* Compare Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect plan for your specific needs
            </p>
          </div>
          
          <div className="overflow-x-auto mb-6 scroll-animation">
            <table className="w-full min-w-[800px] border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left border-b border-gray-200 w-1/4">Features</th>
                  {pricingPlans[pricingCategory as keyof typeof pricingPlans].map((plan, index) => (
                    <th key={index} className="p-4 text-left border-b border-gray-200">
                      <span className={plan.popular ? "text-brand-purple font-bold" : "font-bold"}>
                        {plan.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium">Price</td>
                  {pricingPlans[pricingCategory as keyof typeof pricingPlans].map((plan, index) => (
                    <td key={index} className="p-4 border-b border-gray-200">
                      <span className={`${plan.popular ? "font-bold" : ""}`}>
                        ${plan.price}
                        {plan.price !== 'Custom' && pricingCategory !== 'design' && (
                          <span className="text-gray-500 font-normal">
                            {billingPeriod === 'monthly' ? '/mo' : '/yr'}
                          </span>
                        )}
                      </span>
                    </td>
                  ))}
                </tr>
                
                {/* Features from the first plan */}
                {pricingPlans[pricingCategory as keyof typeof pricingPlans][0].features.concat(
                  pricingPlans[pricingCategory as keyof typeof pricingPlans][0].notIncluded
                ).map((feature, featureIndex) => {
                  // Check if this feature is in each plan
                  return (
                    <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <span>{feature}</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle size={16} className="ml-2 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs p-2">Details about {feature}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      
                      {pricingPlans[pricingCategory as keyof typeof pricingPlans].map((plan, planIndex) => {
                        const hasFeature = plan.features.includes(feature);
                        const notIncluded = plan.notIncluded.includes(feature);
                        
                        return (
                          <td key={planIndex} className="p-4 border-b border-gray-200">
                            {hasFeature ? (
                              <Check size={20} className="text-green-500" />
                            ) : notIncluded ? (
                              <X size={20} className="text-red-500" />
                            ) : (
                              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
                
                {/* Additional features from other plans */}
                {[1, 2].map(planIndex => 
                  pricingPlans[pricingCategory as keyof typeof pricingPlans][planIndex].features.filter(
                    feature => !pricingPlans[pricingCategory as keyof typeof pricingPlans][0].features.includes(feature) &&
                               !pricingPlans[pricingCategory as keyof typeof pricingPlans][0].notIncluded.includes(feature)
                  ).map((feature, featureIndex) => (
                    <tr key={`plan-${planIndex}-feature-${featureIndex}`} className={(featureIndex + pricingPlans[pricingCategory as keyof typeof pricingPlans][0].features.length) % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <span>{feature}</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle size={16} className="ml-2 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs p-2">Details about {feature}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      
                      {pricingPlans[pricingCategory as keyof typeof pricingPlans].map((plan, idx) => (
                        <td key={idx} className="p-4 border-b border-gray-200">
                          {plan.features.includes(feature) ? (
                            <Check size={20} className="text-green-500" />
                          ) : (
                            <X size={20} className="text-red-500" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our pricing and services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow scroll-animation">
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-brand-purple">
                    {expandedFaq === index ? 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      : 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    }
                  </span>
                </button>
                
                {expandedFaq === index && (
                  <div className="p-4 pt-0 animate-accordion-down">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Quote CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-brand-purple/5 border border-brand-purple/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto scroll-animation">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our packages are designed to cover most needs, but we understand that every project is unique. Contact us for a custom quote tailored to your specific requirements.
            </p>
            <Link to="/contact" className="btn btn-primary inline-flex items-center">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
