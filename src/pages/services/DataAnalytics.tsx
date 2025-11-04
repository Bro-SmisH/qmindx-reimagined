import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";
import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataAnalytics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <div className="flex items-center justify-center mb-6">
                <Database className="w-12 h-12 text-accent" />
              </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
                Data Analytics
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Transform your data into actionable insights and strategic decisions.
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
                <h2 className="text-3xl font-bold text-foreground">Analytics & BI</h2>
                <p className="text-muted-foreground">
                  Build dashboards, ETL pipelines, and data platforms to inform decision-making.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Database className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Data Engineering</h3>
                      <p className="text-muted-foreground">Reliable ingestion, transformation, and storage</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="w-6 h-6 mt-1 text-accent" />
                    <div>
                      <h3 className="font-semibold">Advanced Analytics</h3>
                      <p className="text-muted-foreground">Predictive models and reporting</p>
                    </div>
                  </li>
                </ul>
              </FadeInUp>

              <FadeInUp className="space-y-6">
                <h2 className="text-3xl font-bold">Governance & Quality</h2>
                <p className="text-muted-foreground">
                  Data quality, governance, and lineage to ensure trusted insights.
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

export default DataAnalytics;
