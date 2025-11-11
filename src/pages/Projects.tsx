import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Projects = () => {
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
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our portfolio of AI-powered solutions that drive real business results.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="tech-badge"
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
