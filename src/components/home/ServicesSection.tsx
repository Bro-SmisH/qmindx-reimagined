import { Brain, Smartphone, Cloud, Globe, Database, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/layout/Card";
import { H2, Body, GradientText } from "@/components/typography";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation, machine learning, and AI-powered analytics to drive innovation.",
      gradient: "from-accent/20 to-accent/5",
      link: "/services/ai-solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
      link: "/services/mobile-development",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Scalable web applications and platforms built with modern technologies.",
      gradient: "from-accent/20 to-accent/5",
      link: "/services/web-development",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud migration, optimization, and management for AWS, Azure, and GCP.",
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
      link: "/services/cloud-services",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics.",
      gradient: "from-accent/20 to-accent/5",
      link: "/services/data-analytics",
    },
    {
      icon: Lock,
      title: "Blockchain & Web3",
      description: "Secure blockchain solutions, smart contracts, and decentralized applications.",
      gradient: "from-cyan-accent/20 to-cyan-accent/5",
      link: "/services/blockchain-web3",
    },
  ];

  return (
    <Section background="background" padding="large">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          className="text-accent font-semibold text-sm uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full inline-block mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Services
        </motion.span>
        <H2 className="!text-3xl sm:!text-4xl lg:!text-5xl mb-6">
          Comprehensive <GradientText>Digital Solutions</GradientText>
        </H2>
        <Body className="!text-lg !text-muted-foreground max-w-2xl mx-auto">
          From AI to blockchain, we deliver cutting-edge technology solutions 
          tailored to your business needs.
        </Body>
      </motion.div>

      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Link to={service.link || "#"}>
              <Card
                variant="elevated"
                interactive
                padding="large"
                className="group h-full"
              >
                <CardHeader className="space-y-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-accent" />
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Body className="!text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </Body>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ServicesSection;
