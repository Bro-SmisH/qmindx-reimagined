import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-12 h-12 text-accent" />
              </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
                Web Development
              </h1>
              <p className="text-xl text-center text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Modern web solutions that drive business growth and user engagement.
              </p>
            </FadeInUp>
          </div>
            <div className="container mx-auto px-4 mt-6">
              <div className="max-w-3xl mx-auto text-center">
                <Button asChild variant="secondary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <FadeInUp className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Modern Web Platforms</h2>
                <p className="text-muted-foreground">
                  We build fast, accessible, and maintainable web applications using React, TypeScript, and modern tooling.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Globe className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Frontend Engineering</h3>
                      <p className="text-muted-foreground">Component-driven architecture, performance optimizations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Backend & APIs</h3>
                      <p className="text-muted-foreground">Scalable API design and microservices</p>
                    </div>
                  </li>
                </ul>
              </FadeInUp>

              <FadeInUp className="space-y-6">
                <h2 className="text-3xl font-bold">Delivery & Quality</h2>
                <p className="text-muted-foreground">
                  CI/CD, automated testing, and observability are standard in our delivery process.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;