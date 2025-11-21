import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import jeewantha from "../../assets/jeewantha.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamTeaser = () => {
  // Mock data - will be replaced with Supabase data later
  const team = [
    {
      name: "Nirmal Wishwantha",
      role: "Co-Founder & Technical Lead",
      bio: "Innovative full-stack developer and technology strategist, experienced in designing and delivering modern digital products. Skilled at solving complex technical challenges and leading high-performing development teams.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Jeewantha Sandeepa",
      role: "Co-Founder & DevOps Engineer",
      bio: "Experienced DevOps engineer and cloud specialist, adept at building scalable, automated, and reliable systems. Passionate about streamlining development workflows and delivering impactful software solutions.",
      photo: jeewantha,
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Yasith Nawanjana",
      role: "Co-Founder & AI/ML Engineer",
      bio: "Creative AI and machine learning engineer with expertise in automation, mobile app development, and end-to-end product delivery. Driven by innovation and committed to solving real-world challenges with intelligent solutions.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            data-aos="fade-up"
          >
            Meet the Team
          </h2>
          <p 
            className="text-base text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            The talented people behind Yarnix Labs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-card-hover transition-all duration-500 group hover:-translate-y-2 bg-background overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
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