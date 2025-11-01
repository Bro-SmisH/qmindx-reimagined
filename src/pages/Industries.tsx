import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Stethoscope, 
  Landmark, 
  Truck,
  Smartphone,
  Home
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Enterprise & SaaS",
      description: "Scalable enterprise solutions and SaaS platforms designed for growth and efficiency.",
      solutions: ["ERP Systems", "CRM Platforms", "Workflow Automation", "Business Intelligence"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Modern commerce solutions with seamless shopping experiences and robust backend systems.",
      solutions: ["Online Marketplaces", "Payment Integration", "Inventory Management", "Omnichannel Solutions"],
    },
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      description: "Innovative learning platforms and educational technology solutions for modern education.",
      solutions: ["LMS Platforms", "Virtual Classrooms", "Student Portals", "Assessment Tools"],
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Wellness",
      description: "HIPAA-compliant healthcare solutions that improve patient care and operational efficiency.",
      solutions: ["Telemedicine Platforms", "Patient Management", "Health Analytics", "Medical Records Systems"],
    },
    {
      icon: Landmark,
      title: "Finance & Banking",
      description: "Secure fintech solutions with advanced security and regulatory compliance.",
      solutions: ["Digital Banking", "Payment Gateways", "Wealth Management", "Blockchain Solutions"],
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "End-to-end logistics solutions for tracking, optimization, and automation.",
      solutions: ["Fleet Management", "Route Optimization", "Warehouse Systems", "Supply Chain Analytics"],
    },
    {
      icon: Smartphone,
      title: "Media & Entertainment",
      description: "Engaging digital experiences for content delivery and audience engagement.",
      solutions: ["Streaming Platforms", "Content Management", "Social Media Apps", "Gaming Solutions"],
    },
    {
      icon: Home,
      title: "Real Estate & PropTech",
      description: "Digital transformation solutions for modern real estate and property management.",
      solutions: ["Property Listings", "Virtual Tours", "CRM for Realtors", "Property Management"],
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
                Industries We Serve
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6 animate-fade-in-up">
                Tailored Solutions for Every Industry
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
                We deliver industry-specific solutions that address unique challenges and drive measurable results across diverse sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="group border-2 hover:border-accent transition-all duration-300 hover:shadow-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-7 h-7 text-accent" />
                    </div>
                    <CardTitle level={3} className="text-xl font-bold group-hover:text-accent transition-colors">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {industry.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground mb-2">Key Solutions:</div>
                      <ul className="space-y-1">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
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
                Don't See Your Industry Listed?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We have experience across many more sectors. Let's discuss how we can create a custom solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/contact">Contact Our Team</Link>
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

export default Industries;
