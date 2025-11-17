import { Brain, Zap, Code, Puzzle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Brain,
      title: "AI Tools",
      description: "Custom AI solutions powered by cutting-edge machine learning models to automate and enhance your workflows.",
      gradient: "from-primary to-secondary",
      particles: 8,
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline operations with intelligent automation that saves time and reduces human error.",
      gradient: "from-secondary to-primary",
      particles: 6,
    },
    {
      icon: Code,
      title: "Web & Mobile Apps",
      description: "Beautiful, responsive applications built with modern frameworks for exceptional user experiences.",
      gradient: "from-primary to-accent",
      particles: 7,
    },
    {
      icon: Puzzle,
      title: "Custom Solutions",
      description: "Tailored software designed specifically for your unique business challenges and goals.",
      gradient: "from-accent to-primary",
      particles: 9,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            What We Do{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Best
            </span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-card-hover transition-all duration-500 group hover:-translate-y-2 animate-fade-in bg-background/80 backdrop-blur-sm relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Border glow */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

              {/* Animated particles */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(feature.particles)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full animate-particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 0.5}s`,
                        animationDuration: `${1 + Math.random()}s`,
                      }}
                    ></div>
                  ))}
                </div>
              )}

              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <CardContent className="p-6 relative z-10">
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <feature.icon className="text-white" size={28} />
                  </div>
                  {/* Icon glow */}
                  <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom line indicator */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-32 h-32 border-2 border-primary/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-24 h-24 border-2 border-secondary/10 rounded-full animate-spin-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes particle {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx, 20px), var(--ty, -40px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-particle {
          animation: particle linear forwards;
          --tx: ${Math.random() * 40 - 20}px;
          --ty: ${Math.random() * -60 - 20}px;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;