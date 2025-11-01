import { Users, Briefcase, Award, TrendingUp } from "lucide-react";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-card rounded-2xl flex items-center justify-center shadow-elegant">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
