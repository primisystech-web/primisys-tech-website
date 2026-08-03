import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface LogoScrollRevealProps {
  width?: number;
  subtitle?: string;
  title?: ReactNode;
  description?: string;
  buttonText?: string;
  href?: string;
  secondaryButtonText?: string;
  secondaryHref?: string;
  serviceTags?: string[];
  btnGlow?: string;
  border?: string;
  hideLogo?: boolean;
  alignLeft?: boolean;
}

const LogoScrollReveal = ({
  subtitle,
  title,
  description,
  buttonText,
  href,
  secondaryButtonText,
  secondaryHref,
  serviceTags,
  btnGlow = "bg-primary",
  border = "border-border",
  hideLogo = false,
}: LogoScrollRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textContent = textContentRef.current;
    const globalFloatingLogo = document.getElementById("main-floating-logo");

    if (!section || !textContent) return;

    const ctx = gsap.context(() => {
      const scrollTriggerConfig = {
        trigger: section,
        start: "top top",
        end: "+=250%",
        pin: true,
        pinSpacing: true,
        scrub: 0.3, // Ultra-fast response taake drag na ho
        anticipatePin: 1,
      };

      gsap.matchMedia().add("(min-width: 768px)", () => {
        // Text initial state: Text Left Side Screen Edge par halka sa baahar rahega
        gsap.set(textContent, {
          opacity: 0.15,
          scale: 0.85,
          x: "-45vw", // Screem ke extreme left edge par shift
          filter: "blur(6px)",
        });

        const tl = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

        // Phase 1: Section start par Logo CENTER par lock hoga
        if (globalFloatingLogo) {
          if (hideLogo) {
            tl.to(globalFloatingLogo, { opacity: 0, scale: 0, duration: 0.2 }, 0);
          } else {
            tl.set(
              globalFloatingLogo,
              {
                x: "0vw",
                y: "0vh",
                scale: 1,
                opacity: 1,
              },
              0
            );
          }
        }

        // Hold duration: User pehle clear CENTER Logo dekhega
        tl.to({}, { duration: 0.5 });

        // Phase 2: STEP 1 - PEHLE LOGO RIGHT PAR JAYEGA (Zero Text movement yet)
        if (globalFloatingLogo && !hideLogo) {
          tl.to(
            globalFloatingLogo,
            {
              x: "30vw", // Logo right side chala gaya
              scale: 0.7,
              duration: 1,
              ease: "power2.inOut",
            },
            "logoMove"
          );
        }

        // Phase 3: STEP 2 - USKE BAAD TEXT CENTER MEIN AAYEGA (Collision Impossible)
        tl.to(
          textContent,
          {
            opacity: 1,
            scale: 1,
            x: "0vw", // Text Center me aayega
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          "logoMove+=0.3" // Logo move hone ke baad text aayega
        );

        // Hold for Reading
        tl.to({}, { duration: 1.5 });

        // Phase 4: Clean Exit
        tl.to(
          textContent,
          {
            opacity: 0,
            scale: 0.85,
            x: "-45vw",
            filter: "blur(6px)",
            duration: 0.8,
          },
          "exit"
        );
      });
    }, section);

    return () => ctx.revert();
  }, [hideLogo]);

  return (
    <div
      ref={sectionRef}
      className="logo-scroll-section relative w-full h-screen bg-background overflow-hidden flex items-center justify-center px-6 md:px-16"
    >
      <div
        ref={textContentRef}
        className="relative z-10 w-full max-w-xl space-y-6 text-center mx-auto"
      >
        {subtitle && (
          <span className="text-xs md:text-sm font-bold text-primary tracking-widest uppercase block mb-2">
            {subtitle}
          </span>
        )}

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground block tracking-tight">
          {title}
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed block max-w-lg mx-auto">
          {description}
        </p>

        <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          {buttonText && href && (
            <div className="relative group inline-block">
              <div
                className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition duration-500 ${btnGlow}`}
              />
              <Button size="xl" className={`relative group w-full sm:w-auto ${border}`} asChild>
                <Link to={href}>
                  {buttonText}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          )}

          {secondaryButtonText && secondaryHref && (
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto bg-background hover:bg-accent border border-border"
              asChild
            >
              <Link to={secondaryHref}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>

        {serviceTags && serviceTags.length > 0 && (
          <div className="service-tags flex flex-wrap items-center justify-center gap-2 pt-3">
            {serviceTags.map((service) => (
              <span
                key={service}
                className="px-3 py-1.5 text-xs md:text-sm text-muted-foreground bg-muted/40 rounded-md border border-border/60"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoScrollReveal;