import { Brain, Zap, Code, Puzzle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Tools",
      description: "Custom AI solutions powered by cutting-edge machine learning models to automate and enhance your workflows.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline operations with intelligent automation that saves time and reduces human error.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Code,
      title: "Web & Mobile Apps",
      description: "Beautiful, responsive applications built with modern frameworks for exceptional user experiences.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Puzzle,
      title: "Custom Solutions",
      description: "Tailored software designed specifically for your unique business challenges and goals.",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
