import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import FloatingLogo from "@/components/FloatingLogo";
import LogoScrollReveal from "@/components/LogoScrollReveal";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Index = () => {
  const sectionsData = [
    {
      title: "About Us",
      subtitle: "Our Story & Vision",
      description:
        "Discover our journey, mission, and the core values that drive our team to deliver absolute excellence.",
      buttonText: "Discover Our Story",
      href: "/about",
      btnGlow: "bg-blue-500",
      border: "hover:border-blue-500/30",
      hideLogo: false,
    },
    {
      title: "Our Services",
      subtitle: "Expertise & Innovation",
      description:
        "Explore our expertise across AI/ML solutions, cloud infrastructure, custom software, and strategic IT consulting.",
      buttonText: "Explore What We Do",
      href: "/services",
      btnGlow: "bg-cyan-500",
      border: "hover:border-cyan-500/30",
      hideLogo: false,
    },
    {
      title: "Our Portfolio",
      subtitle: "Case Studies & Work",
      description:
        "Take a look at our successful deployments and see how we help modern businesses transform and scale.",
      buttonText: "View Our Work",
      href: "/portfolio",
      btnGlow: "bg-purple-500",
      border: "hover:border-purple-500/30",
      hideLogo: false,
    },
    {
      title: "Meet the Team",
      subtitle: "Experts & Innovators",
      description:
        "Get to know the passionate engineers, creative visionaries, and project coordinators behind Primisys Tech.",
      buttonText: "Meet the Team",
      href: "/team",
      btnGlow: "bg-violet-500",
      border: "hover:border-violet-500/30",
      hideLogo: false,
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Primisys Tech | Innovative Technology Solutions</title>
        <meta
          name="description"
          content="Primisys Tech - Leading provider of Software Development, AI & Data Solutions, and IT Consulting services."
        />
      </Helmet>

      {/* Top scroll progress indicator */}
      <ScrollProgressBar />

      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Main Floating Logo */}
        <FloatingLogo />

        {/* Navigation Bar */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection />

        {/* Protocol Stats Section */}
        <StatsSection />

        {/* Alternate Sections with Synchronized Logo & Text Placement */}
        {sectionsData.map((section, idx) => (
          <div key={idx} className="border-t border-border/40">
            <LogoScrollReveal
              subtitle={section.subtitle}
              title={section.title}
              description={section.description}
              buttonText={section.buttonText}
              href={section.href}
              btnGlow={section.btnGlow}
              border={section.border}
              hideLogo={section.hideLogo}
              alignLeft={idx % 2 === 0}
            />
          </div>
        ))}

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;