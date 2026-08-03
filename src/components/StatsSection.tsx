import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatCounter from "@/components/StatCounter";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const card4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const globalLogo = document.getElementById("main-floating-logo");

        if (!container) return;

        const ctx = gsap.context(() => {
            // 1. Initial Hidden Positions for Cards
            gsap.set(card1Ref.current, { y: "-70vh", opacity: 0, scale: 0.7 });
            gsap.set(card2Ref.current, { x: "-70vw", opacity: 0, scale: 0.7 });
            gsap.set(card3Ref.current, { x: "70vw", opacity: 0, scale: 0.7 });
            gsap.set(card4Ref.current, { y: "70vh", opacity: 0, scale: 0.7 });

            // Lock Logo to Center
            const snapLogoToCenter = () => {
                if (globalLogo) {
                    gsap.killTweensOf(globalLogo);
                    gsap.to(globalLogo, {
                        x: "0vw",
                        y: "0vh",
                        scale: 0.75,
                        opacity: 1,
                        duration: 0.25,
                        ease: "power2.out",
                        overwrite: "all",
                    });
                }
            };

            // Completely Hide Logo when Leaving Stats Section
            const hideLogoOnLeave = () => {
                if (globalLogo) {
                    gsap.killTweensOf(globalLogo);
                    gsap.to(globalLogo, {
                        opacity: 0,
                        scale: 0.2,
                        duration: 0.3,
                        overwrite: "all",
                    });
                }
            };

            // 2. Timeline Config
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=260%",
                    pin: true,
                    scrub: 0.5,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onEnter: snapLogoToCenter,
                    onEnterBack: snapLogoToCenter,
                    onLeave: hideLogoOnLeave,
                    onLeaveBack: hideLogoOnLeave,
                },
            });

            // 3. Sequential Cards Entrance
            tl.to(card1Ref.current, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, 0.1)
                .to(card2Ref.current, { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, 0.4)
                .to(card3Ref.current, { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, 0.7)
                .to(card4Ref.current, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, 1.0);

            // Reading Delay
            tl.to({}, { duration: 1.5 });

            // 4. Sequential Cards Exit
            tl.to(card1Ref.current, { y: "-70vh", opacity: 0, scale: 0.7, duration: 1 }, "exit")
                .to(card2Ref.current, { x: "-70vw", opacity: 0, scale: 0.7, duration: 1 }, "exit+=0.3")
                .to(card3Ref.current, { x: "70vw", opacity: 0, scale: 0.7, duration: 1 }, "exit+=0.6")
                .to(card4Ref.current, { y: "70vh", opacity: 0, scale: 0.7, duration: 1 }, "exit+=0.9");
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen bg-background overflow-hidden flex items-center justify-center border-t border-border"
        >
            {/* 1. TOP CARD */}
            <div
                ref={card1Ref}
                className="absolute top-10 left-1/2 -translate-x-1/2 p-5 bg-card/80 border border-primary/40 rounded-2xl shadow-2xl backdrop-blur-md text-center min-w-[210px] z-20 pointer-events-auto"
            >
                <StatCounter end={20} suffix="+" label="Projects Delivered" delay={0} />
            </div>

            {/* 2. LEFT CARD */}
            <div
                ref={card2Ref}
                className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 p-5 bg-card/80 border border-primary/40 rounded-2xl shadow-2xl backdrop-blur-md text-center min-w-[210px] z-20 pointer-events-auto"
            >
                <StatCounter end={10} suffix="+" label="Happy Clients" delay={0} />
            </div>

            {/* 3. RIGHT CARD */}
            <div
                ref={card3Ref}
                className="absolute right-6 md:right-14 top-1/2 -translate-y-1/2 p-5 bg-card/80 border border-primary/40 rounded-2xl shadow-2xl backdrop-blur-md text-center min-w-[210px] z-20 pointer-events-auto"
            >
                <StatCounter end={5} suffix="+" label="Years Experience" delay={0} />
            </div>

            {/* 4. BOTTOM CARD */}
            <div
                ref={card4Ref}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 p-5 bg-card/80 border border-primary/40 rounded-2xl shadow-2xl backdrop-blur-md text-center min-w-[210px] z-20 pointer-events-auto"
            >
                <StatCounter end={99} suffix="%" label="Client Satisfaction" delay={0} />
            </div>
        </div>
    );
};

export default StatsSection;