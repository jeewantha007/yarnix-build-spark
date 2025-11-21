import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import projectsImage from "../assets/projects.jpg";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "AI Tools", "Automation", "Web Apps", "Mobile Apps"];

  const projects = [
    {
      id: 1,
      title: "AI Customer Support Bot",
      slug: "ai-customer-support-bot",
      category: "AI Tools",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      tagline: "Intelligent chatbot reducing support tickets by 60%",
      tags: ["GPT-4", "React", "Node.js"],
    },
    {
      id: 2,
      title: "Inventory Automation System",
      slug: "inventory-automation",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      tagline: "Smart warehouse management with predictive restocking",
      tags: ["Python", "TensorFlow", "PostgreSQL"],
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      slug: "ecommerce-platform",
      category: "Web Apps",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tagline: "Scalable online store with AI recommendations",
      tags: ["Next.js", "Stripe", "Tailwind"],
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      slug: "fitness-tracker",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
      tagline: "AI-powered workout and nutrition planning",
      tags: ["React Native", "Firebase", "ML Kit"],
    },
    {
      id: 5,
      title: "Document Processing Pipeline",
      slug: "document-processing",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      tagline: "OCR and NLP for automated data extraction",
      tags: ["Python", "Tesseract", "spaCy"],
    },
    {
      id: 6,
      title: "Real Estate Portal",
      slug: "real-estate-portal",
      category: "Web Apps",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      tagline: "Property listings with virtual tours and AI matching",
      tags: ["React", "Supabase", "Three.js"],
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section - Reduced Height with Image Background */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Image Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={projectsImage}
              alt="Our Projects"
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
                <span className="text-xs font-medium text-accent-foreground">Our Portfolio</span>
              </div>

              {/* Headline with stagger animation */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
                <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                  Our{" "}
                </span>
                <span className="inline-block animate-slide-up opacity-0 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                  Projects
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                Explore our portfolio of AI-powered solutions that drive real business results.
              </p>

              {/* CTA Button */}
              <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant group px-7 h-12 text-base relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative flex items-center">
                      Start Your Project
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

        {/* Filter Bar */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className="rounded-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors" data-aos="fade-up" data-aos-delay={index * 100 + 50}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                        {project.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className="tech-badge"
                            data-aos="fade-up"
                            data-aos-delay={index * 100 + 150 + tagIndex * 30}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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

export default Projects;