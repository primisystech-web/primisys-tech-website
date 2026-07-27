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
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section with Slide-In from Right & 3D Tilt */}
        <section className="py-20 border-t border-border overflow-hidden">
          <div className="container mx-auto px-4">
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

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;