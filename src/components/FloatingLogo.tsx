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

    // Set permanent center origin + 3D perspective
    gsap.set(el, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      scale: 0.9,
      rotateY: 0,
      transformPerspective: 1200,
      transformStyle: "preserve-3d",
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
        {/* Ambient Glow */}
        <div
          style={{
            position: "absolute",
            inset: "-50px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, hsl(217 91% 60% / 0.22) 0%, transparent 70%)",
            filter: "blur(36px)",
            pointerEvents: "none",
          }}
        />
        <LogoFrames width={260} fps={30} />
      </div>
    </div>
  );
};

export default FloatingLogo;