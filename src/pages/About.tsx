import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Zap, Users, Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import jeewantha from "../assets/jeewantha.jpg";
import aboutImage from "../assets/About.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're committed to building software solutions that solve real problems and create lasting value for our clients.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We stay ahead of the curve, leveraging the latest AI and automation technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your success is our success. We partner closely to ensure every project exceeds expectations.",
    },
  ];

  const team = [
    {
      name: "Nirmal Wishwantha",
      role: "Co-Founder & Technical Lead",
      bio: "Innovative full-stack developer and technology strategist, experienced in designing and delivering modern digital products. Skilled at solving complex technical challenges and leading high-performing development teams.",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
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
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section - Full Screen with Image Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* Image Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={aboutImage}
              alt="About Yarnix Labs"
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
                <span className="text-xs font-medium text-accent-foreground">About Us</span>
              </div>

              {/* Headline with stagger animation */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
                <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                  About{" "}
                </span>
                <span className="inline-block animate-slide-up opacity-0 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                  Yarnix Labs
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                A small but mighty team of engineers building intelligent software that scales.
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

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Decorative */}
                <div className="relative hidden md:block" data-aos="fade-right">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
                    <div className="relative bg-card border border-border rounded-3xl p-6 shadow-elegant">
                      <div className="space-y-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Target className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-xl">2025</div>
                            <div className="text-sm text-muted-foreground">Founded</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-xl">50+</div>
                            <div className="text-sm text-muted-foreground">Projects</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Zap className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-xl">100%</div>
                            <div className="text-sm text-muted-foreground">Satisfaction</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div data-aos="fade-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Story</h2>
                  <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
                    <p>
                      Yarnix was founded in 2025 by three passionate technologists who saw an opportunity to help businesses transform through intelligent software solutions. What started as a vision has quickly grown into a dynamic company delivering cutting-edge solutions across multiple domains.
                    </p>
                    <p>
                      We specialize in AI tools, automation solutions, full-stack development, UI/UX design, mobile applications, and web platforms. Our comprehensive approach means we can handle projects from concept to deployment, ensuring seamless integration and exceptional results.
                    </p>
                    <p>
                      Whether you need a custom AI tool to unlock insights from your data, an automation system to streamline operations, a beautiful mobile app, or a scalable web application, we have the expertise to bring your vision to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" data-aos="fade-up">Our Values</h2>
              <p className="text-base text-muted-foreground" data-aos="fade-up" data-aos-delay="100">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="bg-card border border-border rounded-2xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" data-aos="fade-up">Meet the Team</h2>
              <p className="text-base text-muted-foreground" data-aos="fade-up" data-aos-delay="100">The talented people behind Yarnix Labs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div key={member.name} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="aspect-square overflow-hidden relative">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex gap-2">
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-3xl p-10 shadow-elegant" data-aos="zoom-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Want to Work With Us?</h2>
              <p className="text-base text-muted-foreground mb-7 max-w-2xl mx-auto leading-relaxed">We're always excited to take on new challenges and build amazing things together.</p>
              <Link to="/contact">
                <Button size="lg" className="group px-7 h-12 text-base relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative flex items-center">
                    Get in Touch
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </Button>
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