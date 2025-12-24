import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  Building2,
  Stethoscope,
  ShoppingCart,
  Landmark,
  Factory,
  GraduationCap,
  ExternalLink,
  Quote
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    slug: "ai-healthcare-diagnostics",
    title: "AI-Powered Healthcare Diagnostics Platform",
    client: "MedTech Solutions",
    industry: "Healthcare",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    description: "Developed an AI-driven diagnostic tool that analyzes medical imaging with 98% accuracy, reducing diagnosis time by 60%.",
    challenge: "The client needed to process thousands of medical images daily while maintaining high accuracy standards.",
    solution: "We implemented a custom deep learning model trained on millions of medical images, integrated with their existing PACS system.",
    results: [
      { metric: "98%", label: "Diagnostic Accuracy" },
      { metric: "60%", label: "Faster Diagnosis" },
      { metric: "40%", label: "Cost Reduction" }
    ],
    technologies: ["TensorFlow", "Python", "AWS", "DICOM"],
    featured: true
  },
  {
    id: 2,
    slug: "enterprise-cloud-migration",
    title: "Enterprise Cloud Migration",
    client: "Global Finance Corp",
    industry: "Finance",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Migrated legacy banking infrastructure to a secure, scalable cloud environment with zero downtime.",
    challenge: "Moving critical financial systems while ensuring regulatory compliance and uninterrupted service.",
    solution: "Phased migration approach with robust security protocols and real-time data synchronization.",
    results: [
      { metric: "0", label: "Downtime Minutes" },
      { metric: "45%", label: "Infrastructure Savings" },
      { metric: "3x", label: "Performance Boost" }
    ],
    technologies: ["AWS", "Kubernetes", "Terraform", "PostgreSQL"],
    featured: true
  },
  {
    id: 3,
    slug: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    client: "RetailMax",
    industry: "Retail",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "Complete platform overhaul resulting in 150% increase in conversions and improved customer experience.",
    challenge: "Outdated platform causing cart abandonment and poor mobile experience.",
    solution: "Built a modern, headless commerce solution with personalized recommendations and seamless checkout.",
    results: [
      { metric: "150%", label: "Conversion Increase" },
      { metric: "35%", label: "Cart Recovery" },
      { metric: "4.8★", label: "User Rating" }
    ],
    technologies: ["React", "Node.js", "Stripe", "Algolia"],
    featured: true
  },
  {
    id: 4,
    slug: "smart-manufacturing-iot",
    title: "Smart Manufacturing IoT System",
    client: "IndustrialTech",
    industry: "Manufacturing",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop",
    description: "Implemented IoT sensors and predictive maintenance system across 12 manufacturing facilities.",
    challenge: "Unplanned equipment failures causing significant production losses and safety concerns.",
    solution: "Deployed 5,000+ IoT sensors with ML-based predictive analytics for proactive maintenance.",
    results: [
      { metric: "75%", label: "Downtime Reduction" },
      { metric: "$2M", label: "Annual Savings" },
      { metric: "99.5%", label: "Uptime Achieved" }
    ],
    technologies: ["Azure IoT", "Python", "Power BI", "Edge Computing"],
    featured: false
  },
  {
    id: 5,
    slug: "cybersecurity-infrastructure",
    title: "Cybersecurity Infrastructure Overhaul",
    client: "SecureBank",
    industry: "Finance",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    description: "Comprehensive security transformation protecting $50B+ in assets with zero breaches.",
    challenge: "Increasing cyber threats and regulatory pressure required a complete security overhaul.",
    solution: "Implemented zero-trust architecture, 24/7 SOC, and advanced threat detection systems.",
    results: [
      { metric: "0", label: "Security Breaches" },
      { metric: "100%", label: "Compliance Score" },
      { metric: "< 5min", label: "Threat Response" }
    ],
    technologies: ["SIEM", "Zero Trust", "AI/ML", "SOC"],
    featured: false
  },
  {
    id: 6,
    slug: "edtech-learning-platform",
    title: "EdTech Learning Management System",
    client: "EduGlobal",
    industry: "Education",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    description: "Built a scalable LMS serving 2M+ students worldwide with personalized learning paths.",
    challenge: "Needed to support diverse learners across multiple time zones with varying connectivity.",
    solution: "Created an adaptive learning platform with offline capabilities and AI-driven recommendations.",
    results: [
      { metric: "2M+", label: "Active Students" },
      { metric: "40%", label: "Better Outcomes" },
      { metric: "95%", label: "User Satisfaction" }
    ],
    technologies: ["React", "GraphQL", "MongoDB", "AWS"],
    featured: false
  }
];

