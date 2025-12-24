import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Search,
  TrendingUp,
  BookOpen,
  Tag
} from "lucide-react";

const categories = [
  { name: "All", count: 12 },
  { name: "AI & Machine Learning", count: 4 },
  { name: "Cloud Computing", count: 3 },
  { name: "Cybersecurity", count: 2 },
  { name: "Digital Transformation", count: 2 },
  { name: "Industry Insights", count: 1 }
];

const featuredPost = {
  id: 1,
  title: "The Future of AI in Enterprise: Trends to Watch in 2025",
  excerpt: "Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics that drive business growth.",
  author: "Dr. Sarah Chen",
  authorRole: "Chief AI Officer",
  date: "December 20, 2024",
  readTime: "8 min read",
  category: "AI & Machine Learning",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  tags: ["AI", "Enterprise", "Trends", "2025"]
};

const articles = [
  {
    id: 2,
    title: "Zero Trust Architecture: A Complete Implementation Guide",
    excerpt: "Learn how to implement zero trust security in your organization with our step-by-step guide covering identity, devices, and network security.",
    author: "Michael Rodriguez",
    date: "December 18, 2024",
    readTime: "12 min read",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    tags: ["Security", "Zero Trust", "Implementation"]
  },
  {
    id: 3,
    title: "Kubernetes at Scale: Lessons from Managing 10,000 Containers",
    excerpt: "Real-world insights from our team on managing large-scale Kubernetes deployments, including automation strategies and cost optimization.",
    author: "James Liu",
    date: "December 15, 2024",
    readTime: "10 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
    tags: ["Kubernetes", "DevOps", "Cloud"]
  },
  {
    id: 4,
    title: "Building Ethical AI: Principles and Best Practices",
    excerpt: "A comprehensive look at how organizations can develop AI systems that are fair, transparent, and aligned with ethical standards.",
    author: "Dr. Aisha Patel",
    date: "December 12, 2024",
    readTime: "7 min read",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
    tags: ["AI Ethics", "Responsible AI", "Governance"]
  },
  {
    id: 5,
    title: "Multi-Cloud Strategy: Avoiding Vendor Lock-in",
    excerpt: "Discover how to leverage multiple cloud providers effectively while maintaining flexibility and controlling costs.",
    author: "Emma Thompson",
    date: "December 10, 2024",
    readTime: "9 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    tags: ["Multi-Cloud", "Strategy", "AWS", "Azure"]
  },
  {
    id: 6,
    title: "Digital Transformation in Healthcare: A 2024 Retrospective",
    excerpt: "How healthcare organizations accelerated their digital initiatives and what it means for patient care going forward.",
    author: "Dr. Robert Kim",
    date: "December 8, 2024",
    readTime: "6 min read",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
    tags: ["Healthcare", "Digital", "Innovation"]
  },
  {
    id: 7,
    title: "The Rise of Edge Computing in IoT Applications",
    excerpt: "Understanding how edge computing is revolutionizing IoT deployments with faster processing and reduced latency.",
    author: "Alex Chen",
    date: "December 5, 2024",
    readTime: "8 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    tags: ["Edge Computing", "IoT", "Infrastructure"]
  }
];

const popularTags = [
  "AI", "Cloud", "Security", "DevOps", "Kubernetes", "Machine Learning", 
  "Digital Transformation", "Data Analytics", "Enterprise", "Innovation"
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog - NexusTech Solutions</title>
        <meta name="description" content="Insights, tutorials, and industry perspectives from the NexusTech team on technology trends and best practices." />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Insights & Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tech Insights &
              <span className="text-primary block mt-2">Industry Perspectives</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert articles, tutorials, and thought leadership from our team of technology professionals.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 pr-4 py-6 text-lg bg-card border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 border-y border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Featured Article</h2>
          </div>
          
          <GlassCard className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto min-h-[300px]">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent md:hidden" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-fit group">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <GlassCard key={article.id} className="overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter */}
              <GlassCard className="p-6">
                <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest insights delivered directly to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" className="bg-background" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </GlassCard>
              
              {/* Popular Tags */}
              <GlassCard className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-bold">Popular Topics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
              
              {/* Recent Posts */}
              <GlassCard className="p-6">
                <h3 className="text-lg font-bold mb-4">Trending This Week</h3>
                <div className="space-y-4">
                  {articles.slice(0, 4).map((article, index) => (
                    <div key={article.id} className="flex gap-3 group cursor-pointer">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{article.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
              
              {/* CTA */}
              <GlassCard className="p-6 bg-primary text-primary-foreground">
                <h3 className="text-lg font-bold mb-2">Need Expert Guidance?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Our team is ready to help you navigate your technology challenges.
                </p>
                <Button variant="secondary" asChild className="w-full">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </GlassCard>
            </div>
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

export default Blog;
