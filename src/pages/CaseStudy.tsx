import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight,
  Building2,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  Quote,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Landmark,
  ShoppingCart,
  Factory,
  GraduationCap,
  Target,
  Lightbulb,
  TrendingUp,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const caseStudiesData = [
  {
    id: "1",
    slug: "ai-healthcare-diagnostics",
    title: "AI-Powered Healthcare Diagnostics Platform",
    client: "MedTech Solutions",
    industry: "Healthcare",
    icon: Stethoscope,
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    duration: "8 months",
    teamSize: "12 specialists",
    year: "2023",
    overview: "MedTech Solutions needed a revolutionary diagnostic platform that could analyze medical imaging with unprecedented accuracy. Our team developed an AI-driven solution that processes thousands of images daily while maintaining 98% diagnostic accuracy.",
    challenge: {
      title: "The Challenge",
      description: "The healthcare industry faces immense pressure to deliver accurate diagnoses quickly. MedTech Solutions was struggling with:",
      points: [
        "Processing over 10,000 medical images daily with limited radiologist capacity",
        "High error rates in initial screenings leading to delayed treatments",
        "Inconsistent diagnostic quality across different facilities",
        "Rising operational costs due to manual review processes"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We designed and implemented a comprehensive AI-powered diagnostic platform:",
      points: [
        "Custom deep learning model trained on 5 million+ validated medical images",
        "Real-time integration with existing PACS and EMR systems",
        "Automated priority flagging for urgent cases",
        "Explainable AI features for radiologist verification",
        "Cloud-based architecture for scalability across facilities"
      ]
    },
    results: [
      { metric: "98%", label: "Diagnostic Accuracy", description: "Matching or exceeding human radiologist performance" },
      { metric: "60%", label: "Faster Diagnosis", description: "Reduced average diagnosis time from 48 hours to 19 hours" },
      { metric: "40%", label: "Cost Reduction", description: "Significant savings in operational costs" },
      { metric: "10,000+", label: "Daily Scans", description: "Processing capacity increased 5x" }
    ],
    technologies: ["TensorFlow", "Python", "AWS SageMaker", "DICOM", "HL7 FHIR", "Kubernetes", "PostgreSQL"],
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop"
    ],
    testimonial: {
      quote: "NexusTech transformed our diagnostic capabilities completely. Their AI solution has become the backbone of our diagnostic process, enabling us to serve more patients with greater accuracy than ever before.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "MedTech Solutions"
    },
    relatedProjects: ["2", "5"]
  },
  {
    id: "2",
    slug: "enterprise-cloud-migration",
    title: "Enterprise Cloud Migration",
    client: "Global Finance Corp",
    industry: "Finance",
    icon: Landmark,
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    duration: "14 months",
    teamSize: "18 specialists",
    year: "2023",
    overview: "Global Finance Corp required a complete migration of their legacy banking infrastructure to a secure, scalable cloud environment. The critical requirement: zero downtime during the transition.",
    challenge: {
      title: "The Challenge",
      description: "Migrating a major financial institution's infrastructure presented unique challenges:",
      points: [
        "Legacy systems dating back 20+ years with complex interdependencies",
        "Strict regulatory compliance requirements (PCI-DSS, SOX, GDPR)",
        "Zero tolerance for service interruption - processing $2B daily",
        "Security concerns with cloud-based financial data"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a phased migration approach with robust security protocols:",
      points: [
        "Comprehensive system audit and dependency mapping",
        "Hybrid cloud architecture with redundant failover systems",
        "Real-time data synchronization during transition periods",
        "Custom security protocols exceeding regulatory requirements",
        "Automated compliance monitoring and reporting"
      ]
    },
    results: [
      { metric: "0", label: "Downtime Minutes", description: "Seamless migration with no service interruption" },
      { metric: "45%", label: "Infrastructure Savings", description: "Annual reduction in infrastructure costs" },
      { metric: "3x", label: "Performance Boost", description: "Transaction processing speed improvement" },
      { metric: "100%", label: "Compliance", description: "Full regulatory compliance maintained" }
    ],
    technologies: ["AWS", "Kubernetes", "Terraform", "PostgreSQL", "HashiCorp Vault", "Datadog", "Jenkins"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop"
    ],
    testimonial: {
      quote: "The migration was seamless. We didn't lose a single minute of service, which for a bank processing billions daily, is absolutely critical. NexusTech's expertise gave us confidence throughout the entire process.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "Global Finance Corp"
    },
    relatedProjects: ["5", "1"]
  },
  {
    id: "3",
    slug: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    client: "RetailMax",
    industry: "Retail",
    icon: ShoppingCart,
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    duration: "6 months",
    teamSize: "10 specialists",
    year: "2024",
    overview: "RetailMax's outdated e-commerce platform was causing significant cart abandonment and poor mobile experience. We delivered a complete platform overhaul that resulted in a 150% increase in conversions.",
    challenge: {
      title: "The Challenge",
      description: "RetailMax was losing customers due to platform limitations:",
      points: [
        "Cart abandonment rate exceeding 75%",
        "Mobile experience rated 2.1 stars on app stores",
        "Page load times averaging 8 seconds",
        "Inability to personalize customer experiences"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We built a modern, headless commerce solution from the ground up:",
      points: [
        "Headless architecture enabling omnichannel experiences",
        "AI-powered product recommendations engine",
        "One-click checkout with multiple payment options",
        "Progressive Web App for mobile-first experience",
        "Real-time inventory management and dynamic pricing"
      ]
    },
    results: [
      { metric: "150%", label: "Conversion Increase", description: "Dramatic improvement in purchase completion" },
      { metric: "35%", label: "Cart Recovery", description: "Recovered previously abandoned carts" },
      { metric: "4.8★", label: "User Rating", description: "App store rating after redesign" },
      { metric: "1.2s", label: "Load Time", description: "85% improvement in page speed" }
    ],
    technologies: ["React", "Next.js", "Node.js", "Stripe", "Algolia", "Redis", "Contentful"],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop"
    ],
    testimonial: {
      quote: "Our conversion rates speak for themselves. NexusTech didn't just build a platform, they built a revenue engine. The ROI was visible within the first month of launch.",
      author: "Emma Thompson",
      role: "VP of Digital",
      company: "RetailMax"
    },
    relatedProjects: ["4", "6"]
  },
  {
    id: "4",
    slug: "smart-manufacturing-iot",
    title: "Smart Manufacturing IoT System",
    client: "IndustrialTech",
    industry: "Manufacturing",
    icon: Factory,
    heroImage: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&h=600&fit=crop",
    duration: "10 months",
    teamSize: "15 specialists",
    year: "2023",
    overview: "IndustrialTech needed to modernize their manufacturing operations across 12 facilities. We implemented a comprehensive IoT sensor network with predictive maintenance capabilities.",
    challenge: {
      title: "The Challenge",
      description: "Unplanned equipment failures were causing significant losses:",
      points: [
        "Average of 120 hours of unplanned downtime per facility annually",
        "Equipment failure costs exceeding $3M per year",
        "No visibility into equipment health across facilities",
        "Safety incidents due to unexpected machine failures"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We deployed a comprehensive IoT and analytics platform:",
      points: [
        "5,000+ IoT sensors monitoring critical equipment",
        "Edge computing for real-time anomaly detection",
        "ML-based predictive maintenance scheduling",
        "Unified dashboard for all facility monitoring",
        "Automated alert and work order generation"
      ]
    },
    results: [
      { metric: "75%", label: "Downtime Reduction", description: "From 120 to 30 hours annually" },
      { metric: "$2M", label: "Annual Savings", description: "In prevented equipment failures" },
      { metric: "99.5%", label: "Uptime Achieved", description: "Industry-leading equipment availability" },
      { metric: "0", label: "Safety Incidents", description: "Zero equipment-related injuries" }
    ],
    technologies: ["Azure IoT Hub", "Python", "Power BI", "TimescaleDB", "Edge Computing", "MQTT", "Grafana"],
    gallery: [
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
    ],
    testimonial: {
      quote: "The predictive maintenance system has revolutionized our operations. We went from reactive firefighting to proactive planning. The ROI exceeded our expectations within 6 months.",
      author: "James Mitchell",
      role: "VP of Operations",
      company: "IndustrialTech"
    },
    relatedProjects: ["1", "2"]
  },
  {
    id: "5",
    slug: "cybersecurity-infrastructure",
    title: "Cybersecurity Infrastructure Overhaul",
    client: "SecureBank",
    industry: "Finance",
    icon: Landmark,
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
    duration: "12 months",
    teamSize: "20 specialists",
    year: "2024",
    overview: "SecureBank required a comprehensive security transformation to protect $50B+ in assets. We implemented a zero-trust architecture with 24/7 security operations.",
    challenge: {
      title: "The Challenge",
      description: "Increasing cyber threats required a complete security overhaul:",
      points: [
        "Legacy security infrastructure unable to detect modern threats",
        "Regulatory pressure to demonstrate enhanced security posture",
        "Average threat detection time of 180 days",
        "No centralized security monitoring capabilities"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a comprehensive zero-trust security architecture:",
      points: [
        "Zero-trust network architecture with micro-segmentation",
        "24/7 Security Operations Center with AI-powered monitoring",
        "Advanced threat detection with behavioral analytics",
        "Automated incident response and remediation",
        "Continuous security training and phishing simulations"
      ]
    },
    results: [
      { metric: "0", label: "Security Breaches", description: "Zero successful attacks since implementation" },
      { metric: "100%", label: "Compliance Score", description: "Full regulatory compliance achieved" },
      { metric: "< 5min", label: "Threat Response", description: "Average incident detection and response time" },
      { metric: "99.9%", label: "Threat Detection", description: "Accuracy in identifying malicious activity" }
    ],
    technologies: ["SIEM", "Zero Trust Architecture", "AI/ML", "SOC", "CrowdStrike", "Palo Alto", "Splunk"],
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop"
    ],
    testimonial: {
      quote: "NexusTech's security transformation has given us and our customers complete confidence. We've gone from being reactive to being proactively secure. The investment has paid for itself many times over.",
      author: "David Park",
      role: "CISO",
      company: "SecureBank"
    },
    relatedProjects: ["2", "1"]
  },
  {
    id: "6",
    slug: "edtech-learning-platform",
    title: "EdTech Learning Management System",
    client: "EduGlobal",
    industry: "Education",
    icon: GraduationCap,
    heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop",
    duration: "9 months",
    teamSize: "14 specialists",
    year: "2024",
    overview: "EduGlobal needed a scalable learning management system to serve 2M+ students worldwide. We built an adaptive learning platform with offline capabilities and AI-driven personalization.",
    challenge: {
      title: "The Challenge",
      description: "Supporting diverse learners across the globe presented unique challenges:",
      points: [
        "Students across 50+ countries with varying internet connectivity",
        "One-size-fits-all content not meeting individual learning needs",
        "High dropout rates averaging 65% for online courses",
        "Limited instructor bandwidth for personalized feedback"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We created an adaptive, offline-capable learning platform:",
      points: [
        "AI-powered adaptive learning paths based on individual progress",
        "Progressive Web App with full offline functionality",
        "Gamification elements to increase engagement",
        "Automated assessment and personalized feedback",
        "Multi-language support with real-time translation"
      ]
    },
    results: [
      { metric: "2M+", label: "Active Students", description: "Serving learners in 50+ countries" },
      { metric: "40%", label: "Better Outcomes", description: "Improvement in course completion rates" },
      { metric: "95%", label: "User Satisfaction", description: "Based on student surveys" },
      { metric: "35%", label: "Cost Reduction", description: "In content delivery and support" }
    ],
    technologies: ["React", "GraphQL", "MongoDB", "AWS", "TensorFlow", "WebRTC", "Service Workers"],
    gallery: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop"
    ],
    testimonial: {
      quote: "The adaptive learning platform has transformed how we deliver education. Students are more engaged, completion rates are up dramatically, and we can serve more learners than ever before.",
      author: "Dr. Lisa Wang",
      role: "Chief Learning Officer",
      company: "EduGlobal"
    },
    relatedProjects: ["3", "1"]
  }
];

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const study = caseStudiesData.find(s => s.slug === slug);
  
  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/portfolio">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedStudies = study.relatedProjects
    .map(id => caseStudiesData.find(s => s.id === id))
    .filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % study.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + study.gallery.length) % study.gallery.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{study.title} - Case Study | NexusTech Solutions</title>
        <meta name="description" content={study.overview} />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="h-[50vh] md:h-[60vh] relative">
          <img 
            src={study.heroImage} 
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative -mt-32 z-10">
          <div className="max-w-4xl">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
            <Badge className="mb-4">
              <study.icon className="w-3 h-3 mr-1" />
              {study.industry}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{study.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {study.client}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {study.year}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {study.duration}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {study.teamSize}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.overview}</p>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((result, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{result.metric}</div>
                <div className="font-semibold mb-1">{result.label}</div>
                <div className="text-xs text-muted-foreground">{result.description}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">{study.challenge.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{study.challenge.description}</p>
              <ul className="space-y-3">
                {study.challenge.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-destructive">{index + 1}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{study.solution.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{study.solution.description}</p>
              <ul className="space-y-3">
                {study.solution.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Project Gallery</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={study.gallery[currentImageIndex]} 
                alt={`${study.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {study.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-background/50 hover:bg-background/80'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {study.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex 
                      ? 'border-primary' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {study.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-6 opacity-20" />
            <p className="text-xl md:text-2xl italic mb-8 leading-relaxed">
              "{study.testimonial.quote}"
            </p>
            <div>
              <div className="font-semibold text-lg">{study.testimonial.author}</div>
              <div className="opacity-80">{study.testimonial.role}</div>
              <div className="opacity-60 text-sm">{study.testimonial.company}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedStudies.length > 0 && (
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedStudies.map((related) => related && (
                <Link key={related.id} to={`/case-study/${related.slug}`}>
                  <GlassCard className="overflow-hidden group">
                    <div className="relative h-48">
                      <img 
                        src={related.heroImage} 
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      <Badge className="absolute top-4 left-4">
                        <related.icon className="w-3 h-3 mr-1" />
                        {related.industry}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{related.client}</div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium">
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">
                View More Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 NexusTech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;
