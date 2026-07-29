import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface LogoScrollRevealProps {
  width?: number;
  fps?: number;
}

const LogoScrollReveal = ({ width = 280 }: LogoScrollRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textContent = textContentRef.current;
    const glow = glowRef.current;

    if (!section || !textContent || !glow) return;

    const ctx = gsap.context(() => {
      const scrollTriggerConfig = {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
      };

      // ── DESKTOP (Text on LEFT, starts very small, zooms in on scroll) ──
      gsap.matchMedia().add("(min-width: 768px)", () => {
        gsap.set(textContent, {
          opacity: 0.15,
          scale: 0.18,
          filter: "blur(10px)",
          transformOrigin: "left center",
        });
        gsap.set(glow, { opacity: 0.05, scale: 0.2 });

        const tl = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

        // Phase 1: Text zooms in from very small on scroll (synced with logo on right)
        tl.to(
          textContent,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          0
        ).to(
          glow,
          { opacity: 0.7, scale: 1.1, duration: 1, ease: "power2.out" },
          0
        );

        // Phase 2: Hold State for reading
        tl.to({}, { duration: 2 });

        // Phase 3: Exit — shrink back as user scrolls past hero
        tl.to(
          textContent,
          {
            opacity: 0.15,
            scale: 0.18,
            filter: "blur(10px)",
            duration: 1,
            ease: "power2.inOut",
          },
          3
        ).to(
          glow,
          { opacity: 0.05, scale: 0.2, duration: 1, ease: "power2.inOut" },
          3
        );
      });

      // ── MOBILE ──
      gsap.matchMedia().add("(max-width: 767px)", () => {
        gsap.set(textContent, {
          opacity: 0.15,
          scale: 0.2,
          filter: "blur(8px)",
          transformOrigin: "center",
        });
        gsap.set(glow, { opacity: 0.05, scale: 0.2 });

        const tl = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

        tl.to(
          textContent,
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" },
          0
        ).to(
          glow,
          { opacity: 0.6, scale: 1, duration: 1, ease: "power2.out" },
          0
        );

        tl.to({}, { duration: 1.5 });

        tl.to(
          textContent,
          { opacity: 0.15, scale: 0.2, filter: "blur(8px)", duration: 1, ease: "power2.inOut" },
          2.5
        ).to(
          glow,
          { opacity: 0.05, scale: 0.2, duration: 1, ease: "power2.inOut" },
          2.5
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="logo-scroll-section relative w-full h-screen bg-background overflow-hidden flex items-center px-6 md:px-16"
    >
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 30% 50%, hsl(var(--primary)/0.09) 0%, transparent 68%)",
        }}
      />

      {/* ── LEFT COLUMN: Hero Text (Right side is open for single 3D FloatingLogo) ── */}
      <div
        ref={textContentRef}
        className="relative z-10 w-full max-w-xl space-y-6 text-left pointer-events-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
          Building Tomorrow's
          <br />
          <span className="text-primary">Technology Today</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
          We transform businesses through intelligent software solutions,
          leveraging AI, data analytics, and modern development practices to
          drive innovation and growth.
        </p>

        <div className="cta-buttons flex flex-col sm:flex-row items-start gap-4 pt-2">
          <Button size="xl" className="group w-full sm:w-auto" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="w-full sm:w-auto bg-background hover:bg-accent border border-border"
            asChild
          >
            <Link to="/portfolio">Explore Our Work</Link>
          </Button>
        </div>

        <div className="service-tags flex flex-wrap items-center gap-3 pt-4">
          {["Software Development", "AI & Data Solutions", "IT Consulting"].map(
            (service) => (
              <span
                key={service}
                className="px-4 py-2 text-sm text-muted-foreground bg-muted/50 rounded-md border border-border"
              >
                {service}
              </span>
            )
          )}
        </div>
      </div>

      {/* Ambient Glow */}
      <div
        ref={glowRef}
        className="absolute left-1/4 top-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0"
        style={{
          width: `${width * 1.4}px`,
          height: `${width * 1.4}px`,
          background:
            "radial-gradient(circle, hsl(var(--primary)/0.30) 0%, hsl(217 91% 60%/0.12) 50%, transparent 72%)",
          filter: "blur(40px)",
        }}
      />

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
        style={{ opacity: 0.55 }}
      >
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-semibold">
          Scroll Down
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 26"
          fill="none"
          className="text-primary"
        >
          <rect
            x="1"
            y="1"
            width="14"
            height="24"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="8" r="2.2" fill="currentColor">
            <animate
              attributeName="cy"
              values="8;15;8"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default LogoScrollReveal;