import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Daniyal Faraz",
    role: "Founder & CEO",
    bio: "Daniyal founded Primisys Tech with a vision to democratize enterprise technology for businesses of all sizes. He leads the company's strategic direction and client relationships.",
    image: "",
    initials: "DF",
    linkedin: "https://www.linkedin.com/in/daniyal-faraz-911360242/",
    github: "https://github.com/DaniyalFaraz2003",
    email: "daniyalfaraz2003@gmail.com"
  },
  {
    name: "Mustafa Faraz",
    role: "Co-Founder & CTO",
    bio: "Mustafa drives the technical vision of Primisys Tech, bringing deep expertise in cloud architecture, AI systems, and full-stack development to every project.",
    image: "",
    initials: "MF",
    linkedin: "https://www.linkedin.com/in/mustafa-faraz-24a453290",
    github: "https://github.com/fsdev87",
    email: "mustafafaraz87@gmail.com"
  },
  {
    name: "Abdullah Faraz",
    role: "Co-Founder & CMO",
    bio: "Abdullah leads our marketing and growth efforts, ensuring Primisys Tech's innovative solutions reach the businesses that need them most.",
    image: "",
    initials: "AF",
    linkedin: "https://www.linkedin.com/in/abdullah-faraz-1756a3364/",
    email: "abdullahfaraz2007@gmail.com"
  },
];

const Team = () => {
  return (
    <PageTransition>
      <>
        <Helmet>
          <title>Our Team | Primisys Tech - Meet the Founders</title>
          <meta name="description" content="Meet the founding team behind Primisys Tech. Our co-founders bring a shared passion for technology and innovation to every project we deliver." />
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
                A small but passionate team of co-founders building innovative 
                technology solutions for businesses.
              </p>
            </div>
          </section>

          {/* Leadership Section */}
          <AnimatedSection>
            <section className="py-16 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">The Founding Team</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    The people behind Primisys Tech, united by a shared vision to build impactful technology.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mb-16">
                  {teamMembers.map((member, index) => (
                    <GlassCard key={index} className="p-8 text-center w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        {member.github && (
                          <a 
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                            aria-label={`${member.name}'s GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
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



          {/* Footer */}
          <Footer />
        </div>
      </>
    </PageTransition>
  );
};

export default Team;
