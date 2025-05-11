
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ChevronRight } from 'lucide-react';

const featuredArticle = {
  title: "The Future of Web Development in 2025",
  description: "Discover the emerging trends and technologies that will shape the web development landscape in the coming year.",
  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  date: "May 15, 2025",
  author: "Alex Johnson",
  category: "Design Trends",
  slug: "future-web-development-2025"
};

const articles = [
  {
    title: "How AI is Transforming UI/UX Design",
    description: "Explore how artificial intelligence is revolutionizing the way designers create user experiences.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "May 10, 2025",
    author: "Sarah Miller",
    category: "Design Trends",
    slug: "ai-transforming-uiux-design"
  },
  {
    title: "The Rise of Headless CMS Systems",
    description: "Why more companies are adopting headless CMS architectures for their content management needs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: "May 5, 2025",
    author: "David Wilson",
    category: "Tech Innovations",
    slug: "rise-of-headless-cms"
  },
  {
    title: "Essential SEO Strategies for 2025",
    description: "Stay ahead of the competition with these proven SEO techniques for improving visibility.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "April 28, 2025",
    author: "Emily Chang",
    category: "Marketing Strategies",
    slug: "essential-seo-strategies-2025"
  },
  {
    title: "Why Design Systems Matter for Scaling Businesses",
    description: "How implementing a robust design system can help your business grow efficiently.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "April 22, 2025",
    author: "Michael Brown",
    category: "Design Trends",
    slug: "design-systems-scaling-businesses"
  },
  {
    title: "The Psychology of Color in Digital Marketing",
    description: "Understanding how color choices influence user behavior and conversion rates.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    date: "April 15, 2025",
    author: "Jennifer Lee",
    category: "Marketing Strategies",
    slug: "psychology-color-digital-marketing"
  },
  {
    title: "Serverless Architecture: Benefits and Challenges",
    description: "Weighing the pros and cons of adopting serverless architecture for your next project.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    date: "April 8, 2025",
    author: "Robert Martinez",
    category: "Tech Innovations",
    slug: "serverless-architecture-benefits-challenges"
  }
];

const categories = [
  "All Posts",
  "Design Trends",
  "Tech Innovations",
  "Marketing Strategies",
  "Case Studies",
  "Company News"
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState("All Posts");
  const [filteredArticles, setFilteredArticles] = React.useState(articles);

  React.useEffect(() => {
    if (activeCategory === "All Posts") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-brand-purple-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-200">Insights, Trends and Strategies in Digital Innovation</p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 scroll-animation">Featured Article</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animation">
            <div className="rounded-xl overflow-hidden shadow-lg parallax-container h-[400px] relative">
              <div 
                className="absolute inset-0 parallax-element" 
                data-depth="0.2"
                style={{
                  backgroundImage: `url(${featuredArticle.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '120%',
                  width: '120%',
                  top: '-10%',
                  left: '-10%'
                }}
              ></div>
            </div>
            
            <div>
              <span className="inline-block bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium mb-4">
                {featuredArticle.category}
              </span>
              <h3 className="text-3xl font-bold mb-4">{featuredArticle.title}</h3>
              <p className="text-lg text-gray-600 mb-6">{featuredArticle.description}</p>
              <div className="flex items-center text-gray-500 mb-6">
                <div className="flex items-center mr-6">
                  <Calendar size={16} className="mr-2" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{featuredArticle.author}</span>
                </div>
              </div>
              <Link to={`/blog/${featuredArticle.slug}`} className="btn btn-primary inline-flex items-center">
                Read Article <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category 
                    ? 'bg-brand-purple text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow scroll-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-6">{article.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <Link to={`/blog/${article.slug}`} className="text-brand-purple hover:text-brand-purple-dark font-medium text-sm inline-flex items-center">
                      Read More <ChevronRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center scroll-animation">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest articles and insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
