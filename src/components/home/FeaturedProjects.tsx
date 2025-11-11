import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const FeaturedProjects = () => {
  // Mock data - will be replaced with Supabase data later
  const projects = [
    {
      slug: "ai-content-generator",
      title: "AI Content Generator",
      category: "AI Tools",
      tagline: "Transform ideas into engaging content instantly",
      image: "/placeholder.svg",
      technologies: ["OpenAI", "React", "Node.js"],
    },
    {
      slug: "workflow-automation",
      title: "Workflow Automation Suite",
      category: "Automation",
      tagline: "Streamline business operations with intelligent automation",
      image: "/placeholder.svg",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
    },
    {
      slug: "mobile-banking-app",
      title: "Mobile Banking App",
      category: "Mobile Apps",
      tagline: "Secure, intuitive banking at your fingertips",
      image: "/placeholder.svg",
      technologies: ["React Native", "TypeScript", "Firebase"],
    },
    {
      slug: "ecommerce-platform",
      title: "E-Commerce Platform",
      category: "Web Apps",
      tagline: "Next-generation online shopping experience",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Stripe", "Tailwind"],
    },
    {
      slug: "data-analytics-dashboard",
      title: "Data Analytics Dashboard",
      category: "AI Tools",
      tagline: "Real-time insights for data-driven decisions",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "Python"],
    },
    {
      slug: "chatbot-platform",
      title: "AI Chatbot Platform",
      category: "AI Tools",
      tagline: "Intelligent customer support automation",
      image: "/placeholder.svg",
      technologies: ["GPT-4", "WebSocket", "Redis"],
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our latest work and see how we transform ideas into reality
            </p>
          </div>
          <Link to="/projects" className="hidden md:block">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-accent group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group"
            >
              <Card className="overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-300 h-full animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ExternalLink className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="tech-badge mb-3">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Link to="/projects">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-accent group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
