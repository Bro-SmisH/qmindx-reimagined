import { Users, Briefcase, Award, TrendingUp } from "lucide-react";
import Section from "@/components/layout/Section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "300+",
      label: "Expert Developers",
      color: "text-accent",
    },
    {
      icon: Briefcase,
      value: "500+",
      label: "Happy Customers",
      color: "text-cyan-accent",
    },
    {
      icon: Award,
      value: "1140+",
      label: "Projects Delivered",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      value: "96%",
      label: "Client Retention",
      color: "text-cyan-accent",
    },
  ];

  return (
    <Section background="muted" padding="large">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="flex justify-center mb-4">
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center",
                "bg-gradient-to-br from-background to-muted",
                "shadow-lg group-hover:shadow-xl transition-all duration-300",
                "border border-border/50 group-hover:border-accent/50"
              )}>
                <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
            </div>
            <motion.div 
              className="text-4xl md:text-5xl font-bold text-foreground mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {stat.value}
            </motion.div>
            <p className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default StatsSection;
