import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  Globe,
  Coffee,
  Laptop,
  GraduationCap,
  Plane,
  ChevronRight,
  Building,
  Sparkles,
  Target,
  Shield,
} from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$150k - $200k",
    description: "Lead development of our core platform, mentoring junior developers and architecting scalable solutions.",
    requirements: ["5+ years experience", "React & Node.js", "Cloud platforms", "Team leadership"],
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$160k - $220k",
    description: "Design and implement machine learning models to power our next-generation AI products.",
    requirements: ["3+ years ML experience", "Python & TensorFlow", "NLP expertise", "Research background"],
  },
  {
    id: 3,
    title: "Product Designer",
    department: "Design",
    location: "Remote / Austin",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Create intuitive user experiences and beautiful interfaces for our enterprise products.",
    requirements: ["4+ years UX/UI", "Figma proficiency", "Design systems", "User research"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $180k",
    description: "Build and maintain our cloud infrastructure, ensuring 99.99% uptime and security.",
    requirements: ["AWS/GCP expertise", "Kubernetes", "CI/CD pipelines", "Security best practices"],
  },
  {
    id: 5,
    title: "Technical Project Manager",
    department: "Operations",
    location: "San Francisco",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Coordinate cross-functional teams to deliver complex technical projects on time.",
    requirements: ["PMP certified", "Agile/Scrum", "Technical background", "Client management"],
  },
  {
    id: 6,
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote / Chicago",
    type: "Full-time",
    salary: "$60k - $80k + Commission",
    description: "Generate qualified leads and build relationships with enterprise prospects.",
    requirements: ["1+ year B2B sales", "CRM experience", "Excellent communication", "Tech industry knowledge"],
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: Laptop,
    title: "Remote-First",
    description: "Work from anywhere with flexible hours and home office stipend.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "$5,000 annual budget for courses, conferences, and professional development.",
  },
  {
    icon: Plane,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge, with a minimum of 4 weeks encouraged.",
  },
  {
    icon: DollarSign,
    title: "Equity Package",
    description: "Competitive stock options so you share in our success.",
  },
  {
    icon: Coffee,
    title: "Team Retreats",
    description: "Annual company retreats to connect and celebrate together.",
  },
  {
    icon: Users,
    title: "Parental Leave",
    description: "16 weeks paid leave for all new parents, plus gradual return program.",
  },
  {
    icon: Zap,
    title: "401(k) Match",
    description: "4% company match on retirement contributions from day one.",
  },
];

const cultureValues = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're building technology that makes a real difference in people's lives.",
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We encourage experimentation and celebrate learning from failures.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "The best ideas come from diverse perspectives working together.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Open communication and honest feedback are the foundation of our culture.",
  },
];

const departments = ["All Departments", "Engineering", "AI Research", "Design", "Infrastructure", "Operations", "Sales"];

const Careers = () => {
  const { toast } = useToast();
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
  });

  const filteredJobs = selectedDepartment === "All Departments"
    ? jobListings
    : jobListings.filter(job => job.department === selectedDepartment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      linkedin: "",
      portfolio: "",
      coverLetter: "",
    });
    setSelectedJob(null);
  };

  return (
    <PageTransition>
    <>
      <Helmet>
        <title>Careers - Join Our Team | NexaTech</title>
        <meta
          name="description"
          content="Explore career opportunities at NexaTech. Join our innovative team and help shape the future of technology."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium">We're Hiring</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build the Future <span className="text-primary">With Us</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join a team of passionate innovators working on cutting-edge technology
                that transforms how businesses operate worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Remote-First</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>200+ Team Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  <span>5 Global Offices</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture & Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We believe great work comes from great environments. Here's what drives us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {cultureValues.map((value, index) => (
                <GlassCard key={index} className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              ))}
            </div>

            {/* Culture Image/Video Placeholder */}
            <div className="mt-16 max-w-5xl mx-auto">
              <GlassCard className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Life at NexaTech</h3>
                    <p className="text-muted-foreground mb-6">
                      From hackathons to team retreats, we create moments that bring us together.
                      Our culture is built on collaboration, continuous learning, and celebrating
                      each other's wins.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">Weekly learning sessions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">Monthly team celebrations</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">Annual global retreats</span>
                      </li>
                    </ul>
                  </div>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-16 h-16 text-primary/50 mx-auto mb-2" />
                      <p className="text-muted-foreground">Team Photo</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We take care of our team so they can focus on doing their best work.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <GlassCard key={index} className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section id="openings" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find your perfect role and start making an impact.
              </p>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                  className="rounded-full"
                >
                  {dept}
                </Button>
              ))}
            </div>

            {/* Job Cards */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredJobs.map((job) => (
                <GlassCard key={job.id} className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        setSelectedJob(job.id);
                        setFormData(prev => ({ ...prev, position: job.title }));
                        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group"
                    >
                      Apply Now
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Requirements */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium mb-2">Requirements:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No open positions in this department right now.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply Now</h2>
                <p className="text-muted-foreground text-lg">
                  Ready to join our team? Fill out the form below and we'll be in touch.
                </p>
              </div>

              <GlassCard className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position *</Label>
                      <Select
                        value={formData.position}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, position: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobListings.map((job) => (
                            <SelectItem key={job.id} value={job.title}>
                              {job.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile</Label>
                      <Input
                        id="linkedin"
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio / GitHub</Label>
                      <Input
                        id="portfolio"
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea
                      id="coverLetter"
                      required
                      rows={6}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                      placeholder="Tell us why you'd be a great fit for this role..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By submitting, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="outline" size="lg">
              Send General Application
            </Button>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
    </PageTransition>
  );
};

export default Careers;
