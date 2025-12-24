import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 animate-fade-in text-foreground">
            Building Tomorrow's
            <br />
            <span className="text-primary">Technology Today</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-100">
            We transform businesses through intelligent software solutions, 
            leveraging AI, data analytics, and modern development practices 
            to drive innovation and growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-200">
            <Button size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              Explore Our Work
            </Button>
          </div>

          {/* Service tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-16 opacity-0 animate-fade-in animation-delay-300">
            {["Software Development", "AI & Data Solutions", "IT Consulting"].map((service) => (
              <span
                key={service}
                className="px-4 py-2 text-sm text-muted-foreground bg-muted/50 rounded-md border border-border"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
