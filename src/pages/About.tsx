import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Zap, Users, Github, Linkedin } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to building software that solves real problems and creates lasting value.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of the curve, leveraging the latest AI and tech to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We partner closely to ensure every project exceeds expectations.",
    },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & Lead Engineer",
      bio: "10+ years building scalable systems. Passionate about AI and automation. Former tech lead at major SaaS companies.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sarah Chen",
      role: "AI/ML Specialist",
      bio: "PhD in Machine Learning. Expert in NLP and computer vision. Published researcher with 15+ papers in top conferences.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      bio: "5 years crafting beautiful, performant web and mobile apps. Loves React, TypeScript, and pixel-perfect UIs.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Yarnix Labs</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A small but mighty team of engineers building intelligent software that scales.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Yarnix Labs was founded in 2021 with a simple mission: build software that makes businesses smarter and more efficient. What started as a small consultancy has grown into a trusted partner for companies looking to harness the power of AI and automation.
                </p>
                <p>
                  We've delivered 50+ projects across industries—from e-commerce to healthcare—helping our clients save time, reduce costs, and unlock new opportunities. Our team combines deep technical expertise with a genuine passion for problem-solving.
                </p>
                <p>
                  Today, we're at the forefront of the AI revolution, building custom tools and platforms that turn data into decisions and automate the mundane so our clients can focus on what matters most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
              <p className="text-lg text-muted-foreground">
                The talented people behind Yarnix Labs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Want to Work With Us?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're always excited to take on new challenges and build amazing things together.
              </p>
              <Link to="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
