import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LogoFrames from "@/components/LogoFrames";

/**
 * FloatingLogo
 *
 * Fixed element positioned at top:50%, left:50%.
 * GSAP ScrollTrigger timelines directly control `x`, `scale`, and `opacity`
 * of `#main-floating-logo` without layout conflicts.
 */
const FloatingLogo = () => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    // Initial state: large, centered, hidden — then animate in
    gsap.set(el, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      scale: 0.6,
      rotateY: 0,
      opacity: 0,
      transformPerspective: 1200,
      transformStyle: "preserve-3d",
    });

    // Entrance animation: logo pops in and scales up to a BIGGER initial size
    gsap.to(el, {
      scale: 1.1,     // Bigger initial size — prominently visible on page open
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "expo.out",
      delay: 0.3,
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        pointerEvents: "none",
        zIndex: 40,
      }}
    >
      <div id="main-floating-logo" ref={innerRef}>
        {/* Outer ring glow — pulsing */}
        <div
          className="animate-glow-pulse"
          style={{
            position: "absolute",
            inset: "-60px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, hsl(210 90% 58% / 0.28) 0%, hsl(190 90% 58% / 0.08) 60%, transparent 80%)",
            filter: "blur(28px)",
            pointerEvents: "none",
          }}
        />
        {/* Inner sharp glow ring */}
        <div
          style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, hsl(210 90% 70% / 0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <LogoFrames width={300} fps={30} />
      </div>
    </div>
  );
};

export default FloatingLogo;