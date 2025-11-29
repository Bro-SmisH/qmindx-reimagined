import { FadeIn } from "@/components/animation/Animations";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogInsights from "@/components/home/BlogInsights";
import CTASection from "@/components/home/CTASection";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <FadeIn>
        <HeroSection />
      </FadeIn>

      {/* Services Overview */}
      <FadeIn>
        <ServicesOverview />
      </FadeIn>

      {/* Technologies Section */}
      <FadeIn>
        <TechnologiesSection />
      </FadeIn>

      {/* Case Studies Preview */}
      <FadeIn>
        <CaseStudyPreview />
      </FadeIn>

      {/* Testimonials Section */}
      <FadeIn>
        <TestimonialsSection />
      </FadeIn>

      {/* Blog Insights */}
      <FadeIn>
        <BlogInsights />
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <CTASection />
      </FadeIn>
    </Layout>
  );
};

export default Home;