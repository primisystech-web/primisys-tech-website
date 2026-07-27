import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoFrames from "@/components/LogoFrames";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface LogoScrollRevealProps {
  width?: number;
  fps?: number;
}

const LogoScrollReveal = ({ width = 260, fps = 30 }: LogoScrollRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const logoWrap = logoWrapRef.current;
    const textContent = textContentRef.current;
    const glow = glowRef.current;

    if (!section || !logoWrap || !glow) return;

    // Use GSAP Context for bulletproof cleanup and memory-leak prevention
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Shared ScrollTrigger settings for both breakpoints
      const scrollTriggerConfig = {
        trigger: section,
        start: "top top",
        end: "+=220%",
        pin: true,
        pinSpacing: true,
        scrub: 1.2,
        anticipatePin: 1,
      };

      // ── DESKTOP ANIMATION (min-width: 768px) ──
      mm.add("(min-width: 768px)", () => {
        // Initial state for desktop logo
        gsap.set(logoWrap, {
          rotateY: -40,
          rotateX: 14,
          scale: 0.7,
          x: 0,
          y: -50,
          opacity: 0.5,
          transformPerspective: 900,
        });
        gsap.set(glow, { opacity: 0.2, scale: 0.7, x: 0, y: 0 });

        // Initial state for desktop text elements (staggered 3D setup)
        if (textContent) {
          const h1 = textContent.querySelector("h1");
          const p = textContent.querySelector("p");
          const btns = textContent.querySelector(".cta-buttons");
          const tags = textContent.querySelector(".service-tags");

          gsap.set([h1, p, btns, tags], {
            opacity: 0,
            y: 80,
            rotateX: -45,
            rotateY: 10,
            scale: 0.88,
            transformPerspective: 1000,
            transformOrigin: "top left",
          });
        }

        const tl = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

        // Phase 1: Center and bloom
        tl.to(
          logoWrap,
          {
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        ).to(
          glow,
          { opacity: 1, scale: 1.2, duration: 0.4, ease: "power2.out" },
          0
        );

        // Phase 2: Glide to the right
        tl.to(
          logoWrap,
          {
            rotateY: 15,
            rotateX: -10,
            scale: 0.75,
            x: "25vw",
            y: "32vh",
            opacity: 1,
            duration: 0.6,
            ease: "power1.inOut",
          },
          0.4
        ).to(
          glow,
          {
            x: "20vw",
            y: "28vh",
            scale: 0.8,
            opacity: 0.6,
            duration: 0.6,
            ease: "power1.inOut",
          },
          0.4
        );

        // Staggered 3D Roll-Out Entrance of Hero Text
        if (textContent) {
          const h1 = textContent.querySelector("h1");
          const p = textContent.querySelector("p");
          const btns = textContent.querySelector(".cta-buttons");
          const tags = textContent.querySelector(".service-tags");

          tl.to(
            h1,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            0.4
          );

          tl.to(
            p,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            0.5
          );

          tl.to(
            btns,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            0.6
          );

          tl.to(
            tags,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            0.7
          );
        }
      });

      // ── MOBILE ANIMATION (max-width: 767px) ──
      mm.add("(max-width: 767px)", () => {
        // Initial state for mobile logo
        gsap.set(logoWrap, {
          rotateY: -40,
          rotateX: 14,
          scale: 0.6,
          x: 0,
          y: -30,
          opacity: 0.5,
          transformPerspective: 900,
        });
        gsap.set(glow, { opacity: 0.2, scale: 0.6, x: 0, y: 0 });

        // Initial state for mobile text elements
        if (textContent) {
          const h1 = textContent.querySelector("h1");
          const p = textContent.querySelector("p");
          const btns = textContent.querySelector(".cta-buttons");
          const tags = textContent.querySelector(".service-tags");

          gsap.set([h1, p, btns, tags], {
            opacity: 0,
            y: 50,
            rotateX: -45,
            scale: 0.9,
            transformPerspective: 1000,
            transformOrigin: "top center",
          });
        }

        const tl = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

        // Phase 1: Center and bloom
        tl.to(
          logoWrap,
          {
            rotateY: 0,
            rotateX: 0,
            scale: 0.8,
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        ).to(
          glow,
          { opacity: 1, scale: 1.0, duration: 0.4, ease: "power2.out" },
          0
        );

        // Phase 2: Scale down and move UP to leave space for text underneath, stay centered
        tl.to(
          logoWrap,
          {
            rotateY: 10,
            rotateX: -5,
            scale: 0.48,
            x: 0,
            y: "-22vh",
            opacity: 0.25,
            duration: 0.6,
            ease: "power1.inOut",
          },
          0.4
        ).to(
          glow,
          {
            x: 0,
            y: "-22vh",
            scale: 0.5,
            opacity: 0.2,
            duration: 0.6,
            ease: "power1.inOut",
          },
          0.4
        );

        // Staggered 3D Roll-Out Entrance of Hero Text for Mobile
        if (textContent) {
          const h1 = textContent.querySelector("h1");
          const p = textContent.querySelector("p");
          const btns = textContent.querySelector(".cta-buttons");
          const tags = textContent.querySelector(".service-tags");

          tl.to(
            h1,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            0.4
          );

          tl.to(
            p,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            0.5
          );

          tl.to(
            btns,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            0.6
          );

          tl.to(
            tags,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            0.7
          );
        }
      });

    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="logo-scroll-section relative w-full h-screen bg-background overflow-hidden flex items-center justify-center px-6 md:px-16"
    >
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, hsl(var(--primary)/0.09) 0%, transparent 68%)",
        }}
      />

      {/* Main Content Layout (Text Left, Space Right) */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* LEFT COLUMN: Writing / Hero Content */}
        <div
          ref={textContentRef}
          className="space-y-6 text-center md:text-left max-w-xl mx-auto md:mx-0 pointer-events-auto"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground block origin-top-left" style={{ willChange: "transform, opacity" }}>
            Building Tomorrow's
            <br />
            <span className="text-primary">Technology Today</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed block origin-top-left" style={{ willChange: "transform, opacity" }}>
            We transform businesses through intelligent software solutions, leveraging AI, data analytics, and modern development practices to drive innovation and growth.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2 block origin-top-left" style={{ willChange: "transform, opacity" }}>
            <Button size="xl" className="group w-full sm:w-auto" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto bg-background hover:bg-accent border border-border" asChild>
              <Link to="/portfolio">Explore Our Work</Link>
            </Button>
          </div>

          {/* Service tags */}
          <div className="service-tags flex flex-wrap items-center justify-center md:justify-start gap-3 pt-6 block origin-top-left" style={{ willChange: "transform, opacity" }}>
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

        {/* RIGHT COLUMN: Empty Grid Area for Logo Arrival */}
        <div className="hidden md:block" />
      </div>

      {/* Ambient Glow */}
      <div
        ref={glowRef}
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: `${width * 1.3}px`,
          height: `${width * 1.3}px`,
          background:
            "radial-gradient(circle, hsl(var(--primary)/0.35) 0%, hsl(217 91% 60%/0.15) 50%, transparent 72%)",
          filter: "blur(35px)",
        }}
      />

      {/* Animated 3D Logo Wrapper */}
      <div
        ref={logoWrapRef}
        className="absolute z-20 pointer-events-none"
        style={{
          perspective: "900px",
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
        }}
      >
        <LogoFrames width={width} fps={fps} />
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
        style={{ opacity: 0.6 }}
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