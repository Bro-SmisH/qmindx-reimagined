import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AISolutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-12 h-12 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
                AI Solutions
              </h1>
              <p className="text-xl text-center text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Intelligent automation, machine learning, and AI-powered analytics to drive innovation.
              </p>

            </FadeInUp>
          </div>
            <div className="container mx-auto px-4 mt-6">
              <div className="max-w-3xl mx-auto text-center">
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <FadeInUp className="space-y-6">
                <h2 className="text-3xl font-bold">Transform Your Business with AI</h2>
                <p className="text-muted-foreground">
                  Our AI solutions help businesses leverage the power of artificial intelligence
                  to automate processes, gain insights, and make data-driven decisions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Brain className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Machine Learning Solutions</h3>
                      <p className="text-muted-foreground">Custom ML models for your specific business needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Brain className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Natural Language Processing</h3>
                      <p className="text-muted-foreground">Text analysis, chatbots, and language understanding</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Brain className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Computer Vision</h3>
                      <p className="text-muted-foreground">Image and video analysis for automation and insights</p>
                    </div>
                  </li>
                </ul>
              </FadeInUp>

              <FadeInUp className="space-y-6">
                <h2 className="text-3xl font-bold">Our Approach</h2>
                <p className="text-muted-foreground">
                  We follow a systematic approach to implement AI solutions that deliver real business value:
                </p>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent font-semibold">1</span>
                    <div>
                      <h3 className="font-semibold">Assessment</h3>
                      <p className="text-muted-foreground">Evaluate your needs and identify opportunities for AI implementation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent font-semibold">2</span>
                    <div>
                      <h3 className="font-semibold">Development</h3>
                      <p className="text-muted-foreground">Build and train custom AI models tailored to your requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent font-semibold">3</span>
                    <div>
                      <h3 className="font-semibold">Integration</h3>
                      <p className="text-muted-foreground">Seamlessly integrate AI solutions into your existing systems</p>
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

export default AISolutions;