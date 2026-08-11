import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardTopRef = useRef<HTMLDivElement>(null);
  const cardLeftRef = useRef<HTMLDivElement>(null);
  const cardRightRef = useRef<HTMLDivElement>(null);
  const cardBottomRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const globalLogo = document.getElementById("main-floating-logo");

    if (!container) return;

    const ctx = gsap.context(() => {
      // Off-screen initial positions — behind the logo in the center
      gsap.set(cardTopRef.current, { y: "-50vh", opacity: 0, scale: 0.6, rotateX: -20 });
      gsap.set(cardLeftRef.current, { x: "-50vw", opacity: 0, scale: 0.6, rotateY: 20 });
      gsap.set(cardRightRef.current, { x: "50vw", opacity: 0, scale: 0.6, rotateY: -20 });
      gsap.set(cardBottomRef.current, { y: "50vh", opacity: 0, scale: 0.6, rotateX: 20 });
      if (glowRef.current) gsap.set(glowRef.current, { opacity: 0, scale: 0.5 });

      const snapLogoToCenter = () => {
        if (globalLogo) {
          gsap.killTweensOf(globalLogo);
          gsap.set(globalLogo, { x: 0, y: 0, scale: 1.0, opacity: 1, rotateY: 0 });
        }
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=320%",
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onEnter: snapLogoToCenter,
          onEnterBack: snapLogoToCenter,
        },
      });

      // Glow expands under logo first
      tl.to(glowRef.current, { opacity: 1, scale: 1.4, duration: 0.5, ease: "power2.out" });

      // Cards enter ONE BY ONE with 3D depth
      tl.to(cardTopRef.current, {
        y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: "back.out(1.4)"
      })
        .to(cardLeftRef.current, {
          x: 0, opacity: 1, scale: 1, rotateY: 0, duration: 1, ease: "back.out(1.4)"
        })
        .to(cardRightRef.current, {
          x: 0, opacity: 1, scale: 1, rotateY: 0, duration: 1, ease: "back.out(1.4)"
        })
        .to(cardBottomRef.current, {
          y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: "back.out(1.4)"
        });

      // Reading hold
      tl.to({}, { duration: 1.0 });

      // Cards exit ONE BY ONE with 3D depth
      tl.to(cardTopRef.current, {
        y: "-50vh", opacity: 0, scale: 0.6, rotateX: -15, duration: 1, ease: "power2.in"
      })
        .to(cardLeftRef.current, {
          x: "-50vw", opacity: 0, scale: 0.6, rotateY: 15, duration: 1, ease: "power2.in"
        })
        .to(cardRightRef.current, {
          x: "50vw", opacity: 0, scale: 0.6, rotateY: -15, duration: 1, ease: "power2.in"
        })
        .to(cardBottomRef.current, {
          y: "50vh", opacity: 0, scale: 0.6, rotateX: 15, duration: 1, ease: "power2.in"
        });

      // Glow fades out last
      tl.to(glowRef.current, { opacity: 0, scale: 0.5, duration: 0.5, ease: "power2.in" }, "-=0.5");
    }, container);

    return () => ctx.revert();
  }, []);

  const cardClass =
    "stat-card rounded-2xl p-6 text-center z-20 relative overflow-hidden pointer-events-auto bg-card/60 backdrop-blur-xl border border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-background flex items-center justify-center overflow-hidden border-t border-border/30"
      style={{ perspective: "1000px" }}
    >
      {/* Subtle scan-line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none z-0" />

      {/* Central glow that expands under the logo */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none z-0"
        style={{
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(210 90% 58% / 0.2) 0%, hsl(190 90% 58% / 0.08) 50%, transparent 75%)",
          filter: "blur(24px)",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
        }}
      />

      {/* Layout grid */}
      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-5 md:gap-7">
        {/* Top Card */}
        <div ref={cardTopRef} className={`${cardClass} w-52 md:w-60`}>
          {/* Inner shimmer sweep */}
          <div className="absolute inset-0 animate-shimmer rounded-2xl pointer-events-none opacity-60" />
          <p className="text-3xl md:text-4xl font-extrabold text-gradient">20+</p>
          <p className="text-xs md:text-sm text-muted-foreground mt-1.5 font-medium">Projects Delivered</p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary/60 rounded-full" />
        </div>

        {/* Middle Row */}
        <div className="w-full flex items-center justify-between gap-4 md:gap-8">
          {/* Left Card */}
          <div ref={cardLeftRef} className={`${cardClass} w-44 md:w-52`}>
            <div className="absolute inset-0 animate-shimmer rounded-2xl pointer-events-none opacity-60" />
            <p className="text-3xl md:text-4xl font-extrabold text-gradient">10+</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1.5 font-medium">Happy Clients</p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary/60 rounded-full" />
          </div>

          {/* Logo spacer */}
          <div className="w-36 md:w-52 h-36 md:h-52 shrink-0 pointer-events-none" />

          {/* Right Card */}
          <div ref={cardRightRef} className={`${cardClass} w-44 md:w-52`}>
            <div className="absolute inset-0 animate-shimmer rounded-2xl pointer-events-none opacity-60" />
            <p className="text-3xl md:text-4xl font-extrabold text-gradient">5+</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1.5 font-medium">Years Experience</p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary/60 rounded-full" />
          </div>
        </div>

        {/* Bottom Card */}
        <div ref={cardBottomRef} className={`${cardClass} w-52 md:w-60`}>
          <div className="absolute inset-0 animate-shimmer rounded-2xl pointer-events-none opacity-60" />
          <p className="text-3xl md:text-4xl font-extrabold text-gradient">99%</p>
          <p className="text-xs md:text-sm text-muted-foreground mt-1.5 font-medium">Client Satisfaction</p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary/60 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;