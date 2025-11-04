import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";
import { Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CloudServices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <div className="flex items-center justify-center mb-6">
                <Cloud className="w-12 h-12 text-accent" />
              </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
                Cloud Services
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Scalable and secure cloud solutions for modern businesses.
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
                <h2 className="text-3xl font-bold text-foreground">Cloud Strategy & Migration</h2>
                <p className="text-muted-foreground">
                  We help you design cloud architectures and migrate workloads safely and efficiently.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Cloud className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Migration</h3>
                      <p className="text-muted-foreground">Lift-and-shift, refactor, and cloud-native replatforming</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cloud className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Optimization</h3>
                      <p className="text-muted-foreground">Cost and performance tuning</p>
                    </div>
                  </li>
                </ul>
              </FadeInUp>

              <FadeInUp className="space-y-6">
                <h2 className="text-3xl font-bold">Security & Reliability</h2>
                <p className="text-muted-foreground">
                  Security, monitoring, and disaster recovery plans keep your systems resilient.
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

export default CloudServices;
