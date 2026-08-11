import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-transparent.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_24px_hsl(220_25%_4%/0.5)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            {/* Animated glow halo */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-30 blur-md group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 animate-glow-pulse" />
            <img
              src={logo}
              alt="Primisys Tech"
              className="relative h-9 w-9 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg"
            />
          </div>
          <span className="text-base font-semibold text-foreground tracking-tight">
            Primisys
            <span className="text-primary group-hover:text-cyan-400 transition-colors duration-300">
              Tech
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 group",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {/* Active underline indicator */}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                )}
                {/* Hover background */}
                <span className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            size="sm"
            className="relative overflow-hidden group bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(210_90%_58%/0.4)]"
            asChild
          >
            <Link to="/contact">
              Get Started
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 border-b border-border/30 overflow-hidden transition-all duration-400 ease-in-out",
          isScrolled ? "bg-background/90 backdrop-blur-xl" : "bg-background/95 backdrop-blur-md",
          isMobileMenuOpen ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                location.pathname === link.href
                  ? "text-primary bg-primary/8 border-l-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-3 hover:scale-105 transition-transform duration-200" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
