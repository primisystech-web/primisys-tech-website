import { useEffect, useRef, useState } from "react";
import LogoFrames from "@/components/LogoFrames";

/**
 * FloatingLogo
 *
 * Single 3D floating logo across the entire project.
 *
 * 1. HERO SECTION (Pinned for ~300vh):
 *    - Starts on the RIGHT side (+32vw), tiny (scale 0.18).
 *    - Text is on the LEFT side.
 *    - Logo stays strictly on the RIGHT side while hero is pinned,
 *      zooming from 0.18 -> 0.85. Never crosses onto hero text!
 *
 * 2. SUBSEQUENT SECTIONS (About, Services, Portfolio, Team, Contact):
 *    - Logo alternates sides (Left <-> Right) opposite to each section's text.
 *
 * 3. FOOTER:
 *    - Scales to 0.45 and stays on the Right side out of the way of footer links.
 */
const FloatingLogo = () => {
  const frameRef = useRef<HTMLDivElement>(null);

  // Start on the right side (1) immediately
  const [side, setSide] = useState<-1 | 1>(1);
  const [scale, setScale] = useState(0.18); // starts tiny
  const [tilt, setTilt] = useState(0);

  const prevScrollY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const maxScroll = document.documentElement.scrollHeight - vh;
        const direction = scrollY > prevScrollY.current ? 1 : -1;
        prevScrollY.current = scrollY;

        // Is user at/near footer (bottom 12% of page)?
        const isFooter = maxScroll > 0 && scrollY / maxScroll > 0.88;

        // Hero section is pinned for end: "+=300%" (approx 3 * vh)
        const heroPinEnd = vh * 2.8;

        let targetSide: -1 | 1 = 1;
        let targetScale = 0.98;

        if (scrollY < heroPinEnd) {
          // ── HERO SECTION ──
          // Always keep logo on the RIGHT (+32vw) while hero is pinned!
          targetSide = 1;
          // Zoom from tiny (0.20) -> 0.98 over first 450px of scroll
          const zoomProgress = Math.min(scrollY / 450, 1);
          targetScale = 0.2 + zoomProgress * 0.78;
        } else if (isFooter) {
          // ── FOOTER ──
          targetSide = 1;
          targetScale = 0.52;
        } else {
          // ── CONTENT SECTIONS BELOW HERO ──
          // Calculate section index for remaining sections (each approx 650px)
          const postHeroScroll = scrollY - heroPinEnd;
          const sectionIdx = Math.floor(postHeroScroll / 650);

          targetSide = sectionIdx % 2 === 0 ? -1 : 1;
          targetScale = 0.98;
        }

        setSide(targetSide);
        setScale(targetScale);

        // Subtle 3D tilt in scroll direction
        setTilt(direction * 12);
        setTimeout(() => setTilt(0), 350);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Trigger once on mount to initialize
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Horizontal offset: right = +32vw, left = -32vw
  const xVw = side === 1 ? 32 : -32;

  return (
    <div
      ref={frameRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        pointerEvents: "none",
        zIndex: 50,
        transform: `
          translate(-50%, -50%)
          translateX(${xVw}vw)
          rotateY(${side * -20}deg)
          rotateZ(${tilt}deg)
          scale(${scale})
        `,
        transition: "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
        transformStyle: "preserve-3d",
        perspective: "1200px",
        opacity: scale < 0.2 ? scale * 4 : 0.95, // smooth fade-in as it zooms
      }}
    >
      {/* Ambient glow halo */}
      <div
        style={{
          position: "absolute",
          inset: "-30px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(217 91% 60% / 0.28) 0%, transparent 70%)",
          filter: "blur(28px)",
          pointerEvents: "none",
        }}
      />
      <LogoFrames width={240} fps={30} />
    </div>
  );
};

export default FloatingLogo;
