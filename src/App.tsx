import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Team from "./pages/Team";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AIService from "./pages/services/AIService";
import CloudService from "./pages/services/CloudService";
import CybersecurityService from "./pages/services/CybersecurityService";
import SoftwareDevService from "./pages/services/SoftwareDevService";
import ITConsultingService from "./pages/services/ITConsultingService";
import DataAnalyticsService from "./pages/services/DataAnalyticsService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai" element={<AIService />} />
          <Route path="/services/cloud" element={<CloudService />} />
          <Route path="/services/cybersecurity" element={<CybersecurityService />} />
          <Route path="/services/software-development" element={<SoftwareDevService />} />
          <Route path="/services/it-consulting" element={<ITConsultingService />} />
          <Route path="/services/data-analytics" element={<DataAnalyticsService />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
