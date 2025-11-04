import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MobileDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <div className="flex items-center justify-center mb-6">
                <Smartphone className="w-12 h-12 text-accent" />
              </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
                Mobile Development
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge mobile solutions for iOS and Android platforms.
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
                <h2 className="text-3xl font-bold text-foreground">Build Engaging Mobile Experiences</h2>
                <p className="text-muted-foreground">
                  We design and build performant mobile apps using modern frameworks and platform tooling.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Smartphone className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Cross-Platform Development</h3>
                      <p className="text-muted-foreground">React Native, Flutter, and other frameworks to speed delivery</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Smartphone className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Native Performance</h3>
                      <p className="text-muted-foreground">Optimized native experiences where performance matters</p>
                    </div>
                  </li>
                </ul>
              </FadeInUp>

              <FadeInUp className="space-y-6">
                <h2 className="text-3xl font-bold">Our Process</h2>
                <p className="text-muted-foreground">
                  From UX to deployment, we follow best practices to ensure quality and maintainability.
                </p>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent font-semibold">1</span>
                    <div>
                      <h3 className="font-semibold">Design</h3>
                      <p className="text-muted-foreground">User-centered design and prototyping</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent font-semibold">2</span>
                    <div>
                      <h3 className="font-semibold">Development</h3>
                      <p className="text-muted-foreground">Robust, testable code and CI pipelines</p>
                    </div>
                  </li>
                </ol>
              </FadeInUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MobileDevelopment;
