import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  BookOpen,
  Tag
} from "lucide-react";

// Blog post data - in a real app this would come from an API
const blogPosts: Record<string, {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}> = {
  "1": {
    id: 1,
    title: "The Future of AI in Enterprise: Trends to Watch in 2025",
    excerpt: "Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics that drive business growth.",
    content: [
      "Artificial intelligence is no longer a futuristic concept—it's a present-day reality that's fundamentally transforming how enterprises operate. As we look ahead to 2025, several key trends are emerging that will shape the AI landscape in business.",
      "## Generative AI Goes Enterprise",
      "The explosive growth of generative AI in 2023-2024 has set the stage for widespread enterprise adoption. Companies are moving beyond experimental chatbots to deploy AI systems that generate code, create marketing content, and even assist in product design. The key shift is toward enterprise-grade solutions with proper governance, security, and integration capabilities.",
      "## Autonomous Decision-Making",
      "Perhaps the most significant trend is the evolution from AI-assisted decision-making to autonomous decision-making in specific domains. Supply chain optimization, dynamic pricing, and fraud detection are areas where AI systems are increasingly making decisions without human intervention, albeit within carefully defined parameters.",
      "## The Rise of AI Agents",
      "AI agents—systems that can plan, execute, and learn from multi-step tasks—are becoming increasingly sophisticated. These agents can handle complex workflows, from customer service escalations to data analysis pipelines, reducing the need for human oversight while improving consistency and speed.",
      "## Democratization Through No-Code AI",
      "The barrier to AI adoption is lowering dramatically. No-code and low-code AI platforms are enabling business users to build and deploy AI solutions without extensive technical expertise. This democratization is accelerating innovation across departments, from HR to finance to operations.",
      "## Ethical AI and Governance",
      "As AI systems become more powerful and autonomous, the focus on ethical AI and governance is intensifying. Organizations are establishing AI ethics boards, implementing bias detection frameworks, and creating transparency reports. Regulatory compliance is becoming a key consideration in AI deployment strategies.",
      "## Edge AI and Real-Time Processing",
      "The combination of edge computing and AI is enabling real-time processing at unprecedented scales. Manufacturing, healthcare, and retail are seeing applications where AI models run directly on devices, enabling instant decisions without the latency of cloud communication.",
      "## Looking Ahead",
      "The enterprises that will thrive in 2025 and beyond are those that view AI not as a technology project but as a fundamental business transformation. This means investing in AI literacy across the organization, building robust data infrastructure, and creating a culture that embraces experimentation and continuous learning.",
      "The future of AI in enterprise is not about replacing humans—it's about augmenting human capabilities and enabling organizations to operate at scales and speeds previously unimaginable. The companies that understand this distinction will be the ones that lead their industries in the years to come."
    ],
    author: {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      bio: "Dr. Sarah Chen leads our AI and machine learning initiatives with over 15 years of experience in enterprise AI. She holds a Ph.D. in Computer Science from Stanford and has published extensively on AI ethics and governance.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
    },
    date: "December 20, 2024",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    tags: ["AI", "Enterprise", "Trends", "2025", "Machine Learning"]
  },
  "2": {
    id: 2,
    title: "Zero Trust Architecture: A Complete Implementation Guide",
    excerpt: "Learn how to implement zero trust security in your organization with our step-by-step guide covering identity, devices, and network security.",
    content: [
      "In today's threat landscape, the traditional perimeter-based security model is no longer sufficient. Zero Trust Architecture (ZTA) represents a fundamental shift in how organizations approach security—one that assumes no implicit trust and continuously verifies every request.",
      "## Understanding Zero Trust Principles",
      "Zero Trust is built on a simple premise: never trust, always verify. This means every user, device, and network flow must be authenticated and authorized before accessing resources. The shift from perimeter security to zero trust requires rethinking how we design and implement security controls.",
      "## Step 1: Identify Your Protect Surface",
      "Start by identifying your most critical assets—what we call the 'protect surface.' This includes sensitive data, applications, assets, and services (DAAS). Unlike the attack surface, which is vast and ever-expanding, the protect surface is manageable and can be effectively secured.",
      "## Step 2: Map Transaction Flows",
      "Understanding how traffic moves across your network is crucial. Map the transaction flows that access your protect surface. This visibility enables you to design appropriate controls and segmentation strategies.",
      "## Step 3: Build Your Zero Trust Architecture",
      "With transaction flows mapped, you can begin architecting your zero trust environment. This typically involves implementing micro-segmentation, deploying next-generation firewalls, and establishing identity-based access controls.",
      "## Step 4: Create Zero Trust Policies",
      "Zero trust policies should follow the principle of least privilege. Define who can access what resources, from which devices, and under what conditions. These policies should be dynamic, adapting based on risk signals and behavioral analytics.",
      "## Step 5: Monitor and Maintain",
      "Zero trust is not a one-time implementation—it's an ongoing process. Continuous monitoring, regular policy reviews, and incident response capabilities are essential to maintaining a strong security posture.",
      "## Common Implementation Challenges",
      "Organizations often struggle with legacy systems, user resistance, and the complexity of migrating existing workloads. Success requires executive sponsorship, phased implementation, and clear communication of security benefits.",
      "## Conclusion",
      "Implementing zero trust is a journey, not a destination. Start with your most critical assets, build momentum through quick wins, and continuously evolve your security posture as threats and technologies change."
    ],
    author: {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      bio: "Michael Rodriguez brings 20+ years of cybersecurity experience to his role leading our security practice. He's a certified CISSP and has helped numerous Fortune 500 companies implement zero trust frameworks.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    date: "December 18, 2024",
    readTime: "12 min read",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
    tags: ["Security", "Zero Trust", "Implementation", "Cybersecurity"]
  },
  "3": {
    id: 3,
    title: "Kubernetes at Scale: Lessons from Managing 10,000 Containers",
    excerpt: "Real-world insights from our team on managing large-scale Kubernetes deployments, including automation strategies and cost optimization.",
    content: [
      "Managing Kubernetes at scale is a different beast entirely from running a small development cluster. When you're orchestrating 10,000+ containers across multiple clusters, every decision has amplified consequences. Here's what we've learned from operating at scale.",
      "## The Scale Challenge",
      "At 10,000 containers, problems that were minor annoyances become critical issues. A 1% failure rate means 100 failing containers. Network latency adds up. Storage I/O becomes a bottleneck. Everything that 'works fine' at smaller scales starts to show cracks.",
      "## Automation Is Non-Negotiable",
      "Manual operations simply don't work at scale. We've invested heavily in GitOps practices, using ArgoCD for continuous deployment and Helm for templating. Every configuration change goes through version control, enabling audit trails and rollback capabilities.",
      "## Resource Management and Cost Optimization",
      "Resource requests and limits become critical at scale. We use vertical pod autoscaling to right-size workloads and horizontal pod autoscaling for handling variable loads. Regular resource audits help identify over-provisioned deployments and reduce cloud spend.",
      "## Observability Stack",
      "You can't manage what you can't measure. Our observability stack includes Prometheus for metrics, Loki for logs, Jaeger for tracing, and Grafana for visualization. Custom dashboards give teams visibility into their specific workloads while SRE teams monitor cluster-wide health.",
      "## Network Policies and Security",
      "With thousands of containers, network security becomes paramount. We implement network policies as code, using Calico for network segmentation. Every namespace has default deny policies, with explicit allow rules for legitimate traffic.",
      "## Multi-Cluster Strategy",
      "Single cluster Kubernetes has limits. We operate multiple clusters across regions for redundancy and performance. Cluster federation enables consistent policy application, while each cluster maintains independence for failure isolation.",
      "## Lessons Learned",
      "The biggest lesson? Start with operational excellence from day one. Technical debt at scale is exponentially harder to address. Invest in automation, observability, and documentation before you need them.",
      "## Looking Forward",
      "As we continue to scale, we're exploring service mesh architectures with Istio, eBPF-based observability tools, and more sophisticated cost allocation mechanisms. The Kubernetes ecosystem continues to evolve, and so must our practices."
    ],
    author: {
      name: "James Liu",
      role: "Principal Cloud Architect",
      bio: "James Liu has been architecting cloud-native solutions for over a decade. As Principal Cloud Architect, he leads our Kubernetes practice and has helped numerous enterprises migrate to container-based architectures.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
    },
    date: "December 15, 2024",
    readTime: "10 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=600&fit=crop",
    tags: ["Kubernetes", "DevOps", "Cloud", "Containers", "Scale"]
  }
};

// Related posts data
const allPosts = [
  { id: 1, title: "The Future of AI in Enterprise: Trends to Watch in 2025", category: "AI & Machine Learning", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop", readTime: "8 min read" },
  { id: 2, title: "Zero Trust Architecture: A Complete Implementation Guide", category: "Cybersecurity", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop", readTime: "12 min read" },
  { id: 3, title: "Kubernetes at Scale: Lessons from Managing 10,000 Containers", category: "Cloud Computing", image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop", readTime: "10 min read" },
  { id: 4, title: "Building Ethical AI: Principles and Best Practices", category: "AI & Machine Learning", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop", readTime: "7 min read" },
  { id: 5, title: "Multi-Cloud Strategy: Avoiding Vendor Lock-in", category: "Cloud Computing", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop", readTime: "9 min read" },
  { id: 6, title: "Digital Transformation in Healthcare: A 2024 Retrospective", category: "Digital Transformation", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop", readTime: "6 min read" }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogPosts[id] : null;
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get related posts (same category, different id)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // If not enough related posts from same category, add from other categories
  if (relatedPosts.length < 3) {
    const otherPosts = allPosts
      .filter(p => p.id !== post.id && !relatedPosts.find(rp => rp.id === p.id))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} - NexusTech Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-8">
            {post.excerpt}
          </p>
          
          {/* Author Preview */}
          <div className="flex items-center gap-4 mb-8">
            <img 
              src={post.author.image} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden aspect-[2/1]">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar - Share */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32 space-y-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Share</p>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-7 max-w-none">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content.map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Mobile Share */}
              <div className="mt-8 lg:hidden">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground">Share:</p>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Facebook className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar - Author & TOC */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Author Bio */}
                <GlassCard className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={post.author.image} 
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold">{post.author.name}</p>
                      <p className="text-sm text-primary">{post.author.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.author.bio}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <User className="w-4 h-4 mr-2" />
                    View All Articles
                  </Button>
                </GlassCard>
                
                {/* Table of Contents */}
                <GlassCard className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <h3 className="font-bold">In This Article</h3>
                  </div>
                  <ul className="space-y-2">
                    {post.content
                      .filter(p => p.startsWith("## "))
                      .map((heading, index) => (
                        <li key={index}>
                          <a 
                            href="#" 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                          >
                            {heading.replace("## ", "")}
                          </a>
                        </li>
                      ))}
                  </ul>
                </GlassCard>
                
                {/* Newsletter CTA */}
                <GlassCard className="p-6 bg-primary text-primary-foreground">
                  <h3 className="font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get the latest insights delivered to your inbox weekly.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/blog">Subscribe to Newsletter</Link>
                  </Button>
                </GlassCard>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Related Articles</h2>
            <Button variant="ghost" asChild>
              <Link to="/blog" className="group">
                View All
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                <GlassCard className="overflow-hidden group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground text-xs">
                      {relatedPost.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NexusTech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
