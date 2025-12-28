import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Cloud, Server, Database, Globe, Lock, Zap, ArrowLeft, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description: "Design and deploy scalable cloud architectures on AWS, Azure, or Google Cloud.",
  },
  {
    icon: Database,
    title: "Cloud Migration",
    description: "Seamlessly migrate your existing systems to the cloud with minimal disruption.",
  },
  {
    icon: Globe,
    title: "Multi-Cloud Strategy",
    description: "Optimize your cloud presence across multiple providers for resilience and cost efficiency.",
  },
  {
    icon: Lock,
    title: "Cloud Security",
    description: "Implement robust security measures to protect your cloud infrastructure.",
  },
];

const benefits = [
  "Reduce infrastructure costs by 30-50%",
  "Scale resources on-demand to match business needs",
  "Improve system reliability with 99.9% uptime SLAs",
  "Enable remote work with secure cloud access",
  "Accelerate deployment cycles from weeks to hours",
  "Eliminate hardware maintenance and refresh cycles",
];

const CloudService = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Cloud Solutions & Services | Primisys Tech</title>
        <meta name="description" content="Scalable cloud infrastructure and migration services. AWS, Azure, Google Cloud solutions for modern enterprises from Primisys Tech." />
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
              <Cloud className="w-8 h-8 text-primary" />
            </div>
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Service
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Cloud Solutions
              </h1>
            </div>
          </div>
          
          <p className="text-muted-foreground text-xl max-w-3xl">
            Scalable, secure cloud infrastructure designed for modern enterprises. 
            We help you leverage the full power of cloud computing to reduce costs, 
            increase agility, and accelerate innovation.
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
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your cloud strategy and create a roadmap for your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule a Consultation</Button>
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

export default CloudService;
