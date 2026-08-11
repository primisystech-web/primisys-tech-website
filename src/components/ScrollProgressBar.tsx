import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollProgressBar — Thin glowing line at top of page
 * Fills from left to right as user scrolls down the page.
 */
const ScrollProgressBar = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      gsap.set(bar, { scaleX: progress, transformOrigin: "left center" });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2.5px",
        zIndex: 99997,
        pointerEvents: "none",
        background: "hsl(222 28% 7%)", // match background
      }}
    >
      <div
        ref={barRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background:
            "linear-gradient(90deg, hsl(213 94% 60%) 0%, hsl(190 90% 65%) 50%, hsl(240 80% 68%) 100%)",
          boxShadow:
            "0 0 8px hsl(213 94% 60% / 0.8), 0 0 20px hsl(213 94% 60% / 0.5), 0 0 40px hsl(213 94% 60% / 0.2)",
          scaleX: 0,
          transformOrigin: "left center",
          borderRadius: "0 2px 2px 0",
        }}
      />
      {/* Glowing dot at the tip */}
      <div
        ref={barRef}
        style={{
          display: "none", // tip dot handled by scaleX trick
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
