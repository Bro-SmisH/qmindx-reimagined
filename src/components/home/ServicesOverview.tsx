import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchServices } from "@/lib/mockData";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { ArrowRight, Code, Smartphone, Cloud, Brain, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type RawService = {
  id?: number | string;
  title?: string;
  description?: string;
  features?: string[];
  icon?: string;
  link?: string;
  category?: string;
};

type ServiceCard = {
  id: number | string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  category?: string;
};

const iconComponents = [Brain, Code, Smartphone, Cloud, Shield, Globe];

const fallbackFeatures = [
  "Discovery workshop",
  "Architecture & solution design",
  "Implementation & QA",
  "Launch & ongoing support",
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const ServicesOverview = () => {
  const [services, setServices] = useState<ServiceCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadServices = async () => {
      try {
        const data = await fetchServices();
        if (cancelled) return;

        const rawList: RawService[] = Array.isArray(data) ? data : [];

        const normalized: ServiceCard[] = rawList.map((item, index) => {
          const IconComponent = iconComponents[index % iconComponents.length];

          return {
            id: item.id ?? index,
            title: item.title ?? "Service",
            description:
              item.description ??
              "Tailored, production-grade solutions designed to move your business forward.",
            features:
              Array.isArray(item.features) && item.features.length > 0
                ? item.features
                : fallbackFeatures,
            icon: IconComponent,
            link: item.link ?? "/services",
            category: item.category,
          };
        });

        setServices(normalized);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadServices();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <LoadingSpinner />
          </div>
        </div>
      </section>
    );
  }

  const displayServices = services;

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-accent font-semibold tracking-wide uppercase mb-3 text-sm">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strategic technology & AI services, built for real-world teams.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From AI strategy to full-stack product development, we help you design, build, and scale
            solutions that have measurable business impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayServices.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border border-border hover:border-primary bg-card/90 backdrop-blur-sm">
                  <div className="p-8 space-y-6">
                    
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          {service.category && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {service.category}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 flex items-center justify-between text-sm">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-primary font-medium group-hover:underline"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        Product-focused delivery
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Have a specific requirement? Let's discuss your project.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
