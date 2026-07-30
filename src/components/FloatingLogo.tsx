import { useEffect, useRef, useState } from "react";
import LogoFrames from "@/components/LogoFrames";

/**
 * FloatingLogo — Choreographed with scroll:
 *
 * HERO SECTION (pinned, 0 → 3×vh scroll):
 *   • 0%–75% of hero scroll → logo grows on FAR RIGHT (+40vw)
 *   • 75%–100% of hero scroll → text exits, logo glides to CENTER (0vw), gets big
 *
 * POST-HERO SECTIONS (every 1000px):
 *   • Entering a section window → logo slides to LEFT or RIGHT (+40vw / -40vw)
 *   • Middle of section window (500–700px in) → logo briefly glides back to CENTER
 *   • Next section starts → logo slides to opposite side
 *
 * Footer approach:
 *   • Last ~500px before footer → logo shrinks and locks to right edge
 */
const FloatingLogo = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [xVw, setXVw] = useState(40);   // starts far right
  const [scale, setScale] = useState(0.18);

  const rafId = useRef<number | null>(null);
  const prevSection = useRef(-1);

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const maxScroll = document.documentElement.scrollHeight - vh;

        // ── Near Footer ──────────────────────────────────────────────────────
        const isNearFooter = maxScroll > 0 && maxScroll - scrollY < 500;
        if (isNearFooter) {
          setScale(0.44);
          setXVw(40);
          return;
        }

        // ── HERO PINNED SECTION (0 → 3×vh) ───────────────────────────────────
        const heroPinEnd = vh * 3;

        if (scrollY <= heroPinEnd) {
          const heroProgress = scrollY / heroPinEnd; // 0 → 1

          // Scale: tiny (0.18) → full (0.92) over first 30% of hero scroll
          const zoomProgress = Math.min(scrollY / (heroPinEnd * 0.30), 1);
          setScale(0.18 + zoomProgress * 0.74); // 0.18 → 0.92

          // Text exits at 75% of hero scroll  →  logo glides to CENTER
          const exitThreshold = 0.75;
          if (heroProgress < exitThreshold) {
            // Text visible: logo stays far RIGHT
            setXVw(40);
          } else {
            // Text exiting: logo glides from +40vw → 0vw (center)
            const t = (heroProgress - exitThreshold) / (1 - exitThreshold); // 0→1
            const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOut
            setXVw(40 * (1 - ease));
          }
          return;
        }

        // ── POST-HERO SECTIONS ────────────────────────────────────────────────
        // Full scale after hero
        setScale(0.92);

        const postHero = scrollY - heroPinEnd;
        const sectionSize = 1000;     // px per "virtual section"
        const centerWindow = 200;     // px in middle of each section where logo centers

        const sectionProgress = postHero % sectionSize;  // 0→1000 within section
        const sectionIdx = Math.floor(postHero / sectionSize);

        // Center of the section: 400–600px in (the 200px window)
        const centerStart = (sectionSize - centerWindow) / 2;  // 400
        const centerEnd = centerStart + centerWindow;            // 600

        if (sectionProgress >= centerStart && sectionProgress <= centerEnd) {
          // Logo glides to CENTER during transition
          setXVw(0);
        } else if (sectionProgress < centerStart) {
          // First half of section: logo on one side
          const side = sectionIdx % 2 === 0 ? -40 : 40; // after hero: start LEFT
          setXVw(side);
          if (sectionIdx !== prevSection.current) prevSection.current = sectionIdx;
        } else {
          // Second half: logo moves to opposite side (next section side)
          const nextSide = (sectionIdx + 1) % 2 === 0 ? -40 : 40;
          setXVw(nextSide);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        pointerEvents: "none",
        zIndex: 40,
        transform: `
          translate(-50%, -50%)
          translateX(${xVw}vw)
          scale(${scale})
        `,
        transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out",
        willChange: "transform",
        transformStyle: "preserve-3d",
        perspective: "1200px",
        opacity: scale < 0.22 ? 0.4 : 0.95,
      }}
    >
      {/* Ambient Glow Halo */}
      <div
        style={{
          position: "absolute",
          inset: "-40px",
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.25) 0%, transparent 70%)",
          filter: "blur(32px)",
          pointerEvents: "none",
        }}
      />
      <LogoFrames width={220} fps={30} />
    </div>
  );
};

export default FloatingLogo;
