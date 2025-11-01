import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
  <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FadeInUp>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Privacy Policy
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
                <h2>Our Commitment to Privacy</h2>
                <p>
                  At QmindX, we take your privacy seriously. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <h2>Information We Collect</h2>
                <p>
                  We collect information that you voluntarily provide to us when you:
                </p>
                <ul>
                  <li>Contact us through our website</li>
                  <li>Sign up for our newsletter</li>
                  <li>Request a consultation</li>
                  <li>Apply for a position</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>
                  The information we collect is used to:
                </p>
                <ul>
                  <li>Respond to your inquiries</li>
                  <li>Process your requests</li>
                  <li>Send you relevant updates and information</li>
                  <li>Improve our services</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect
                  your personal information from unauthorized access, disclosure, or misuse.
                </p>

                <h2>Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                  If you have questions about our Privacy Policy, please contact us at:
                </p>
                <p>
                  Email: privacy@qmindx.com<br />
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

export default PrivacyPolicy;