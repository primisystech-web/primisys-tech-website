import { ArrowRight, Code2, Brain, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from "@/components/TypewriterText";
import logo from "@/assets/logo.jpeg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo with glow */}
          <div className="mb-8 inline-block opacity-0 animate-fade-in">
            <div className="relative">
              <img
                src={logo}
                alt="Primisys Tech"
                className="w-24 h-24 mx-auto rounded-2xl object-cover animate-float-slow"
              />
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-2xl bg-primary/30 blur-2xl animate-pulse-glow" />
              {/* Circuit lines emanating from logo */}
              <svg
                className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)]"
                viewBox="0 0 160 160"
              >
                <defs>
                  <linearGradient id="hero-circuit" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(190 100% 50%)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(190 100% 50%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Top line */}
                <path
                  d="M80 40 L80 10"
                  stroke="url(#hero-circuit)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-draw-line"
                />
                {/* Right line */}
                <path
                  d="M120 80 L150 80"
                  stroke="url(#hero-circuit)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-draw-line animation-delay-200"
                />
                {/* Bottom line */}
                <path
                  d="M80 120 L80 150"
                  stroke="url(#hero-circuit)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-draw-line animation-delay-400"
                />
                {/* Left line */}
                <path
                  d="M40 80 L10 80"
                  stroke="url(#hero-circuit)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-draw-line animation-delay-600"
                />
              </svg>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in animation-delay-200">
            <span className="text-foreground">Building </span>
            <span className="gradient-text text-glow">Tomorrow's</span>
            <br />
            <span className="text-foreground">Technology </span>
            <span className="text-primary">Today</span>
          </h1>

          {/* Typewriter tagline */}
          <div className="h-8 mb-8 opacity-0 animate-fade-in animation-delay-400">
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              <TypewriterText
                text="Innovative Solutions • Cutting-Edge Development • AI-Powered Future"
                delay={1500}
                speed={40}
              />
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-600">
            We transform businesses through intelligent software solutions, 
            leveraging AI, data analytics, and modern development practices 
            to drive innovation and growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in animation-delay-800">
            <Button variant="hero" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="circuit" size="xl">
              Explore Our Work
            </Button>
          </div>

          {/* Service highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-1000">
            {[
              { icon: Code2, label: "Software Development" },
              { icon: Brain, label: "AI & Data Solutions" },
              { icon: Settings, label: "IT Consulting" },
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 cursor-pointer group"
              >
                <service.icon className="w-5 h-5 text-primary group-hover:text-glow-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1000">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;