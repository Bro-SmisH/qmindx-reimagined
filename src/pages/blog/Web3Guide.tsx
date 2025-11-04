import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";

const Web3Guide = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <span className="text-accent font-semibold">Blockchain</span>
                  <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                    Web3 Development: A Comprehensive Guide
                  </h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span>October 22, 2025</span>
                    <span>•</span>
                    <span>10 min read</span>
                  </div>
                </div>

                <img 
                  src="https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/web3-dev.jpg"
                  alt="Web3 Development"
                  className="w-full h-[400px] object-cover rounded-lg mb-12"
                />

                <div className="prose prose-lg max-w-none">
                  <p>
                    Web3 development introduces new paradigms for building decentralized applications and smart contracts.
                  </p>

                  <h2>Core Concepts</h2>
                  <p>
                    Learn about wallets, smart contracts, and decentralized storage systems.
                  </p>

                  <h2>Best Practices</h2>
                  <p>
                    Security audits, deterministic builds, and minimizing on-chain complexity are key to success.
                  </p>

                  <h2>Conclusion</h2>
                  <p>
                    Web3 can enable novel applications, but careful design and security are essential.
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

export default Web3Guide;
