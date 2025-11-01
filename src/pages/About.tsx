import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Target, Lightbulb, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering innovative solutions that drive real business value and measurable outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions using the latest tools and frameworks.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships through transparency and exceptional service.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, security, and performance across all our deliverables.",
    },
  ];

  const milestones = [
    { year: "2006", event: "Company Founded" },
    { year: "2010", event: "500+ Projects Delivered" },
    { year: "2015", event: "Global Expansion" },
    { year: "2020", event: "AI Innovation Lab Launched" },
    { year: "2024", event: "1000+ Projects & Counting" },
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
                About QmindX
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6 animate-fade-in-up">
                Transforming Businesses Through Innovation & Technology
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
                With 17+ years of experience, we're your trusted partner in digital transformation and AI-powered solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2006, QmindX began with a simple mission: to help businesses harness the power of technology to achieve their goals. What started as a small team of passionate developers has grown into a global technology partner serving hundreds of clients across industries.
                </p>
                <p>
                  Over the years, we've evolved from a web development agency to a comprehensive digital solutions provider. Today, we specialize in AI-powered solutions, blockchain technology, cloud services, and digital transformation initiatives that drive measurable business outcomes.
                </p>
                <p>
                  Our team of 300+ expert developers, AI engineers, solution architects, and product specialists work collaboratively to deliver enterprise-grade applications that scale with your business. We're not just building software—we're building lasting partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and shape how we serve our clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-hover transition-all duration-300">
                          <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                          <div className="text-lg text-foreground">{milestone.event}</div>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-accent rounded-full border-4 border-background relative z-10"></div>
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Start Your Digital Transformation?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
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

export default About;
