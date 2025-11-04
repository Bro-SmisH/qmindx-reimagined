import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";

const MobileTrends = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <span className="text-accent font-semibold tracking-wide uppercase text-sm">Mobile Development</span>
                  <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground leading-tight">
                    Mobile App Development Trends in 2025
                  </h1>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span>October 19, 2025</span>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>
                </div>

                <img 
                  src="https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/mobile-trends.jpg"
                  alt="Mobile Trends"
                  className="w-full h-[400px] object-cover rounded-lg mb-12"
                />

                <div className="prose prose-lg max-w-none">
                  <p>
                    Mobile development continues to evolve with new frameworks, performance improvements, and UX patterns.
                  </p>

                  <h2>Key Trends</h2>
                  <p>
                    Cross-platform frameworks, AI integration, and on-device ML are shaping the mobile landscape.
                  </p>

                  <h2>Design & Performance</h2>
                  <p>
                    Responsiveness, battery optimization, and smooth animations remain essential.
                  </p>

                  <h2>Conclusion</h2>
                  <p>
                    Product-focused mobile engineering combined with modern tooling can deliver delightful user experiences.
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

export default MobileTrends;
