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

    // Text starts CLOSE to the logo (near, not far off-screen)
    // alignLeft=false → logo goes RIGHT → text starts just to the LEFT of logo
    // alignLeft=true  → logo goes LEFT  → text starts just to the RIGHT of logo
    const textNearX = alignLeft ? "13vw" : "-13vw";   // near the logo
    const textFarX  = alignLeft ? "38vw" : "-38vw";   // exit position (off screen)
    const logoSideVw = alignLeft ? -30 : 30;           // logo goes this far to side

    // Set initial text: very tiny, close to logo
    gsap.set(textContent, {
      x: textNearX,
      opacity: 0.55,
      scale: 0.38,
      filter: "blur(3px)",
      transformOrigin: "center center",
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=220%",
        pin: true,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.killTweensOf(globalLogo);
          gsap.set(globalLogo, { x: 0, y: 0, scale: 1.1, rotateY: 0, opacity: 1 });
        },
        onEnterBack: () => {
          gsap.killTweensOf(globalLogo);
          gsap.set(globalLogo, { x: 0, y: 0, scale: 1.1, rotateY: 0, opacity: 1 });
        },
        onUpdate: (self) => {
          const p = self.progress;

          // Quadratic ease-in-out helper
          const eio = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

          let logoX = 0;
          let logoScale = 1.1;
          let logoRotateY = 0;

          let textX = textNearX;
          let textOpacity = 0.55;
          let textScale = 0.38;
          let textBlur = 3;

          if (p <= 0.07) {
            // ── Phase 0: Opening hold ──────────────────────────────
            // Logo big at center, text tiny & close to logo
            logoX = 0; logoScale = 1.1;
            textX = textNearX; textOpacity = 0.55; textScale = 0.38; textBlur = 3;

          } else if (p <= 0.46) {
            // ── Phase 1: Logo → side (shrinks), text → center (expands) ─
            const t = eio((p - 0.07) / 0.39);

            logoX = logoSideVw * t;
            logoScale = 1.1 - 0.42 * t;           // 1.1 → 0.68
            logoRotateY = (alignLeft ? -12 : 12) * t;

            // Text slides from near-logo to center and expands
            const nearVw = alignLeft ? 13 : -13;
            textX = `${nearVw * (1 - t)}vw`;
            textOpacity = 0.55 + 0.45 * t;         // 0.55 → 1
            textScale = 0.38 + 0.62 * t;           // 0.38 → 1
            textBlur = 3 * (1 - t);                // 3 → 0

          } else if (p <= 0.60) {
            // ── Phase 2: Reading hold ─────────────────────────────
            logoX = logoSideVw; logoScale = 0.68; logoRotateY = alignLeft ? -12 : 12;
            textX = "0vw"; textOpacity = 1; textScale = 1; textBlur = 0;

          } else if (p <= 0.93) {
            // ── Phase 3: Text → far side (shrinks), logo → center (grows) ─
            const t = eio((p - 0.60) / 0.33);

            logoX = logoSideVw * (1 - t);
            logoScale = 0.68 + 0.42 * t;           // 0.68 → 1.1
            logoRotateY = (alignLeft ? -12 : 12) * (1 - t);

            // Text exits to FAR side (off screen) — not near logo
            const farVw = alignLeft ? 38 : -38;
            textX = `${farVw * t}vw`;
            textOpacity = 1 - 0.75 * t;            // 1 → 0.25
            textScale = 1 - 0.62 * t;              // 1 → 0.38
            textBlur = 3 * t;

          } else {
            // ── Phase 4: Closing hold ─────────────────────────────
            // Logo back at center big, text off screen far side
            logoX = 0; logoScale = 1.1; logoRotateY = 0;
            textX = textFarX; textOpacity = 0.25; textScale = 0.38; textBlur = 3;
          }

          gsap.set(textContent, {
            x: textX,
            opacity: textOpacity,
            scale: textScale,
            filter: `blur(${textBlur}px)`,
          });

          if (!hideLogo) {
            gsap.set(globalLogo, {
              x: `${logoX}vw`,
              scale: logoScale,
              rotateY: logoRotateY,
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
      {/* Aurora ambient background */}
      <div className="aurora-bg absolute inset-0 pointer-events-none" />

      {/* Faint grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 90% 58% / 0.07) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 90% 58% / 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Text content */}
      <div
        ref={textContentRef}
        className="relative z-10 w-full max-w-xl p-8 md:p-10 rounded-3xl bg-card/40 backdrop-blur-xl border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.12)] space-y-6 text-center mx-auto transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]"
      >
        {subtitle && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)] mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {subtitle}
          </div>
        )}

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground tracking-tight">
          {title}
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {buttonText && href && (
            <div className="relative group inline-block w-full sm:w-auto">
              <div className={`absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500 ${btnGlow}`} />
              <Button
                size="xl"
                className={`relative w-full sm:w-auto ${border} overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-glow font-semibold`}
                asChild
              >
                <Link to={href}>
                  {buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
            </div>
          )}

          {secondaryButtonText && secondaryHref && (
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/15 hover:border-primary/50 text-foreground transition-all duration-300 hover:scale-[1.04] font-semibold"
              asChild
            >
              <Link to={secondaryHref}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>

        {serviceTags && serviceTags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-border/40">
            {serviceTags.map((service) => (
              <span
                key={service}
                className="px-3.5 py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary bg-white/5 hover:bg-primary/15 rounded-full border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm cursor-pointer backdrop-blur-md hover:scale-105"
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