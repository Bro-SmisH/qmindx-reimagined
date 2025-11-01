import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
  <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FadeInUp>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Terms of Service
                </h1>
                <p className="text-lg text-primary-foreground/80">
                  Last updated: November 1, 2025
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <FadeInUp delay={0.1}>
                <h2>Agreement to Terms</h2>
                <p>
                  By accessing or using QmindX's services, you agree to be bound by these Terms of Service
                  and our Privacy Policy. If you disagree with any part of these terms, you may not
                  access our services.
                </p>

                <h2>Services</h2>
                <p>
                  QmindX provides digital transformation and technology consulting services, including:
                </p>
                <ul>
                  <li>AI and Machine Learning Solutions</li>
                  <li>Web and Mobile Development</li>
                  <li>Cloud Services</li>
                  <li>Digital Transformation Consulting</li>
                  <li>Blockchain Development</li>
                </ul>

                <h2>Intellectual Property</h2>
                <p>
                  The content, features, and functionality of our services are owned by QmindX and
                  are protected by international copyright, trademark, and other intellectual property laws.
                </p>

                <h2>User Responsibilities</h2>
                <p>
                  When using our services, you agree to:
                </p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of any login credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not engage in any unauthorized use of our services</li>
                </ul>

                <h2>Limitation of Liability</h2>
                <p>
                  QmindX shall not be liable for any indirect, incidental, special, consequential,
                  or punitive damages resulting from your use or inability to use our services.
                </p>

                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any
                  material changes by posting an update on our website.
                </p>

                <h2>Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p>
                  Email: legal@qmindx.com<br />
                  Phone: +1 (234) 567-890
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

export default TermsOfService;