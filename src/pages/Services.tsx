import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Smartphone, Cloud, Globe, Database, Lock, Code, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI models, NLP, computer vision, predictive analytics, and intelligent automation solutions.",
      features: ["Custom AI Models", "NLP & Chatbots", "Computer Vision", "Predictive Analytics"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Scalable, responsive web applications and platforms built with cutting-edge technologies.",
      features: ["React & Next.js", "Progressive Web Apps", "E-commerce", "Enterprise Portals"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud migration, optimization, DevOps, and infrastructure management for AWS, Azure, and GCP.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code", "Serverless Architecture"],
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
    },
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with advanced analytics, visualization, and BI solutions.",
      features: ["Data Warehousing", "Business Intelligence", "Data Visualization", "Big Data Processing"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Lock,
      title: "Blockchain & Web3",
      description: "Secure blockchain solutions, smart contracts, DeFi platforms, and decentralized applications.",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Crypto Wallets"],
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to solve unique business challenges and drive growth.",
      features: ["Enterprise Software", "SaaS Products", "API Development", "Legacy Modernization"],
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize processes and accelerate innovation.",
      features: ["Process Automation", "System Integration", "Digital Strategy", "Change Management"],
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6 animate-fade-in-up">
                Comprehensive Digital Solutions for Modern Businesses
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
                From AI and blockchain to cloud and mobile, we deliver cutting-edge technology solutions tailored to your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group border-2 hover:border-accent transition-all duration-300 hover:shadow-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our services can help you achieve your goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <Link to="/case-studies">View Case Studies</Link>
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

export default Services;
