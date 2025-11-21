import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Workflow, Code, Smartphone, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                data-aos="fade-up"
              >
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
              </h1>
              <p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Transform your business with our comprehensive suite of AI and software development services.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
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
                      <h2 
                        className="text-3xl font-bold mb-4"
                        data-aos="fade-up"
                        data-aos-delay={index * 100 + 100}
                      >
                        {service.title}
                      </h2>
                      <p 
                        className="text-lg text-muted-foreground mb-6"
                        data-aos="fade-up"
                        data-aos-delay={index * 100 + 200}
                      >
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={feature} 
                            className="flex items-center gap-3"
                            data-aos="fade-up"
                            data-aos-delay={index * 100 + 300 + featureIndex * 50}
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact">
                        <Button 
                          size="lg"
                          data-aos="fade-up"
                          data-aos-delay={index * 100 + 500}
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                    <div className={isEven ? "" : "md:col-start-1 md:row-start-1"}>
                      <div 
                        className="aspect-video rounded-lg overflow-hidden shadow-elegant"
                        data-aos={isEven ? "fade-left" : "fade-right"}
                        data-aos-delay={index * 100 + 100}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                Our Process
              </h2>
              <p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 
                    className="text-xl font-bold mb-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 50}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 100}
                  >
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block w-full h-0.5 bg-border mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div 
              className="max-w-3xl mx-auto text-center bg-card border border-border rounded-3xl p-12 shadow-elegant"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p 
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Let's discuss how we can help transform your business with intelligent software solutions.
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link to="/contact">
                  <Button size="lg" className="px-8">Start a Project</Button>
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