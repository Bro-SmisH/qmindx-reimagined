import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Globe, Layout as LayoutIcon, Server, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/animation/PageTransition";
import { Layout, HeroLayout } from "@/components/layout/Layout";
import { fetchServices } from "@/lib/mockData";

const Services = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const staticServices = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored solutions for your unique business challenges.",
      icon: <Code size={32} />,
      slug: "custom-software-development",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Web Application Development",
      description: "Scalable and responsive web apps built with modern tech.",
      icon: <Globe size={32} />,
      slug: "web-application-development",
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile experiences.",
      icon: <Smartphone size={32} />,
      slug: "mobile-app-development",
      color: "from-orange-500 to-amber-400"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure and migration.",
      icon: <Server size={32} />,
      slug: "cloud-solutions",
      color: "from-emerald-500 to-teal-400"
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "User-centric design that drives engagement and conversion.",
      icon: <LayoutIcon size={32} />,
      slug: "ui-ux-design",
      color: "from-indigo-500 to-violet-400"
    },
    {
      id: 6,
      title: "Data Analytics",
      description: "Turn data into actionable insights for better decision making.",
      icon: <Database size={32} />,
      slug: "data-analytics",
      color: "from-rose-500 to-red-400"
    },
  ];

  const slugify = (value: string): string =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchServices();
        if (data && data.length > 0) {
          const mapped = data.map((item: any, index: number) => ({
            ...item,
            icon: staticServices[index % staticServices.length]?.icon || <Zap size={32} />,
            color: staticServices[index % staticServices.length]?.color || "from-blue-600 to-indigo-600",
            link: item.link || `/services/${slugify(item.slug || item.title || "")}`,
          }));
          setServices(mapped);
        } else {
          setServices(staticServices.map(s => ({ ...s, link: `/services/${s.slug}` })));
        }
      } catch (e) {
        console.error(e);
        setServices(staticServices.map(s => ({ ...s, link: `/services/${s.slug}` })));
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <HeroLayout background="gradient" className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Reality</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            We deliver cutting-edge technology solutions that drive innovation and business growth.
          </p>
        </HeroLayout>

        {/* Services Grid */}
        <section className="py-20 -mt-20 relative z-20">
          <div className="container mx-auto px-6">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Link
                    to={service.link}
                    key={service.id || index}
                    className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-border"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500`} />

                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                      Learn more <ArrowRight size={16} className="ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you achieve your business goals with our custom technology solutions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Services;
