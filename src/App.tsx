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
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
