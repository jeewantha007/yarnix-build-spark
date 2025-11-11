import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TeamTeaser from "@/components/home/TeamTeaser";
import ContactCTA from "@/components/home/ContactCTA";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeaturedProjects />
        <TeamTeaser />
        <ContactCTA />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
