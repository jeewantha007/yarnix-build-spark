import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import contactImage from "../assets/contactUs.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Image Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={contactImage}
              alt="Contact Us"
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
                <Mail className="text-primary animate-pulse" size={14} />
                <span className="text-xs font-medium text-accent-foreground">Get in Touch</span>
              </div>

              {/* Headline with stagger animation */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
                <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                  Let's Build{" "}
                </span>
                <span className="inline-block animate-slide-up opacity-0 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                  Something
                </span>{" "}
                <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                  Amazing
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help bring your vision to life.
              </p>

              {/* CTA Button */}
              <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
                <a href="#contact-form">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant group px-7 h-12 text-base relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative flex items-center">
                      Start a Conversation
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                  </Button>
                </a>
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

        {/* Contact Content */}
        <section className="py-16" id="contact-form">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-border" data-aos="fade-right">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this regarding?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full group" data-aos="fade-up" data-aos-delay="500">
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6" data-aos="fade-left">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary transition-colors" data-aos="fade-left" data-aos-delay="100">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground">hello@yarnixlabs.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary transition-colors" data-aos="fade-left" data-aos-delay="200">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary transition-colors" data-aos="fade-left" data-aos-delay="300">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">123 Innovation Street</p>
                      <p className="text-muted-foreground">Tech City, TC 10001</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12" data-aos="fade-left" data-aos-delay="400">
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
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

export default Contact;