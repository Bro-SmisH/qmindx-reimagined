import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ContactSection from "@/components/home/ContactSection";
import { PageLayout } from "@/components/layout/Layout";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
