import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
  Shield,
  Award,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

import AnimatedSection from "@/components/AnimatedSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "AI & Machine Learning", href: "/services/ai" },
    { name: "Cloud Solutions", href: "/services/cloud" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "IT Consulting", href: "/services/it-consulting" },
    { name: "Data Analytics", href: "/services/data-analytics" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/primisys-tech/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586074331931", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/primisystech/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
  ];

  const certifications = [
    { icon: Shield, label: "ISO 27001 Certified" },
    { icon: Award, label: "AWS Partner" },
    { icon: CheckCircle2, label: "SOC 2 Compliant" },
  ];

  return (
    <AnimatedSection>
      <footer className="bg-card border-t border-border">

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                <a href="tel:+923039912110" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+92-303-9912110</span>
                </a>
                <a href="tel:+923039912115" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+92-303-9912115</span>
                </a>
                <a href="tel:+923039912118" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
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
            <div className="flex flex-col items-center justify-center text-sm text-muted-foreground text-center">
              <p>© {currentYear} Primisys Tech. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};

export default Footer;