import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface LogoScrollRevealProps {
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
  alignLeft = false,
}: LogoScrollRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textContent = textContentRef.current;
    const globalLogo = document.getElementById("main-floating-logo");

    if (!section || !textContent || !globalLogo) return;

    const textStartSide = alignLeft ? "35vw" : "-35vw";
    const logoTargetSide = alignLeft ? -32 : 32; // Viewport % for logo X position

    const ctx = gsap.context(() => {
      // Initial text position: Side par blur + low opacity
      gsap.set(textContent, {
        x: textStartSide,
        opacity: 0.35,
        scale: 0.8,
        filter: "blur(6px)",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1 progress of current section

          // 1. Text Animation: Side -> Center -> Side
          let textX = textStartSide;
          let textOpacity = 0.35;
          let textBlur = 6;
          let textScale = 0.8;

          // 2. Logo Movement (Direct Realtime Smooth Offset):
          // Progress 0.0 -> 0.4: Logo Center (0vw) to Side (logoTargetSide)
          // Progress 0.4 -> 0.6: Hold on Side
          // Progress 0.6 -> 1.0: Logo Side back to Center (0vw)
          let currentLogoX = 0;
          let currentLogoScale = 0.85;

          if (progress <= 0.4) {
            const p = progress / 0.4; // Normalized 0 to 1
            currentLogoX = logoTargetSide * p;
            currentLogoScale = 0.85 - 0.2 * p;

            // Text Center Transformation
            textOpacity = 0.35 + 0.65 * p;
            textBlur = 6 * (1 - p);
            textScale = 0.8 + 0.2 * p;
            textX = alignLeft ? `${35 * (1 - p)}vw` : `${-35 * (1 - p)}vw`;
          } else if (progress > 0.4 && progress <= 0.6) {
            currentLogoX = logoTargetSide;
            currentLogoScale = 0.65;

            // Text in Center
            textOpacity = 1;
            textBlur = 0;
            textScale = 1;
            textX = "0vw";
          } else {
            const p = (progress - 0.6) / 0.4; // Normalized 0 to 1
            currentLogoX = logoTargetSide * (1 - p);
            currentLogoScale = 0.65 + 0.2 * p;

            // Text Exits to Side
            textOpacity = 1 - 0.65 * p;
            textBlur = 6 * p;
            textScale = 1 - 0.2 * p;
            textX = alignLeft ? `${35 * p}vw` : `${-35 * p}vw`;
          }

          // Apply Smooth Transform directly on Elements
          gsap.set(textContent, {
            x: textX,
            opacity: textOpacity,
            scale: textScale,
            filter: `blur(${textBlur}px)`,
          });

          if (!hideLogo) {
            gsap.set(globalLogo, {
              x: `${currentLogoX}vw`,
              scale: currentLogoScale,
              opacity: 1,
            });
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, [hideLogo, alignLeft]);

  return (
    <div
      ref={sectionRef}
      className="logo-scroll-section relative w-full h-screen bg-background overflow-hidden flex items-center justify-center px-6 md:px-16"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 50%, hsl(var(--primary)/0.06) 0%, transparent 70%)",
        }}
      />

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
              <Button
                size="xl"
                className={`relative group w-full sm:w-auto ${border}`}
                asChild
              >
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