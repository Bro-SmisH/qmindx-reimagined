import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";

const CloudInfrastructure = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <span className="text-accent font-semibold tracking-wide uppercase text-sm">Cloud Computing</span>
                  <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground leading-tight">
                    Building Scalable Cloud Infrastructure: Best Practices
                  </h1>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span>October 25, 2025</span>
                    <span>•</span>
                    <span>7 min read</span>
                  </div>
                </div>

                <img 
                  src="https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/cloud-infra.jpg"
                  alt="Cloud Infrastructure"
                  className="w-full h-[400px] object-cover rounded-lg mb-12"
                />

                <div className="prose prose-lg max-w-none">
                  <p>
                    Designing cloud infrastructure that scales reliably requires careful planning and strong operational practices.
                  </p>

                  <h2>Principles for Scalability</h2>
                  <p>
                    Embrace automation, design for failure, and use managed services where appropriate.
                  </p>

                  <h2>Operational Excellence</h2>
                  <p>
                    Monitoring, alerting, and cost management are essential to keep systems healthy and efficient.
                  </p>

                  <h2>Conclusion</h2>
                  <p>
                    With the right architecture and processes, cloud infrastructure can support rapid growth while remaining cost effective.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CloudInfrastructure;
