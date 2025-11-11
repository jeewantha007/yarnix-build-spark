import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
            <MessageSquare size={16} className="text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Ready to Start?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant group px-8 h-14 text-lg">
                Start a Conversation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <a href="mailto:hello@yarnixlabs.com">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-accent h-14 px-8 text-lg">
                Email Us Directly
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="text-2xl font-bold">Company A</div>
              <div className="text-2xl font-bold">Company B</div>
              <div className="text-2xl font-bold">Company C</div>
              <div className="text-2xl font-bold">Company D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
