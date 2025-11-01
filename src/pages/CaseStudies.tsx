import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Platform",
      industry: "E-commerce",
      challenge: "A leading e-commerce company needed to scale customer support while reducing response times and operational costs.",
      solution: "We developed an AI-powered chatbot integrated with their existing CRM, using NLP to handle 80% of customer inquiries automatically.",
      results: [
        { metric: "70%", label: "Reduction in Support Costs" },
        { metric: "3x", label: "Faster Response Times" },
        { metric: "95%", label: "Customer Satisfaction" },
      ],
      tags: ["AI/ML", "NLP", "Chatbot"],
    },
    {
      title: "Enterprise Cloud Migration",
      industry: "Finance",
      challenge: "A financial services company required secure cloud migration of legacy systems while maintaining compliance and zero downtime.",
      solution: "We architected a phased migration to AWS with enhanced security, implemented DevOps practices, and ensured GDPR compliance.",
      results: [
        { metric: "60%", label: "Infrastructure Cost Savings" },
        { metric: "99.99%", label: "System Uptime" },
        { metric: "4x", label: "Deployment Speed" },
      ],
      tags: ["Cloud", "AWS", "DevOps", "Security"],
    },
    {
      title: "Blockchain Supply Chain Solution",
      industry: "Logistics",
      challenge: "A logistics provider needed transparent, immutable tracking for international shipments to prevent fraud and improve efficiency.",
      solution: "We built a blockchain-based supply chain platform with smart contracts for automated verification and real-time tracking.",
      results: [
        { metric: "85%", label: "Reduced Fraud Incidents" },
        { metric: "50%", label: "Faster Processing" },
        { metric: "100%", label: "Shipment Visibility" },
      ],
      tags: ["Blockchain", "Smart Contracts", "Web3"],
    },
    {
      title: "Mobile Health & Wellness App",
      industry: "Healthcare",
      challenge: "A healthcare startup wanted to create a comprehensive wellness platform connecting patients, doctors, and health data.",
      solution: "We developed a HIPAA-compliant mobile app with telemedicine, health tracking, and AI-powered health recommendations.",
      results: [
        { metric: "100K+", label: "Active Users" },
        { metric: "4.8/5", label: "App Store Rating" },
        { metric: "40%", label: "Improved Patient Engagement" },
      ],
      tags: ["Mobile", "Healthcare", "AI", "Telemedicine"],
    },
    {
      title: "EdTech Learning Management System",
      industry: "Education",
      challenge: "An educational institution needed a scalable LMS to support remote learning for 50,000+ students with interactive features.",
      solution: "We created a cloud-based LMS with virtual classrooms, assessment tools, analytics dashboards, and mobile accessibility.",
      results: [
        { metric: "50K+", label: "Students Supported" },
        { metric: "90%", label: "Engagement Rate" },
        { metric: "65%", label: "Improved Learning Outcomes" },
      ],
      tags: ["EdTech", "LMS", "Cloud", "Mobile"],
    },
    {
      title: "Real Estate PropTech Platform",
      industry: "Real Estate",
      challenge: "A real estate agency wanted to modernize their operations with virtual tours, AI-powered recommendations, and digital transactions.",
      solution: "We built a comprehensive PropTech platform with 3D virtual tours, predictive pricing models, and integrated property management.",
      results: [
        { metric: "3x", label: "Increase in Listings" },
        { metric: "45%", label: "Faster Sales Cycles" },
        { metric: "80%", label: "Digital Transaction Rate" },
      ],
      tags: ["PropTech", "AI", "Virtual Tours", "CRM"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
  <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider">
                Case Studies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6 animate-fade-in-up">
                Success Stories That Drive Innovation
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
                Discover how we've helped businesses across industries transform with technology and achieve measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left Column - Details */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-semibold text-accent">{study.industry}</span>
                            {study.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            {study.title}
                          </h3>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-accent" />
                            Challenge
                          </h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-accent" />
                            Solution
                          </h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>

                      {/* Right Column - Results */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" />
                          Results
                        </h4>
                        {study.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-card rounded-xl p-4 border border-border"
                          >
                            <div className="text-3xl font-bold text-accent mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help you achieve similar results and transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 group">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
