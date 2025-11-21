import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import blogImage from "../assets/blogs.jpg";

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
      <main>
        {/* Hero Section - Reduced Height with Image Background */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Image Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={blogImage}
              alt="Our Blog"
              className="w-full h-full object-cover opacity-50"
            />
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 z-[1]">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  opacity: 0.3 + Math.random() * 0.4,
                }}
              ></div>
            ))}
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-flow"></div>

          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow z-[1]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow z-[1]" style={{ animationDelay: "1s" }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge with shimmer effect */}
              <div className="inline-flex items-center space-x-2 bg-accent/80 backdrop-blur-sm px-5 py-2 rounded-full mb-6 animate-fade-in border border-primary/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Sparkles size={14} className="text-primary animate-pulse" />
                <span className="text-xs font-medium text-accent-foreground">Insights & Articles</span>
              </div>

              {/* Headline with stagger animation */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
                <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                  Our{" "}
                </span>
                <span className="inline-block animate-slide-up opacity-0 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                  Blog
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                Insights on AI, automation, and software development from our team.
              </p>

              {/* CTA Button */}
              <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant group px-7 h-12 text-base relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative flex items-center">
                      Get in Touch
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-background/10">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0) translateX(0); }
              50% { transform: translateY(-20px) translateX(10px); }
            }
            @keyframes grid-flow {
              0% { transform: translateY(0); }
              100% { transform: translateY(60px); }
            }
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.5; transform: scale(1.1); }
            }
            @keyframes gradient {
              0% { background-position: 0% center; }
              100% { background-position: 200% center; }
            }
            .animate-float { animation: float linear infinite; }
            .animate-grid-flow { animation: grid-flow 20s linear infinite; }
            .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
            .animate-gradient { animation: gradient 3s linear infinite; }
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slide-up {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
            .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
          `}</style>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <Link to={`/blog/${featuredPost.slug}`}>
                <div className="max-w-5xl mx-auto bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 group" data-aos="fade-up">
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
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors" data-aos="fade-up" data-aos-delay="100">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6" data-aos="fade-up" data-aos-delay="200">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground" data-aos="fade-up" data-aos-delay="300">
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
        <section className="py-16">
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
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors" data-aos="fade-up" data-aos-delay={index * 100 + 50}>
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border" data-aos="fade-up" data-aos-delay={index * 100 + 150}>
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