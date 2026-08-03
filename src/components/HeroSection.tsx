import LogoScrollReveal from "@/components/LogoScrollReveal";

export const HeroSection = () => {
  return (
    <>
      {/* ── Hero Section (Pinned GSAP Reveal) ── */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <LogoScrollReveal
          width={260}
          title={
            <>
              Building Tomorrow's <br />
              <span className="text-primary">Technology Today</span>
            </>
          }
          description="We transform businesses through intelligent software solutions, leveraging AI, data analytics, and modern development practices to drive innovation and growth."
          buttonText="Start Your Project"
          href="/contact"
          secondaryButtonText="Explore Our Work"
          secondaryHref="/portfolio"
          serviceTags={["Software Development", "AI & Data Solutions", "IT Consulting"]}
        />
      </div>
    </>
  );
};

export default HeroSection;
