import LogoScrollReveal from "@/components/LogoScrollReveal";

export const HeroSection = () => {
  return (
    <>
      {/* ── Hero Section (Pinned GSAP Reveal) ── */}
      <div className="relative pt-20">
        {/* Multi-layer animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />

        {/* Large soft blob — top left */}
        <div
          className="absolute pointer-events-none animate-float"
          style={{
            top: "5%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, hsl(210 90% 58% / 0.12) 0%, transparent 65%)",
            filter: "blur(60px)",
            animationDelay: "0s",
          }}
        />

        {/* Smaller blob — bottom right */}
        <div
          className="absolute pointer-events-none animate-float animation-delay-300"
          style={{
            bottom: "10%",
            right: "-5%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, hsl(190 90% 58% / 0.10) 0%, transparent 65%)",
            filter: "blur(50px)",
            animationDelay: "2s",
          }}
        />

        <LogoScrollReveal
          title={
            <>
              Building Tomorrow's <br />
              <span className="text-gradient">Technology Today</span>
            </>
          }
          description="We transform businesses through intelligent software solutions, leveraging AI, data analytics, and modern development practices to drive innovation and growth."
          buttonText="Start Your Project"
          href="/contact"
          secondaryButtonText="Explore Our Work"
          secondaryHref="/portfolio"
          serviceTags={["Software Development", "AI & Data Solutions", "IT Consulting"]}
          alignLeft={false}
        />
      </div>
    </>
  );
};

export default HeroSection;
