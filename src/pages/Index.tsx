import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatCounter from "@/components/StatCounter";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingLogo from "@/components/FloatingLogo";

const Index = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Primisys Tech | Innovative Technology Solutions</title>
        <meta
          name="description"
          content="Primisys Tech - Leading provider of Software Development, AI & Data Solutions, and IT Consulting services. Building tomorrow's technology today."
        />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Persistent floating 3-D logo – always visible, scrolls left/right */}
        <FloatingLogo />

        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section with Slide-In from Right & 3D Tilt */}
        <section className="py-20 border-t border-border overflow-hidden">
          <div className="container mx-auto px-8 md:px-20 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: 150, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <AnimatedSection delay={0}>
                <StatCounter
                  end={20}
                  suffix="+"
                  label="Projects Delivered"
                  delay={0}
                />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <StatCounter
                  end={10}
                  suffix="+"
                  label="Happy Clients"
                  delay={100}
                />
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <StatCounter
                  end={5}
                  suffix="+"
                  label="Years Experience"
                  delay={200}
                />
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <StatCounter
                  end={99}
                  suffix="%"
                  label="Client Satisfaction"
                  delay={300}
                />
              </AnimatedSection>
            </motion.div>
          </div>
        </section>

        {/* CTA Section with Smooth Right-Slide Entry */}
        <section className="py-24 border-t border-border overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 120, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="container mx-auto px-4 text-center"
          >
            <AnimatedSection delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Transform Your Business?
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how we can help you achieve your technology goals.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Button size="xl" className="group" asChild>
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedSection>
          </motion.div>
        </section>

        {/* Scroll-Revealed Navigation Sections */}
        {[
          {
            title: "About Us",
            subtitle: "Our Story & Vision",
            description: "Discover our journey, mission, and the core values that drive our team to deliver absolute excellence.",
            buttonText: "Discover Our Story",
            href: "/about",
            gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
            glow: "group-hover:shadow-[0_0_50px_20px_rgba(59,130,246,0.15)]",
            border: "hover:border-blue-500/30",
            btnGlow: "bg-blue-500",
          },
          {
            title: "Our Services",
            subtitle: "Expertise & Innovation",
            description: "Explore our expertise across AI/ML solutions, cloud infrastructure, custom software, and strategic IT consulting.",
            buttonText: "Explore What We Do",
            href: "/services",
            gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
            glow: "group-hover:shadow-[0_0_50px_20px_rgba(6,182,212,0.15)]",
            border: "hover:border-cyan-500/30",
            btnGlow: "bg-cyan-500",
          },
          {
            title: "Our Portfolio",
            subtitle: "Case Studies & Work",
            description: "Take a look at our successful deployments and see how we help modern businesses transform and scale.",
            buttonText: "View Our Work",
            href: "/portfolio",
            gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
            glow: "group-hover:shadow-[0_0_50px_20px_rgba(168,85,247,0.15)]",
            border: "hover:border-purple-500/30",
            btnGlow: "bg-purple-500",
          },
          {
            title: "Meet the Team",
            subtitle: "Experts & Innovators",
            description: "Get to know the passionate engineers, creative visionaries, and project coordinators behind Primisys Tech.",
            buttonText: "Meet the Team",
            href: "/team",
            gradient: "from-violet-500/10 via-indigo-500/5 to-transparent",
            glow: "group-hover:shadow-[0_0_50px_20px_rgba(139,92,246,0.15)]",
            border: "hover:border-violet-500/30",
            btnGlow: "bg-violet-500",
          },
          {
            title: "Get in Touch",
            subtitle: "Start Your Project",
            description: "Ready to kickstart your next digital upgrade? Reach out to us and let's craft a solution tailored to your goals.",
            buttonText: "Contact Us Now",
            href: "/contact",
            gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
            glow: "group-hover:shadow-[0_0_50px_20px_rgba(16,185,129,0.15)]",
            border: "hover:border-emerald-500/30",
            btnGlow: "bg-emerald-500",
          },
        ].map((section, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <section
              key={idx}
              className="py-32 border-t border-border/40 overflow-hidden relative flex flex-col items-center justify-center min-h-[60vh] [perspective:1200px]"
            >
              {/* Ambient Background Gradient for each section */}
              <div className={`absolute inset-0 bg-gradient-to-b ${section.gradient} opacity-40 pointer-events-none`} />

              <div className="container mx-auto px-6 max-w-5xl z-10">
                {/* Text block centered in the middle of screen */}
                <div className="max-w-2xl mx-auto text-center">
                  {/* Title & Description Zooming from behind */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.1,
                      z: -800,
                      rotateX: 15
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      z: 0,
                      rotateX: 0
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="transform-gpu"
                  >
                    <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 block">
                      {section.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                      {section.description}
                    </p>
                  </motion.div>

                  {/* Button: Only visible when fully centered, disappears when scrolling */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative inline-block group"
                  >
                    {/* Glow ring behind button */}
                    <div className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition duration-500 ${section.btnGlow} ${section.glow}`} />
                    <Button
                      size="xl"
                      variant="outline"
                      className={`relative bg-background border-border transition-all duration-300 ${section.border} hover:text-foreground`}
                      asChild
                    >
                      <Link to={section.href}>
                        {section.buttonText}
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;