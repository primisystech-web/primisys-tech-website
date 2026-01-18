import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook,
  ArrowRight,
  Shield,
  Award,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "AI & Machine Learning", href: "/services/ai" },
    { name: "Cloud Solutions", href: "/services/cloud" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "IT Consulting", href: "/services/it-consulting" },
    { name: "Data Analytics", href: "/services/data-analytics" },
  ];

  const resources = [
    { name: "FAQ", href: "/faq" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Our Team", href: "/team" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const certifications = [
    { icon: Shield, label: "ISO 27001 Certified" },
    { icon: Award, label: "AWS Partner" },
    { icon: CheckCircle2, label: "SOC 2 Compliant" },
  ];

  return (
    <AnimatedSection>
      <footer className="bg-card border-t border-border">
        {/* Newsletter Section */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Stay Updated with Tech Insights
                </h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter for the latest in technology and innovation.
                </p>
              </div>
              <div className="flex w-full lg:w-auto gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full lg:w-80 bg-background border-border"
                />
                <Button className="shrink-0 group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <span className="text-2xl font-bold text-foreground">
                  Primisys<span className="text-primary">Tech</span>
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Empowering businesses with cutting-edge technology solutions. 
                We transform ideas into powerful digital experiences that drive growth and innovation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:contact@primisystech.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@primisystech.com</span>
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+92-303-9912110</span>
                  <span>+92-303-9912115</span>
                  <span>+92-303-9912118</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>House #379 Street #34-f I9/4 Islamabad, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-foreground font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-foreground font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link 
                      to={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Badges & Certifications */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border bg-background/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} Primisys Tech. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                <Link to="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
