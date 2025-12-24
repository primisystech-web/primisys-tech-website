import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  HelpCircle,
  Shield,
  CreditCard,
  Settings,
  Users,
  Headphones,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const faqCategories = [
  {
    id: "general",
    name: "General",
    icon: HelpCircle,
    description: "Common questions about our company and services",
    questions: [
      {
        question: "What services does PrimisysTech offer?",
        answer: "PrimisysTech offers a comprehensive suite of technology services including AI & Machine Learning solutions, Cloud Infrastructure, Cybersecurity, Custom Software Development, IT Consulting, and Data Analytics. We work with businesses of all sizes to transform their digital capabilities and drive innovation."
      },
      {
        question: "How long has PrimisysTech been in business?",
        answer: "PrimisysTech has been delivering cutting-edge technology solutions for over 10 years. During this time, we've successfully completed 500+ projects for clients across various industries, building a reputation for excellence and innovation."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, education, and government. Our diverse experience allows us to bring cross-industry best practices to every project while understanding the unique challenges of each sector."
      },
      {
        question: "Where is PrimisysTech located?",
        answer: "Our headquarters is located in Lahore, Pakistan, but we work with clients globally. We have a distributed team of experts that can support projects across different time zones and regions."
      },
    ]
  },
  {
    id: "services",
    name: "Services & Solutions",
    icon: Settings,
    description: "Details about our service offerings",
    questions: [
      {
        question: "Can you customize solutions for our specific needs?",
        answer: "Absolutely! Every solution we deliver is tailored to your specific business requirements. We begin each engagement with a thorough discovery phase to understand your unique challenges, goals, and constraints, then design and build solutions that perfectly fit your needs."
      },
      {
        question: "Do you offer ongoing support and maintenance?",
        answer: "Yes, we provide comprehensive support and maintenance packages for all our solutions. This includes 24/7 monitoring, regular updates, security patches, performance optimization, and dedicated support channels to ensure your systems run smoothly."
      },
      {
        question: "What technologies do you specialize in?",
        answer: "We specialize in a wide range of modern technologies including Python, JavaScript/TypeScript, React, Node.js, AWS, Azure, Google Cloud, TensorFlow, PyTorch, Kubernetes, Docker, and many more. Our team stays current with emerging technologies to provide the best solutions."
      },
      {
        question: "How do you handle project management?",
        answer: "We use agile methodologies with regular sprints, stand-ups, and milestone reviews. You'll have access to a dedicated project manager and transparent reporting through our project management tools. We believe in continuous communication and collaboration."
      },
    ]
  },
  {
    id: "pricing",
    name: "Pricing & Billing",
    icon: CreditCard,
    description: "Questions about costs and payment",
    questions: [
      {
        question: "How do you structure your pricing?",
        answer: "Our pricing is flexible and depends on the scope and complexity of your project. We offer fixed-price contracts for well-defined projects, time-and-materials for evolving requirements, and retainer agreements for ongoing support. We'll work with you to find the best model for your needs."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes! We offer a free initial consultation to discuss your project requirements, understand your goals, and provide preliminary recommendations. This helps both parties determine if we're a good fit before any commitment."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including bank transfers, credit cards, and PayPal. For larger projects, we typically structure payments in milestones tied to deliverables to ensure mutual accountability."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we believe in complete transparency. All costs are clearly outlined in our proposals and contracts. Any changes in scope that might affect pricing are discussed and approved before implementation."
      },
    ]
  },
  {
    id: "security",
    name: "Security & Privacy",
    icon: Shield,
    description: "Data protection and security practices",
    questions: [
      {
        question: "How do you protect our data?",
        answer: "We implement industry-leading security practices including encryption at rest and in transit, multi-factor authentication, regular security audits, and compliance with standards like ISO 27001, SOC 2, and GDPR. Your data security is our top priority."
      },
      {
        question: "Do you sign NDAs?",
        answer: "Yes, we're happy to sign Non-Disclosure Agreements before discussing sensitive project details. Confidentiality is fundamental to how we operate, and we take our obligations seriously."
      },
      {
        question: "What happens to our data after the project ends?",
        answer: "Upon project completion, all your data and intellectual property are transferred to you. We can either securely delete all copies from our systems or retain them for ongoing support purposes, depending on your preference and our agreement."
      },
      {
        question: "Are your team members security trained?",
        answer: "Yes, all team members undergo regular security awareness training and are well-versed in secure coding practices, data handling procedures, and compliance requirements. Security is embedded in our development culture."
      },
    ]
  },
  {
    id: "collaboration",
    name: "Working With Us",
    icon: Users,
    description: "The client experience and process",
    questions: [
      {
        question: "How do we get started?",
        answer: "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule an initial consultation to discuss your needs, then provide a proposal outlining our recommended approach, timeline, and investment. Once approved, we'll kick off the project with a discovery phase."
      },
      {
        question: "What does the onboarding process look like?",
        answer: "Our onboarding includes a kick-off meeting to align on goals and expectations, access setup for collaboration tools, introduction to your dedicated team, and establishment of communication channels. We ensure you have everything needed for a smooth collaboration."
      },
      {
        question: "How often will we communicate during the project?",
        answer: "Communication frequency is tailored to your preferences. Typically, we have daily or weekly stand-ups, bi-weekly sprint reviews, and monthly executive summaries. You'll also have direct access to your project manager and team for ad-hoc discussions."
      },
      {
        question: "Can we scale the team up or down during the project?",
        answer: "Yes, we offer flexible team scaling based on project needs. If requirements change or you need to accelerate delivery, we can quickly adjust the team size. We'll always discuss any changes that might impact timeline or budget beforehand."
      },
    ]
  },
  {
    id: "support",
    name: "Support & Maintenance",
    icon: Headphones,
    description: "Post-delivery support options",
    questions: [
      {
        question: "What support options are available?",
        answer: "We offer multiple support tiers: Basic (business hours email support), Standard (extended hours with faster response times), and Premium (24/7 support with dedicated resources). Each tier includes different SLAs to match your business needs."
      },
      {
        question: "How quickly do you respond to support requests?",
        answer: "Response times depend on your support tier and issue severity. Critical issues receive immediate attention, typically within 15 minutes to 1 hour. Standard issues are addressed within 4-24 hours depending on your support level."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, we provide comprehensive training as part of our project delivery. This includes documentation, video tutorials, hands-on training sessions, and ongoing knowledge transfer to ensure your team can effectively use and maintain the delivered solutions."
      },
      {
        question: "What if we need changes after the project is complete?",
        answer: "We're here for the long term! Post-project changes can be handled through a support contract or as a new engagement depending on scope. We maintain all project knowledge and can quickly implement enhancements or modifications."
      },
    ]
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.questions.length, 0);

  return (
    <PageTransition>
      <>
      <Helmet>
        <title>FAQ - PrimisysTech | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about PrimisysTech services, pricing, security, and support. Get the information you need to make informed decisions." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Help Center</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked
              <span className="block text-primary">Questions</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about our services, processes, and policies. 
              Can't find what you're looking for? Contact our support team.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary"
              />
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              {totalQuestions} questions across {faqCategories.length} categories
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery("");
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {faqCategories.map((category) => {
                      const Icon = category.icon;
                      const questionCount = searchQuery 
                        ? filteredCategories.find(c => c.id === category.id)?.questions.length || 0
                        : category.questions.length;
                      
                      return (
                        <button
                          key={category.id}
                          onClick={() => {
                            setActiveCategory(category.id);
                            setSearchQuery("");
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                            activeCategory === category.id
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{category.name}</span>
                          </div>
                          <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                            {questionCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </GlassCard>

                <GlassCard className="p-6 bg-primary/5 border-primary/20">
                  <MessageCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Still have questions?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find the answer you're looking for? Our support team is here to help.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </GlassCard>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {searchQuery ? (
                // Search Results
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground">
                      Search Results for "{searchQuery}"
                    </h2>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-sm text-primary hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                  
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                      <GlassCard key={category.id} className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <category.icon className="w-5 h-5 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((faq, index) => (
                            <AccordionItem key={index} value={`${category.id}-${index}`} className="border-border/50">
                              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </GlassCard>
                    ))
                  ) : (
                    <GlassCard className="p-12 text-center">
                      <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
                      <p className="text-muted-foreground mb-6">
                        We couldn't find any questions matching your search. Try different keywords or browse by category.
                      </p>
                      <Button variant="outline" onClick={() => setSearchQuery("")}>
                        Browse All Categories
                      </Button>
                    </GlassCard>
                  )}
                </div>
              ) : (
                // Category View
                <div className="space-y-8">
                  {faqCategories
                    .filter((cat) => cat.id === activeCategory)
                    .map((category) => (
                      <div key={category.id}>
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-2">
                            <category.icon className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
                          </div>
                          <p className="text-muted-foreground">{category.description}</p>
                        </div>
                        
                        <GlassCard className="p-6">
                          <Accordion type="single" collapsible className="w-full">
                            {category.questions.map((faq, index) => (
                              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                                  <span className="pr-4">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                  {faq.answer}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </GlassCard>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Have a project in mind? Let's discuss how we can help transform your business 
              with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      </>
    </PageTransition>
  );
};

export default FAQ;
