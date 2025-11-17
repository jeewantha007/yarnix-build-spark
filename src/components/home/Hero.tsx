import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slower, more cinematic playback
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src="https://waedqmdlaupiusiqzipg.supabase.co/storage/v1/object/public/post-videos/yarnix-hero-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Video Overlay Gradient */}
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
            <span className="text-xs font-medium text-accent-foreground">AI-Powered Solutions</span>
          </div>

          {/* Headline with stagger animation - More readable sizes */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
            <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              We Build{" "}
            </span>
            <span className="inline-block animate-slide-up opacity-0 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Intelligent Software
            </span>{" "}
            <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              That Scales
            </span>
          </h1>

          {/* Subheadline - Reduced size */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Transform your business with custom AI tools, automation solutions, and cutting-edge web & mobile applications.
          </p>

          {/* CTAs with enhanced hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0 mb-16" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
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

          {/* Stats with counter animation - Smaller, cleaner */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Expert Team</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-background/10">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes grid-flow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(60px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s linear infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;