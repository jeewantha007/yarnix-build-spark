import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchProjects } from "@/services/api";
import type { Project } from "@/services/api";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const projectData = await fetchProjects();
        // Get only the first 3 projects for the featured section
        setProjects(projectData.slice(0, 3));
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our latest work and see how we transform ideas into reality
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden border-none shadow-card h-full">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded mb-3 w-1/3"></div>
                  <div className="h-6 bg-muted rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-muted rounded mb-4 w-full"></div>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-4 bg-muted rounded w-1/4"></div>
                    <div className="h-4 bg-muted rounded w-1/3"></div>
                    <div className="h-4 bg-muted rounded w-1/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our latest work and see how we transform ideas into reality
              </p>
            </div>
          </div>
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          data-aos="fade-up"
        >
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our latest work and see how we transform ideas into reality
            </p>
          </div>
          <Link to="/projects" className="hidden md:block">
            <Button 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-accent group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="overflow-hidden border-none shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-muted-foreground">No image</div>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ExternalLink className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="tech-badge mb-3">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.tagline}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-mono"
                        data-aos="fade-up"
                        data-aos-delay={index * 100 + i * 50}
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

        <div 
          className="text-center md:hidden"
          data-aos="fade-up"
        >
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