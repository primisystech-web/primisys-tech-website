import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import StatCounter from "@/components/StatCounter";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Code2, Brain, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Primisys Tech | Innovative Technology Solutions</title>
        <meta name="description" content="Primisys Tech - Leading provider of Software Development, AI & Data Solutions, and IT Consulting services. Building tomorrow's technology today." />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <AnimatedSection>
          <section className="py-20 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCounter end={20} suffix="+" label="Projects Delivered" delay={0} />
                <StatCounter end={10} suffix="+" label="Happy Clients" delay={100} />
                <StatCounter end={3} suffix="+" label="Years Experience" delay={200} />
                <StatCounter end={99} suffix="%" label="Client Satisfaction" delay={300} />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection delay={0.1}>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Our Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive technology solutions tailored to accelerate your digital transformation
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <ServiceCard
                  icon={Code2}
                  title="Software Development"
                  description="Custom web and mobile applications built with cutting-edge technologies for optimal performance and scalability."
                  delay={0}
                />
                <ServiceCard
                  icon={Brain}
                  title="AI & Data Solutions"
                  description="Harness the power of artificial intelligence and data analytics to drive intelligent business decisions."
                  delay={100}
                />
                <ServiceCard
                  icon={Settings}
                  title="IT Consulting"
                  description="Strategic technology consulting to optimize your infrastructure and accelerate digital transformation."
                  delay={200}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.2}>
          <section className="py-24 border-t border-border">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how we can help you achieve your technology goals.
              </p>
              <Button size="xl" className="group">
                Get In Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
