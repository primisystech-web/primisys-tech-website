import { useEffect, useRef, useState } from "react";
import LogoFrames from "@/components/LogoFrames";

const FloatingLogo = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  // Initial State: Bada scale aur CENTER position
  const [xVw, setXVw] = useState(0);
  const [scale, setScale] = useState(0.95);

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
          setXVw(35);
          return;
        }

        // ── HERO PINNED SECTION (0 → 3×vh) ───────────────────────────────────
        const heroPinEnd = vh * 3;

        if (scrollY <= heroPinEnd) {
          const heroProgress = scrollY / heroPinEnd;

          if (heroProgress === 0) {
            // Top of page: Logo CENTER mein bada rahega
            setXVw(0);
            setScale(0.95);
          } else {
            // Scroll karne par: Logo RIGHT side par slide karega
            const t = Math.min(heroProgress / 0.3, 1);
            setXVw(35 * t); // Moves from center (0vw) to Right (+35vw)
            setScale(0.95 - t * 0.2);
          }
          return;
        }

        // ── POST-HERO SECTIONS ────────────────────────────────────────────────
        setScale(0.85);

        const postHero = scrollY - heroPinEnd;
        const sectionSize = 1000;
        const centerWindow = 200;

        const sectionProgress = postHero % sectionSize;
        const sectionIdx = Math.floor(postHero / sectionSize);

        const centerStart = (sectionSize - centerWindow) / 2;
        const centerEnd = centerStart + centerWindow;

        if (sectionProgress >= centerStart && sectionProgress <= centerEnd) {
          setXVw(0);
        } else if (sectionProgress < centerStart) {
          const side = sectionIdx % 2 === 0 ? -35 : 35;
          setXVw(side);
          if (sectionIdx !== prevSection.current) prevSection.current = sectionIdx;
        } else {
          const nextSide = (sectionIdx + 1) % 2 === 0 ? -35 : 35;
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
        transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out",
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
      <LogoFrames width={260} fps={30} />
    </div>
  );
};

export default FloatingLogo;
