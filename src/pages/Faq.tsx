
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

// FAQ Data
const faqData = {
  'About Our Services': [
    {
      question: 'What services does SHILPKAR offer?',
      answer: 'SHILPKAR offers a wide range of digital services including Web Development, Software Development, and Graphic Design. Our expert team can help with everything from responsive websites and mobile apps to branding and UI/UX design.'
    },
    {
      question: 'Do you work with clients internationally?',
      answer: 'Yes, we work with clients around the world. Our team uses collaborative tools and regular communication to ensure smooth project management regardless of location or time zone differences.'
    },
    {
      question: 'Can you help with an existing project or only new ones?',
      answer: 'We can definitely help with existing projects! Whether you need updates, maintenance, redesign, or want to add new features to an existing platform, our team can analyze your current solution and provide the necessary improvements.'
    }
  ],
  'Project Process': [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. During our initial consultation, we\'ll provide you with a detailed timeline specific to your project.'
    },
    {
      question: 'What is your development process?',
      answer: 'Our process typically includes: 1) Discovery - understanding your requirements, 2) Planning & Design - creating wireframes and mockups, 3) Development - building the solution, 4) Testing - ensuring quality and functionality, 5) Deployment - launching the solution, and 6) Ongoing Support - maintaining and improving your solution.'
    },
    {
      question: 'How involved will I need to be during the project?',
      answer: 'We believe in collaborative development, so we encourage client involvement throughout the process. Typically, we\'ll need your active participation during the initial planning phase, feedback at key milestones, and final approval before launch. Beyond that, we can adapt to your preferred level of involvement.'
    }
  ],
  'Pricing & Payments': [
    {
      question: 'How do you determine project pricing?',
      answer: 'Our pricing is based on the scope, complexity, and timeline of the project. We offer both fixed-price quotes for well-defined projects and hourly/monthly rates for ongoing development work. We\'re transparent about our pricing structure and will provide detailed quotes after understanding your requirements.'
    },
    {
      question: 'Do you require a deposit before starting work?',
      answer: 'Yes, we typically require a 30-50% deposit before beginning work, with the remainder due either at project milestones or upon completion, depending on the project size and duration.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, credit cards, and major online payment platforms. For ongoing services, we can set up recurring billing options for your convenience.'
    }
  ],
  'Support & Maintenance': [
    {
      question: 'Do you offer post-launch support?',
      answer: 'Yes, we provide ongoing support and maintenance services after launch. We offer different support packages based on your needs, ranging from basic technical support to comprehensive maintenance and regular updates.'
    },
    {
      question: 'What is your response time for support issues?',
      answer: 'Our standard response time is within 24-48 hours for non-critical issues. For clients on premium support packages, we offer faster response times. Critical issues that affect site functionality are prioritized regardless of support level.'
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Absolutely! We provide comprehensive training sessions for your team to ensure they\'re comfortable managing and using your new solution. Training can be conducted in-person or virtually, depending on your preference and location.'
    }
  ]
};

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('About Our Services');
  const [activeQuestions, setActiveQuestions] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{category: string, index: number, question: string, answer: string}[]>([]);

  const toggleQuestion = (index: number) => {
    if (activeQuestions.includes(index)) {
      setActiveQuestions(activeQuestions.filter(item => item !== index));
    } else {
      setActiveQuestions([...activeQuestions, index]);
    }
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    const results: {category: string, index: number, question: string, answer: string}[] = [];
    
    Object.entries(faqData).forEach(([category, questions]) => {
      questions.forEach((faq, index) => {
        if (
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
        ) {
          results.push({
            category,
            index,
            question: faq.question,
            answer: faq.answer
          });
        }
      });
    });
    
    setSearchResults(results);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-brand-purple-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200">Find answers to common questions about our services and processes</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for answers..."
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <span className="text-gray-400 hover:text-gray-600">✕</span>
                </button>
              )}
            </div>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-xl font-semibold mb-4">Search Results {searchResults.length > 0 && `(${searchResults.length})`}</h2>
              
              {searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((result, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div 
                        className="p-4 bg-gray-50 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleQuestion(idx)}
                      >
                        <h3 className="font-medium text-gray-800">{result.question}</h3>
                        <span className="text-brand-purple">
                          {activeQuestions.includes(idx) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </span>
                      </div>
                      
                      {activeQuestions.includes(idx) && (
                        <div className="p-4 animate-accordion-down">
                          <p className="text-gray-700">{result.answer}</p>
                          <p className="mt-2 text-sm text-gray-500">Category: {result.category}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">No results found for "{searchQuery}"</p>
                  <p className="text-gray-500">Try different keywords or browse the categories below.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Categories & Questions */}
      {!searchQuery && (
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Categories */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-6">Categories</h2>
                  <nav className="space-y-2">
                    {Object.keys(faqData).map((category) => (
                      <button
                        key={category}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeCategory === category 
                            ? 'bg-brand-purple text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
              
              {/* Questions */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">{activeCategory}</h2>
                  
                  <div className="space-y-4">
                    {faqData[activeCategory as keyof typeof faqData].map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden scroll-animation">
                        <div 
                          className="p-4 bg-gray-50 cursor-pointer flex justify-between items-center"
                          onClick={() => toggleQuestion(index)}
                        >
                          <h3 className="font-medium text-gray-800">{faq.question}</h3>
                          <span className="text-brand-purple">
                            {activeQuestions.includes(index) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </span>
                        </div>
                        
                        {activeQuestions.includes(index) && (
                          <div className="p-4 animate-accordion-down">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center scroll-animation">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you with any specific questions about our services or your project.
            </p>
            <Link to="/contact" className="btn btn-primary inline-flex items-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
