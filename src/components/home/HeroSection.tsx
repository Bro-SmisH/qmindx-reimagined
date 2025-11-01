import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(78,124,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,124,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            AI First Digital Innovation
            <br />
            <span className="text-accent">for Modern Businesses</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI. Mobile. Web. Cloud. Analytics.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Web3. Blockchain. Crypto.
          </p>
          <p className="text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Bespoke solutions to drive growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button asChild size="lg" variant="default" className="rounded-full px-8 group">
              <Link to="/contact">
                Consult With Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Partner Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-primary-foreground/90 text-sm font-medium">AWS Consulting Partner</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-cyan-accent rounded-full"></div>
              <span className="text-primary-foreground/90 text-sm font-medium">AI Innovation Leader</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-primary-foreground/90 text-sm font-medium">Cloud Solutions Expert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
