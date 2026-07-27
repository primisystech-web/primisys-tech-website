import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const BackgroundWatermark = () => {
  const watermarkRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const el = watermarkRef.current;
    if (!el) return;

    // Reset initial style states on navigation
    gsap.set(el, {
      rotate: 15,
      y: 0,
      scale: 1,
    });

    // Premium parallax scrolling & rotation watermark effect
    const animation = gsap.to(el, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
      rotate: 110,
      y: "20vh",
      scale: 1.2,
      ease: "power1.out",
    });

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, [location.pathname]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      {/* 
        A large, transparent (low-opacity) version of the logo 
        serving as a background watermark behind all text.
        Subtle, elegant, non-intrusive, and hardware-accelerated.
      */}
      <div
        ref={watermarkRef}
        className="relative w-[85vw] max-w-[850px] aspect-square opacity-[0.035] pointer-events-none select-none"
        style={{ willChange: "transform, opacity" }}
      >
        <img
          src="/logo-frames/ezgif-frame-001.png"
          alt="Background Watermark Logo"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    </div>
  );
};

export default BackgroundWatermark;
