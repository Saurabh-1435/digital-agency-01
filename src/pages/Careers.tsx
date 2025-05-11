
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Award, ArrowRight, Coffee, Lightbulb, Zap, Upload } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced frontend developer with strong React skills to join our team.",
    requirements: [
      "5+ years of experience in frontend development",
      "Deep knowledge of React, TypeScript, and modern JS ecosystem",
      "Experience with state management (Redux, Context API)",
      "Strong understanding of responsive design principles",
      "Good eye for design and attention to detail"
    ]
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    description: "Help us create beautiful, user-friendly experiences that delight our clients and their users.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with design tools like Figma, Adobe XD",
      "Experience creating wireframes, prototypes, and user flows",
      "Understanding of usability principles and accessibility standards",
      "Portfolio showcasing your design process and solutions"
    ]
  },
  {
    title: "Backend Developer",
    department: "Engineering",
    location: "On-site",
    type: "Full-time",
    description: "Build robust, scalable backend systems that power our client applications.",
    requirements: [
      "4+ years of experience in backend development",
      "Proficiency with Node.js, Express, and databases",
      "Experience with RESTful APIs and microservices architecture",
      "Knowledge of cloud services (AWS, Azure, or GCP)",
      "Understanding of security best practices"
    ]
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive growth strategies for our clients through innovative digital marketing campaigns.",
    requirements: [
      "3+ years of experience in digital marketing",
      "Expertise in SEO, PPC, and social media marketing",
      "Experience with analytics tools and data-driven decision making",
      "Strong copywriting and content creation skills",
      "Knowledge of marketing automation tools"
    ]
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "Hybrid",
    type: "Full-time",
    description: "Oversee digital projects from conception to completion, ensuring they're delivered on time and on budget.",
    requirements: [
      "5+ years of experience in project management",
      "Strong understanding of agile methodologies",
      "Excellent communication and client relationship skills",
      "Experience with project management tools",
      "Ability to manage multiple projects simultaneously"
    ]
  }
];

// Culture Photos
const culturePhotos = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  "https://images.unsplash.com/photo-1552664730-d307ca884978",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902"
];

const Careers = () => {
  const { toast } = useToast();
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('All');
  const [filterBy, setFilterBy] = useState<null | string>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      
      // Reset form
      setApplicationForm({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: ''
      });
      setUploadedFile(null);
      
      // Close job description
      setActiveJob(null);
    }, 1500);
  };

  // Filter jobs based on active tab
  const filteredJobs = React.useMemo(() => {
    if (activeTab === 'All') return jobOpenings;
    return jobOpenings.filter(job => job.department === activeTab);
  }, [activeTab]);

  // Get unique departments for tabs
  const departments = ['All', ...Array.from(new Set(jobOpenings.map(job => job.department)))];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-brand-purple-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-200">Be part of an innovative team passionate about creating digital excellence</p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
            <p className="text-lg text-gray-600">
              At SHILPKAR, we foster a culture of creativity, collaboration, and continuous learning. We believe in empowering our team members to innovate and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="grid grid-cols-2 gap-4 scroll-animation">
              {culturePhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden shadow-lg ${index === 0 ? 'col-span-2' : ''}`}
                >
                  <img 
                    src={photo} 
                    alt="Company Culture" 
                    className="w-full h-full object-cover"
                    style={{ height: index === 0 ? '300px' : '200px' }}
                  />
                </div>
              ))}
            </div>
            
            <div className="flex flex-col justify-center scroll-animation">
              <h3 className="text-2xl font-bold mb-6">Why Join Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mr-4 shrink-0">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Work-Life Balance</h4>
                    <p className="text-gray-600">
                      We respect your time and encourage a healthy balance between work and personal life.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mr-4 shrink-0">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Continuous Learning</h4>
                    <p className="text-gray-600">
                      We invest in your growth with learning resources, workshops, and conferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mr-4 shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Innovative Projects</h4>
                    <p className="text-gray-600">
                      Work on challenging projects that push boundaries and make a real impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animation">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Check out our current openings below.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === dept 
                    ? 'bg-brand-purple text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
          
          {/* Job Listings */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden scroll-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Job Header */}
                  <div className="p-6 flex flex-col md:flex-row justify-between md:items-center">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <span className="inline-block bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium mr-2">
                          {job.department}
                        </span>
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-gray-500 flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </p>
                    </div>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setActiveJob(activeJob === index ? null : index)}
                    >
                      {activeJob === index ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                  
                  {/* Job Details */}
                  {activeJob === index && (
                    <div className="border-t border-gray-200 p-6 animate-accordion-down">
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-2">Job Description</h4>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-2">Requirements</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4">
                        <h4 className="font-semibold text-lg mb-4">Apply for this position</h4>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
                                Full Name
                              </label>
                              <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={applicationForm.fullName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                                Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={applicationForm.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={applicationForm.phone}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="position" className="block text-gray-700 font-medium mb-1">
                                Position
                              </label>
                              <input
                                type="text"
                                id="position"
                                name="position"
                                value={job.title}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="resume" className="block text-gray-700 font-medium mb-1">
                              Resume/CV
                            </label>
                            <div className="flex items-center justify-center w-full">
                              <label
                                htmlFor="resume"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                              >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Upload className="w-8 h-8 mb-3 text-gray-400" />
                                  <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    PDF, DOCX or RTF (Max 5MB)
                                  </p>
                                </div>
                                <input 
                                  id="resume" 
                                  type="file" 
                                  className="hidden"
                                  accept=".pdf,.docx,.rtf"
                                  onChange={handleFileChange}
                                  required 
                                />
                              </label>
                            </div>
                            {uploadedFile && (
                              <p className="text-sm text-gray-600 mt-2">
                                Selected file: {uploadedFile.name}
                              </p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-1">
                              Cover Letter (Optional)
                            </label>
                            <textarea
                              id="coverLetter"
                              name="coverLetter"
                              value={applicationForm.coverLetter}
                              onChange={handleInputChange}
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                              placeholder="Tell us why you're the perfect fit for this role..."
                            ></textarea>
                          </div>
                          
                          <div className="flex justify-end">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="btn btn-primary"
                            >
                              {isSubmitting ? (
                                <span className="flex items-center">
                                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Submitting...
                                </span>
                              ) : 'Submit Application'}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No open positions in this department at the moment.</p>
                <p className="text-gray-600 mt-2">
                  Please check back later or send your resume to{' '}
                  <a href="mailto:careers@shilpkar.com" className="text-brand-purple hover:underline">
                    careers@shilpkar.com
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Open Application */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center scroll-animation">
            <h2 className="text-3xl font-bold mb-6">Don't See a Perfect Fit?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always interested in connecting with talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link to="/contact" className="btn btn-secondary inline-flex items-center">
              Send Open Application <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
