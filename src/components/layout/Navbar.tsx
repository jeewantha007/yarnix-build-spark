import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-emerald-500/10 shadow-lg shadow-emerald-500/5"
          : "bg-gradient-to-b from-slate-900/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-lg group-hover:bg-emerald-500/30 transition-all duration-300" />
              <img
                src={logo}
                alt="Yarnix Labs"
                className="relative h-10 w-10 md:h-12 md:w-12 object-contain rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                Yarnix Lab
              </span>
              <span className="text-[10px] md:text-xs text-slate-400 tracking-widest uppercase hidden sm:block">
                Innovation Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === link.to
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover background */}
                <span className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 rounded-lg transition-all duration-300" />
                {/* Active indicator */}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button & Dark Mode */}
          <div className="hidden md:flex items-center gap-3">
            <DarkModeToggle />
            <Link to="/contact">
              <Button className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 group">
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-white rounded-lg hover:bg-emerald-500/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-6 h-6">
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                }`}
              />
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-emerald-500/10 bg-slate-900/95 backdrop-blur-xl rounded-b-2xl">
            <div className="flex flex-col gap-1 px-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                  <ChevronRight
                    size={16}
                    className={location.pathname === link.to ? "text-emerald-400" : "text-slate-500"}
                  />
                </Link>
              ))}
              
              <div className="mt-4 px-2 pb-2">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-500/25">
                    <span className="flex items-center justify-center gap-2">
                      Start a Project
                      <ChevronRight size={16} />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;