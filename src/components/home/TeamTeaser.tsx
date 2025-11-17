import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import jeewantha from "../../assets/jeewantha.jpg";
const TeamTeaser = () => {
  // Mock data - will be replaced with Supabase data later
  const team = [
    {
      name: "Nirmal Wishwantha",
      role: "CEO & Lead Developer",
      bio: "Full-stack developer with 10+ years building scalable AI solutions",
      image: "/placeholder.svg",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Jeewantha Sandeepa",
      role: "AI/ML Engineer",
      bio: "Machine learning expert specializing in NLP and computer vision",
      image: jeewantha,
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Yasith Nawanjana",
      role: "DevOps & Automation Lead",
      bio: "Infrastructure architect passionate about automation and cloud systems",
      image: "/placeholder.svg",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground">
            Experienced professionals dedicated to building exceptional software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-primary font-medium mb-3 text-sm">{member.role}</div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/about">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-accent group">
              Learn More About Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamTeaser;
