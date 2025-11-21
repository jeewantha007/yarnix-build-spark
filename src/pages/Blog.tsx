import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      slug: "future-ai-business-automation",
      excerpt: "Explore how artificial intelligence is transforming business processes and what it means for the future of work.",
      category: "AI",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Web Apps with React and Supabase",
      slug: "scalable-apps-react-supabase",
      excerpt: "A deep dive into creating production-ready applications using modern web technologies.",
      category: "Development",
      author: "Marcus Rodriguez",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      featured: false,
    },
    {
      id: 3,
      title: "10 Ways AI Can Reduce Operational Costs",
      slug: "ai-reduce-operational-costs",
      excerpt: "Practical strategies for implementing AI to streamline operations and save money.",
      category: "Business",
      author: "Alex Thompson",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      featured: false,
    },
    {
      id: 4,
      title: "Mobile-First Design Principles for 2024",
      slug: "mobile-first-design-2024",
      excerpt: "Essential design patterns and best practices for creating exceptional mobile experiences.",
      category: "Design",
      author: "Marcus Rodriguez",
      date: "2024-01-01",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      featured: false,
    },
    {
      id: 5,
      title: "Understanding Large Language Models",
      slug: "understanding-llms",
      excerpt: "A comprehensive guide to how GPT and similar models work under the hood.",
      category: "AI",
      author: "Sarah Chen",
      date: "2023-12-28",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=800&q=80",
      featured: false,
    },
    {
      id: 6,
      title: "Automating Customer Support with Chatbots",
      slug: "automating-customer-support",
      excerpt: "Case study: How we reduced support tickets by 60% using intelligent chatbots.",
      category: "Automation",
      author: "Alex Thompson",
      date: "2023-12-20",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      featured: false,
    },
  ];

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                data-aos="fade-up"
              >
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blog</span>
              </h1>
              <p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Insights on AI, automation, and software development from our team.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <Link to={`/blog/${featuredPost.slug}`}>
                <div 
                  className="max-w-5xl mx-auto bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 group"
                  data-aos="fade-up"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-video md:aspect-auto overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-4">Featured</Badge>
                      <h2 
                        className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        {featuredPost.title}
                      </h2>
                      <p 
                        className="text-muted-foreground mb-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        {featuredPost.excerpt}
                      </p>
                      <div 
                        className="flex items-center gap-4 text-sm text-muted-foreground"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <span>{featuredPost.author}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <Badge variant="secondary" className="w-fit mb-3">
                        {post.category}
                      </Badge>
                      <h3 
                        className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                        data-aos="fade-up"
                        data-aos-delay={index * 100 + 50}
                      >
                        {post.title}
                      </h3>
                      <p 
                        className="text-muted-foreground mb-4 flex-1"
                        data-aos="fade-up"
                        data-aos-delay={index * 100 + 100}
                      >
                        {post.excerpt}
                      </p>
                      <div 
                        className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border"
                        data-aos="fade-up"
                        data-aos-delay={index * 100 + 150}
                      >
                        <span>{post.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;