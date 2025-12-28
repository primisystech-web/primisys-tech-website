import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, AlertTriangle, FileKey, Fingerprint, ArrowLeft, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Threat Detection & Response",
    description: "24/7 monitoring and rapid response to security threats and incidents.",
  },
  {
    icon: Lock,
    title: "Security Assessment",
    description: "Comprehensive vulnerability assessments and penetration testing.",
  },
  {
    icon: FileKey,
    title: "Compliance & Governance",
    description: "Ensure compliance with industry regulations like GDPR, HIPAA, and SOC 2.",
  },
  {
    icon: Fingerprint,
    title: "Identity & Access Management",
    description: "Secure authentication and authorization systems to protect your assets.",
  },
];

const benefits = [
  "Protect against 99% of known cyber threats",
  "Reduce incident response time by 70%",
  "Achieve and maintain regulatory compliance",
  "Safeguard customer data and build trust",
  "Minimize business disruption from security incidents",
  "Get expert security guidance without a full-time team",
];

const CybersecurityService = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Cybersecurity Services | Primisys Tech</title>
        <meta name="description" content="Enterprise-grade cybersecurity solutions. Threat detection, security assessments, compliance, and identity management from Primisys Tech." />
      </Helmet>
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Service
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Cybersecurity
              </h1>
            </div>
          </div>
          
          <p className="text-muted-foreground text-xl max-w-3xl">
            Protect your digital assets with enterprise-grade security solutions. 
            We provide comprehensive cybersecurity services to defend against threats, 
            ensure compliance, and build resilient security postures.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <GlassCard 
                key={feature.title} 
                className="p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-12">
            <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Is Your Business Protected?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a free security assessment and discover vulnerabilities before attackers do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Security Assessment</Button>
              <Button size="lg" variant="outline">View Case Studies</Button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </PageTransition>
  );
};

export default CybersecurityService;
