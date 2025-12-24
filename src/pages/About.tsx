import { Navigation } from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import { Target, Lightbulb, Users, Shield, Award, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in every solution we deliver, ensuring quality that exceeds expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace emerging technologies and creative thinking to solve complex challenges effectively.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with our clients, becoming trusted advisors in their digital journey.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency and honesty, maintaining the highest ethical standards in all we do.",
  },
  {
    icon: Award,
    title: "Commitment",
    description: "We are dedicated to our clients' success, going above and beyond to deliver exceptional results.",
  },
  {
    icon: Rocket,
    title: "Agility",
    description: "We adapt quickly to changing needs and market dynamics, ensuring timely and relevant solutions.",
  },
];

const milestones = [
  { year: "2015", event: "Founded with a vision to transform businesses through technology" },
  { year: "2017", event: "Expanded services to include cloud solutions and AI integration" },
  { year: "2019", event: "Reached 100+ successful project deliveries" },
  { year: "2021", event: "Launched dedicated cybersecurity division" },
  { year: "2023", event: "Expanded operations to serve clients across 3 continents" },
  { year: "2024", event: "Celebrating 500+ clients and growing" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-in">
              About Primisys Tech
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
              We are a forward-thinking technology company dedicated to empowering businesses 
              with innovative solutions that drive growth, efficiency, and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Primisys Tech was founded on a simple yet powerful belief: that technology, 
                  when thoughtfully applied, can transform the way businesses operate and compete 
                  in an increasingly digital world.
                </p>
                <p>
                  What began as a small team of passionate technologists has grown into a 
                  trusted partner for organizations seeking to harness the power of modern 
                  technology solutions. Our journey has been defined by continuous learning, 
                  adaptation, and an unwavering commitment to our clients' success.
                </p>
                <p>
                  Today, we combine deep technical expertise with strategic insight to deliver 
                  solutions that not only meet immediate needs but also position our clients 
                  for long-term success in an ever-evolving technological landscape.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <GlassCard className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Our Journey</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="text-primary font-semibold min-w-[4rem]">
                        {milestone.year}
                      </span>
                      <span className="text-muted-foreground">
                        {milestone.event}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="p-8 animate-fade-in">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations with innovative technology solutions that drive 
                  sustainable growth, enhance operational efficiency, and create lasting 
                  competitive advantages in the digital age.
                </p>
              </GlassCard>

              <GlassCard className="p-8 animate-fade-in">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the trusted technology partner of choice for forward-thinking 
                  organizations worldwide, known for our expertise, integrity, and 
                  commitment to delivering transformative results.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and define who we are as an organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <GlassCard key={index} className="p-6 animate-fade-in">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help your organization achieve its technology goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Primisys Tech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
