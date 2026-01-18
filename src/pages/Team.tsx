import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Daniyal Faraz",
    role: "CEO & Founder",
    bio: "With over 5 years of experience in technology leadership, Daniyal founded Primisys Tech with a vision to democratize enterprise technology for businesses of all sizes.",
    image: "",
    initials: "DF",
    linkedin: "#",
    twitter: "#",
    email: "daniyalfaraz2003@gmail.com"
  },
  {
    name: "Mustafa Faraz",
    role: "Chief Technology Officer",
    bio: "Mustafa brings deep expertise in cloud architecture and AI systems, having previously led engineering teams at major tech companies.",
    image: "",
    initials: "MF",
    linkedin: "#",
    twitter: "#",
    email: "mustafafaraz87@gmail.com"
  },
  {
    name: "Abdullah Amin",
    role: "VP of Engineering",
    bio: "Abdullah oversees our software development teams, ensuring we deliver cutting-edge solutions that exceed client expectations.",
    image: "",
    initials: "AA",
    linkedin: "#",
    twitter: "#",
    email: "sarah@techcorp.com"
  },
  {
    name: "Abdul Ghufran",
    role: "Head of Cybersecurity",
    bio: "A certified security expert with experience in both offensive and defensive security, Ghufran keeps our clients protected from evolving threats.",
    image: "",
    initials: "AG",
    linkedin: "#",
    twitter: "#",
    email: "david@techcorp.com"
  },
  {
    name: "Aleena Babar",
    role: "Director of AI & ML",
    bio: "Aleena leads our artificial intelligence initiatives, transforming complex data into actionable insights for our clients.",
    image: "",
    initials: "AB",
    linkedin: "#",
    twitter: "#",
    email: "emily@techcorp.com"
  },
  {
    name: "Muhammad Hassaan Noman",
    role: "Head of Cloud Solutions",
    bio: "Hassaan architects scalable cloud infrastructure that powers businesses across industries, specializing in hybrid and multi-cloud strategies.",
    image: "",
    initials: "MN",
    linkedin: "#",
    twitter: "#",
    email: "james@techcorp.com"
  },
  {
    name: "Arslan Ali",
    role: "Director of Consulting",
    bio: "Arslan guides our consulting practice, helping clients navigate digital transformation with strategic insights and hands-on support.",
    image: "",
    initials: "AA",
    linkedin: "#",
    twitter: "#",
    email: "lisa@techcorp.com"
  },
  {
    name: "Farhan Ali",
    role: "Head of Data Analytics",
    bio: "Farhan turns raw data into business value, leading our analytics team in delivering insights that drive strategic decisions.",
    image: "",
    initials: "FA",
    linkedin: "#",
    twitter: "#",
    email: "michael@techcorp.com"
  }
];

const Team = () => {
  return (
    <PageTransition>
      <>
        <Helmet>
          <title>Our Team | TechCorp - Meet the Experts</title>
          <meta name="description" content="Meet the talented professionals behind TechCorp. Our team of experts brings decades of experience in technology, innovation, and business transformation." />
        </Helmet>
        
        <div className="min-h-screen bg-background">
          <Navigation />
          
          {/* Hero Section */}
          <section className="relative py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Our Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Meet the <span className="text-primary">Experts</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our diverse team of innovators, engineers, and strategists work together 
                to deliver exceptional technology solutions for our clients.
              </p>
            </div>
          </section>

          {/* Leadership Section */}
          <AnimatedSection>
            <section className="py-16 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Visionary leaders driving innovation and excellence across every aspect of our organization.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                  {teamMembers.slice(0, 2).map((member, index) => (
                    <GlassCard key={index} className="p-8 text-center">
                      <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      <div className="flex justify-center gap-3">
                        <a 
                          href={member.linkedin} 
                          className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a 
                          href={member.twitter} 
                          className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a 
                          href={`mailto:${member.email}`} 
                          className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Department Heads */}
          <AnimatedSection delay={0.1}>
            <section className="py-16 px-6 bg-muted/30">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Department Heads</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Expert leaders who bring specialized knowledge and passion to their respective domains.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers.slice(2).map((member, index) => (
                    <GlassCard key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16 border-2 border-primary/20 shrink-0">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-0.5">{member.name}</h3>
                          <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                        <a 
                          href={member.linkedin} 
                          className="p-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                        <a 
                          href={member.twitter} 
                          className="p-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter className="w-3.5 h-3.5" />
                        </a>
                        <a 
                          href={`mailto:${member.email}`} 
                          className="p-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Join Our Team CTA */}
          <AnimatedSection delay={0.2}>
            <section className="py-24 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <GlassCard className="p-12">
                  <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    We're always looking for talented individuals who are passionate about 
                    technology and innovation. Explore our open positions and become part of our story.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8" asChild>
                      <Link to="/careers">View Open Positions</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </GlassCard>
              </div>
            </section>
          </AnimatedSection>

          {/* Footer */}
          <Footer />
        </div>
      </>
    </PageTransition>
  );
};

export default Team;
