import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const features = [
    "17+ years of global experience",
    "In-house AI engineers & solution architects",
    "Agile, transparent approach",
    "Enterprise-grade applications",
    "Proven frameworks for faster delivery",
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About QmindX
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Shaping the Future with{" "}
              <span className="text-accent">Scalable, Intelligent,</span> AI-Powered Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At QmindX, we help businesses accelerate growth through AI-powered solutions, 
              digital transformation services, and ready-to-deploy white-label platforms. 
              Whether you're modernizing legacy systems, launching scalable SaaS products, 
              or integrating intelligent automation — we have the expertise to deliver.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With 17+ years of global experience, our team of in-house AI engineers, 
              solution architects, and product specialists has empowered clients across 
              industries and geographies. From strategy to deployment, we deliver 
              enterprise-grade web and mobile applications that drive measurable business outcomes.
            </p>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button asChild size="lg" variant="default" className="rounded-full">
                <Link to="/about">Learn More About QmindX</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/contact">Get an Estimate</Link>
              </Button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-cyan-accent/20 rounded-full blur-3xl"></div>
              <img
                src="https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/salesforce-ai.svg"
                alt="AI Innovation Illustration"
                className="relative z-10 w-full h-auto animate-float"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
