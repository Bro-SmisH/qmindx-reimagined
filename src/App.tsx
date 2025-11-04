import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/animation/PageTransition";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Industries = lazy(() => import("./pages/Industries"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Careers = lazy(() => import("./pages/Careers"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Blog = lazy(() => import("./pages/Blog"));
// Services
const AISolutions = lazy(() => import("./pages/services/AISolutions"));
const MobileDevelopment = lazy(() => import("./pages/services/MobileDevelopment"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const CloudServices = lazy(() => import("./pages/services/CloudServices"));
const DataAnalytics = lazy(() => import("./pages/services/DataAnalytics"));
const BlockchainWeb3 = lazy(() => import("./pages/services/BlockchainWeb3"));
// Blog posts
const AIEnterpriseBlog = lazy(() => import("./pages/blog/AIEnterprise"));
const CloudInfrastructureBlog = lazy(() => import("./pages/blog/CloudInfrastructure"));
const Web3GuideBlog = lazy(() => import("./pages/blog/Web3Guide"));
const MobileTrendsBlog = lazy(() => import("./pages/blog/MobileTrends"));
// Sitemap
const SiteMapPage = lazy(() => import("./components/layout/SiteMap"));
import Apply from "./pages/Apply";
// import ClaudeDemo from "./pages/ClaudeDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <PageTransition>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/careers" element={<Careers />} />
               <Route path="/careers/apply" element={<Apply />} />
              <Route path="/careers/apply/:role" element={<Apply />} />
              {/* <Route path="/demo/claude" element={<ClaudeDemo />} /> */}
              <Route path="/blog" element={<Blog />} />
              {/* Blog post routes */}
              <Route path="/blog/ai-enterprise" element={<AIEnterpriseBlog />} />
              <Route path="/blog/cloud-infrastructure" element={<CloudInfrastructureBlog />} />
              <Route path="/blog/web3-development" element={<Web3GuideBlog />} />
              <Route path="/blog/mobile-trends" element={<MobileTrendsBlog />} />
              {/* Service routes */}
              <Route path="/services/ai-solutions" element={<AISolutions />} />
              <Route path="/services/mobile-development" element={<MobileDevelopment />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/cloud-services" element={<CloudServices />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/blockchain-web3" element={<BlockchainWeb3 />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="/sitemap" element={<SiteMapPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
