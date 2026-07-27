import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LogoScrollReveal from "@/components/LogoScrollReveal";

export const HeroSection = () => {
  return (
    <>
      {/* ── Scroll-driven 3D logo reveal (pinned section) ── */}
      <div className="relative pt-20">
        {/* Full-page ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"
        />
        <LogoScrollReveal width={260} fps={30} />
      </div>
    </>
  );
};

export default HeroSection;
