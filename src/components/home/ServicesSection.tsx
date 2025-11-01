import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Smartphone, Cloud, Globe, Database, Lock } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation, machine learning, and AI-powered analytics to drive innovation.",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Scalable web applications and platforms built with modern technologies.",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud migration, optimization, and management for AWS, Azure, and GCP.",
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics.",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Lock,
      title: "Blockchain & Web3",
      description: "Secure blockchain solutions, smart contracts, and decentralized applications.",
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI to blockchain, we deliver cutting-edge technology solutions 
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-2 hover:border-accent transition-all duration-300 hover:shadow-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
