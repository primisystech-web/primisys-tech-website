import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GlassCard from "@/components/GlassCard";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Users, 
  BarChart3,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Transform your business with intelligent automation and predictive analytics.",
    href: "/services/ai",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure designed for modern enterprises.",
    href: "/services/cloud",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security solutions.",
    href: "/services/cybersecurity",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions built with cutting-edge technologies.",
    href: "/services/software-development",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology guidance to drive digital transformation.",
    href: "/services/it-consulting",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turn your data into actionable insights and competitive advantage.",
    href: "/services/data-analytics",
  },
];

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Technology Solutions for
              <br />
              <span className="text-primary">Modern Business</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From AI-powered automation to robust cybersecurity, we deliver comprehensive 
              technology services that drive innovation and growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <AnimatedSection>
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Link key={service.title} to={service.href}>
                    <GlassCard 
                      className="p-8 h-full group cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.1}>
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <GlassCard className="p-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let's discuss how our technology solutions can help you achieve your goals.
                </p>
                <Button size="lg">
                  Schedule a Consultation
                </Button>
              </GlassCard>
            </div>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