const testimonials = [
  {
    quote: "NexusTech transformed our operations completely. Their AI solution has become the backbone of our diagnostic process.",
    author: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    company: "MedTech Solutions"
  },
  {
    quote: "The migration was seamless. We didn't lose a single minute of service, which for a bank, is absolutely critical.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "Global Finance Corp"
  },
  {
    quote: "Our conversion rates speak for themselves. NexusTech didn't just build a platform, they built a revenue engine.",
    author: "Emma Thompson",
    role: "VP of Digital",
    company: "RetailMax"
  }
];

const industries = [
  { name: "All", count: 6 },
  { name: "Healthcare", count: 1 },
  { name: "Finance", count: 2 },
  { name: "Retail", count: 1 },
  { name: "Manufacturing", count: 1 },
  { name: "Education", count: 1 }
];

const Portfolio = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Portfolio - NexusTech Solutions</title>
          <meta name="description" content="Explore our portfolio of successful projects and case studies across various industries." />
        </Helmet>
        
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30">
                <Award className="w-4 h-4 mr-2" />
                Our Work
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforming Ideas Into
                <span className="text-primary block mt-2">Measurable Success</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how we've helped businesses across industries achieve their goals 
                through innovative technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {industries.map((industry, index) => (
                  <Badge 
                    key={index}
                    variant={index === 0 ? "default" : "secondary"}
                    className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {industry.name} ({industry.count})
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <AnimatedSection>
          <section className="py-12 border-y border-border bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">$100M+</div>
                  <div className="text-muted-foreground">Client Savings</div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Featured Case Studies */}
        <AnimatedSection delay={0.1}>
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Studies</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Deep dives into our most impactful projects and the results we achieved
                </p>
              </div>
              
              <div className="space-y-16">
                {caseStudies.filter(c => c.featured).map((study, index) => (
                  <GlassCard key={study.id} className="overflow-hidden">
                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                            <study.icon className="w-3 h-3 mr-1" />
                            {study.industry}
                          </Badge>
                        </div>
                      </div>
                      <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <div className="flex items-center gap-2 mb-4">
                          <Building2 className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{study.client}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h3>
                        <p className="text-muted-foreground mb-6">{study.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">The Challenge</h4>
                          <p className="text-sm text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">Our Solution</h4>
                          <p className="text-sm text-muted-foreground">{study.solution}</p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-2xl font-bold text-primary">{result.metric}</div>
                              <div className="text-xs text-muted-foreground">{result.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="outline" className="group" asChild>
                          <Link to={`/case-study/${study.slug}`}>
                            View Full Case Study
                            <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* More Projects Grid */}
        <AnimatedSection delay={0.2}>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">More Success Stories</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Additional projects showcasing our expertise across various domains
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.filter(c => !c.featured).map((study) => (
                  <GlassCard key={study.id} className="overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground">
                        <study.icon className="w-3 h-3 mr-1" />
                        {study.industry}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{study.client}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {study.description}
                      </p>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-primary">{result.metric}</div>
                            <div className="text-[10px] text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="w-full group/btn" asChild>
                        <Link to={`/case-study/${study.slug}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Client Testimonials */}
        <AnimatedSection delay={0.3}>
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Hear directly from the leaders who trusted us with their digital transformation
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <GlassCard key={index} className="p-8 relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                    <p className="text-lg mb-6 relative z-10 italic text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-primary">{testimonial.company}</div>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.4}>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto text-center">
              <GlassCard className="p-12 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let's discuss how we can help you achieve similar results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border">
          <div className="container mx-auto text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} NexusTech Solutions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
