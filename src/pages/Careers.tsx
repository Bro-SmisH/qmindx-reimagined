import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, DollarSign, Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  const benefits = [
    "Competitive salary and equity options",
    "Comprehensive health insurance",
    "Flexible work arrangements & remote options",
    "Professional development budget",
    "Latest tech stack and tools",
    "Collaborative, innovative culture",
  ];

  const openings = [
    {
      title: "Senior AI Engineer",
      location: "Remote / Hybrid",
      type: "Full-time",
      salary: "$120K - $180K",
      description: "Lead AI/ML initiatives and build intelligent solutions for our enterprise clients.",
    },
    {
      title: "Full Stack Developer (React + Node)",
      location: "New York, NY / Remote",
      type: "Full-time",
      salary: "$90K - $140K",
      description: "Develop scalable web applications using modern JavaScript frameworks and cloud technologies.",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$100K - $160K",
      description: "Build decentralized applications and smart contracts for Web3 projects.",
    },
    {
      title: "Mobile Developer (iOS/Android)",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$95K - $150K",
      description: "Create beautiful, performant mobile applications for iOS and Android platforms.",
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      salary: "$100K - $155K",
      description: "Manage cloud infrastructure, CI/CD pipelines, and ensure system reliability.",
    },
    {
      title: "UX/UI Designer",
      location: "Remote / Hybrid",
      type: "Full-time",
      salary: "$80K - $120K",
      description: "Design intuitive user experiences and beautiful interfaces for web and mobile applications.",
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
                Careers at QmindX
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6 animate-fade-in-up">
                Build the Future with Us
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
                Join a team of passionate innovators working on cutting-edge technology projects that make a real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Why Join QmindX?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Open Positions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Explore our current opportunities and find your perfect role
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {openings.map((job, index) => (
                  <Card
                    key={index}
                    className="group border-2 hover:border-accent transition-all duration-300 hover:shadow-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {job.description}
                      </p>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full group/btn"
                      >
                        <Link to={`/careers/apply/${encodeURIComponent(job.title)}`}>
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
