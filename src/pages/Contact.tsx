import { useState } from "react";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Tech Boulevard", "Silicon Valley, CA 94025"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@primisystech.com", "support@primisystech.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | Primisys Tech - Get in Touch</title>
        <meta name="description" content="Contact Primisys Tech for your technology needs. Reach out to discuss your project, get a consultation, or learn more about our services." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? We'd love to hear from you. Send us a message 
                and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <AnimatedSection>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div>
                  <GlassCard className="p-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      Send us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </GlassCard>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      Contact Information
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Reach out to us through any of the following channels. Our team 
                      is ready to assist you with your technology needs.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <GlassCard key={index} className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground mb-1">
                              {info.title}
                            </h3>
                            {info.details.map((detail, i) => (
                              <p key={i} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="pt-6">
                    <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-200"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.1}>
          <section className="py-16 bg-card/50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our experts to discuss your 
                technology needs and explore how we can help.
              </p>
              <Button size="lg">
                Schedule a Call
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

export default Contact;
