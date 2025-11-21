import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fetchProjectBySlug } from "@/services/api";
import type { Project } from "@/services/api";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const projectData = await fetchProjectBySlug(slug);
        if (projectData) {
          setProject(projectData);
        } else {
          setError("Project not found");
        }
      } catch (err) {
        setError("Failed to load project");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4">Loading project...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Retry
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
          {project.image && (
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
            </div>
          )}
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                {project.title}
              </h1>
              
              {project.tagline && (
                <p className="text-xl text-muted-foreground mb-6">
                  {project.tagline}
                </p>
              )}
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                {project.demo_url && (
                  <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                    <Button className="group">
                      <span>View Demo</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                )}
                
                {project.github_url && (
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="group">
                      <Github className="w-4 h-4 mr-2" />
                      <span>GitHub</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/projects" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              
              <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
                <div 
                  className="project-content"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between pt-8 border-t border-border">
                <Link to="/projects">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                  </Button>
                </Link>
                
                <div className="flex gap-3">
                  {project.demo_url && (
                    <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                      <Button className="group">
                        <span>View Demo</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  )}
                  
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="group">
                        <Github className="w-4 h-4 mr-2" />
                        <span>GitHub</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;