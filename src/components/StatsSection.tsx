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

    useEffect(() => {
        const container = containerRef.current;
        const globalLogo = document.getElementById("main-floating-logo");

        if (!container) return;

        const ctx = gsap.context(() => {
            // Off-screen initial positions
            gsap.set(cardTopRef.current, { y: "-45vh", opacity: 0, scale: 0.7 });
            gsap.set(cardLeftRef.current, { x: "-45vw", opacity: 0, scale: 0.7 });
            gsap.set(cardRightRef.current, { x: "45vw", opacity: 0, scale: 0.7 });
            gsap.set(cardBottomRef.current, { y: "45vh", opacity: 0, scale: 0.7 });

            const snapLogoToCenter = () => {
                if (globalLogo) {
                    gsap.killTweensOf(globalLogo);
                    gsap.set(globalLogo, {
                        x: "0vw",
                        y: "0vh",
                        scale: 0.85,
                        opacity: 1,
                    });
                }
            };

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    scrub: 0.8,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onEnter: snapLogoToCenter,
                    onEnterBack: snapLogoToCenter,
                },
            });

            // --- PHASE 1: Cards Enter One by One ---
            tl.to(cardTopRef.current, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" })
                .to(cardLeftRef.current, { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" })
                .to(cardRightRef.current, { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" })
                .to(cardBottomRef.current, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" });

            // Pause to view centered cards
            tl.to({}, { duration: 0.8 });

            // --- PHASE 2: Cards Exit One by One Sequentially ---
            tl.to(cardTopRef.current, { y: "-45vh", opacity: 0, scale: 0.7, duration: 1, ease: "power2.in" })
                .to(cardLeftRef.current, { x: "-45vw", opacity: 0, scale: 0.7, duration: 1, ease: "power2.in" })
                .to(cardRightRef.current, { x: "45vw", opacity: 0, scale: 0.7, duration: 1, ease: "power2.in" })
                .to(cardBottomRef.current, { y: "45vh", opacity: 0, scale: 0.7, duration: 1, ease: "power2.in" });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen bg-background flex items-center justify-center overflow-hidden border-t border-border/40"
        >
            <div className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-center gap-4 md:gap-6">
                {/* Top Card */}
                <div
                    ref={cardTopRef}
                    className="stat-card w-48 md:w-56 p-4 rounded-xl border border-blue-500/30 bg-background/80 backdrop-blur-md text-center shadow-lg shadow-blue-500/10 z-10"
                >
                    <h3 className="text-3xl md:text-4xl font-extrabold text-blue-500">20+</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Projects Delivered</p>
                </div>

                {/* Middle Row */}
                <div className="w-full flex items-center justify-between gap-2 md:gap-6">
                    <div
                        ref={cardLeftRef}
                        className="stat-card w-44 md:w-52 p-4 rounded-xl border border-blue-500/30 bg-background/80 backdrop-blur-md text-center shadow-lg shadow-blue-500/10 z-10"
                    >
                        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-500">10+</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">Happy Clients</p>
                    </div>

                    <div className="w-36 md:w-48 h-36 md:h-48 shrink-0 pointer-events-none" />

                    <div
                        ref={cardRightRef}
                        className="stat-card w-44 md:w-52 p-4 rounded-xl border border-blue-500/30 bg-background/80 backdrop-blur-md text-center shadow-lg shadow-blue-500/10 z-10"
                    >
                        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-500">5+</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">Years Experience</p>
                    </div>
                </div>

                {/* Bottom Card */}
                <div
                    ref={cardBottomRef}
                    className="stat-card w-48 md:w-56 p-4 rounded-xl border border-blue-500/30 bg-background/80 backdrop-blur-md text-center shadow-lg shadow-blue-500/10 z-10"
                >
                    <h3 className="text-3xl md:text-4xl font-extrabold text-blue-500">99%</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Client Satisfaction</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;