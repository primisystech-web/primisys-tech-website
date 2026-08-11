import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * CursorGlow — Premium custom cursor
 *
 * - Inner dot: follows mouse instantly
 * - Outer ring: lags behind with spring-like lerp
 * - On hover over links/buttons: ring expands, dot fades
 * - On click: ring pulses outward
 * - Only active on pointer:fine devices (desktop)
 */
const CursorGlow = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop (pointer device)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Show cursors (hidden by default in CSS)
    gsap.set([dot, ring], { autoAlpha: 1 });

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    // ── Dot: instant follow ──────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    // ── Ring: smooth lerp (spring-like lag) ──────────────────────────
    const tick = () => {
      ringX += (mouseX - ringX) * 0.10;
      ringY += (mouseY - ringY) * 0.10;
      gsap.set(ring, { x: ringX, y: ringY });
    };
    gsap.ticker.add(tick);

    // ── Click: ring pulse ────────────────────────────────────────────
    const onClick = () => {
      gsap.fromTo(
        ring,
        { scale: 1, opacity: 0.8 },
        { scale: 2.4, opacity: 0, duration: 0.5, ease: "power2.out",
          onComplete: () => gsap.set(ring, { scale: 1, opacity: 1 }) }
      );
    };

    // ── Hover: expand ring, shrink dot ──────────────────────────────
    const onHoverEnter = () => {
      gsap.to(dot, { scale: 0.4, opacity: 0.6, duration: 0.25, ease: "power2.out" });
      gsap.to(ring, {
        scale: 1.7,
        borderColor: "hsl(213 94% 70%)",
        boxShadow: "0 0 14px hsl(213 94% 60% / 0.5), 0 0 30px hsl(213 94% 60% / 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const onHoverLeave = () => {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.25, ease: "power2.out" });
      gsap.to(ring, {
        scale: 1,
        borderColor: "hsl(213 94% 60% / 0.55)",
        boxShadow: "0 0 6px hsl(213 94% 60% / 0.25)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Attach to interactive elements
    const addListeners = () => {
      document
        .querySelectorAll<HTMLElement>("a, button, [role='button'], input, label, select, textarea")
        .forEach((el) => {
          el.addEventListener("mouseenter", onHoverEnter);
          el.addEventListener("mouseleave", onHoverLeave);
        });
    };
    addListeners();

    // Re-attach when DOM changes (for dynamic content)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ── Inner dot ─────────────────────────────────────────────────── */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: "hsl(213 94% 78%)",
          boxShadow: "0 0 8px hsl(213 94% 70%), 0 0 18px hsl(213 94% 60% / 0.5)",
          zIndex: 99999,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          opacity: 0, // hidden until JS enables on desktop
          mixBlendMode: "screen",
        }}
      />

      {/* ── Outer ring ────────────────────────────────────────────────── */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          border: "1.5px solid hsl(213 94% 60% / 0.55)",
          boxShadow: "0 0 6px hsl(213 94% 60% / 0.25)",
          zIndex: 99998,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          opacity: 0, // hidden until JS enables on desktop
        }}
      />
    </>
  );
};

export default CursorGlow;
