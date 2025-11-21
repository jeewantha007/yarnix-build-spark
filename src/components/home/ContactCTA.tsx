import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className="inline-flex items-center space-x-2 bg-accent/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20"
            data-aos="fade-up"
          >
            <MessageSquare size={16} className="text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Ready to Start?</span>
          </div>

          <h2 
            className="text-3xl md:text-5xl font-bold mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help bring your vision to life.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant group px-7 h-12 text-base relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center">
                  Start a Conversation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </Button>
            </Link>
            <a href="mailto:hello@yarnixlabs.com">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-accent h-12 px-7 text-base"
              >
                Email Us Directly
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div 
            className="pt-8 border-t border-border"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="text-xl font-bold">Company A</div>
              <div className="text-xl font-bold">Company B</div>
              <div className="text-xl font-bold">Company C</div>
              <div className="text-xl font-bold">Company D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;