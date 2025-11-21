import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Workflow, Code, Smartphone, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import serviceImage from "../assets/service.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    {
      icon: Bot,
      title: "AI Tools & Solutions",
      description: "Custom AI models, chatbots, and intelligent automation tailored to your business needs.",
      features: ["Custom GPT Models", "Chatbot Development", "Predictive Analytics", "Natural Language Processing"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
    {
      icon: Workflow,
      title: "Business Automation",
      description: "Streamline operations with intelligent workflows that save time and reduce costs.",
      features: ["Process Automation", "Data Integration", "Workflow Optimization", "RPA Solutions"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "Modern, scalable web apps built with cutting-edge technologies and best practices.",
      features: ["React & Next.js", "Progressive Web Apps", "API Development", "Cloud Architecture"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["React Native", "iOS & Android", "Mobile-First Design", "App Store Deployment"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    },
  ];

  const processSteps = [
    { number: "01", title: "Discovery", description: "We analyze your needs and define project scope" },
    { number: "02", title: "Design", description: "Create mockups and technical architecture" },
    { number: "03", title: "Development", description: "Build your solution with agile methodology" },
    { number: "04", title: "Testing", description: "Rigorous QA and performance optimization" },
    { number: "05", title: "Launch", description: "Deploy and provide ongoing support" },
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
              src={serviceImage}
              alt="Our Services"
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
                <span className="text-xs font-medium text-accent-foreground">What We Offer</span>
              </div>

              {/* Headline with stagger animation */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
                <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                  Our{" "}
                </span>
                <span className="inline-block animate-slide-up opacity-0 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                  Services
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                Transform your business with our comprehensive suite of AI and software development services.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant group px-7 h-12 text-base relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative flex items-center">
                      Start a Project
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary h-12 px-7 text-base backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                    View Our Work
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

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={service.title}
                    className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? "md:grid-flow-dense" : ""}`}
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 100}
                  >
                    <div className={isEven ? "" : "md:col-start-2"}>
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={feature} className="flex items-center gap-3" data-aos="fade-up" data-aos-delay={index * 100 + 300 + featureIndex * 50}>
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact">
                        <Button size="lg" data-aos="fade-up" data-aos-delay={index * 100 + 500}>
                          Get Started
                        </Button>
                      </Link>
                    </div>
                    <div className={isEven ? "" : "md:col-start-1 md:row-start-1"}>
                      <div className="aspect-video rounded-lg overflow-hidden shadow-elegant" data-aos={isEven ? "fade-left" : "fade-right"} data-aos-delay={index * 100 + 100}>
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.number} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2" data-aos="fade-up" data-aos-delay={index * 100 + 50}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground" data-aos="fade-up" data-aos-delay={index * 100 + 100}>{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block w-full h-0.5 bg-border mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-3xl p-10 shadow-elegant" data-aos="zoom-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how we can help transform your business with intelligent software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
                <Link to="/contact">
                  <Button size="lg" className="group px-8 relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative flex items-center">
                      Start a Project
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="px-8">View Our Work</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;