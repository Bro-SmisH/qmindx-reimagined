import { FadeIn } from "@/components/animation/Animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Phone } from "lucide-react";

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
                  Learn about how we collect, use, and protect your personal information.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <FadeInUp delay={0.1}>
                {/* Introduction Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader className="space-y-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">Our Commitment to Privacy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      At QmindX, we take your privacy seriously. This Privacy Policy explains how we collect,
                      use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                  </CardContent>
                </Card>

                {/* Information Collection Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We collect information that you voluntarily provide to us when you:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Contact us through our website",
                        "Sign up for our newsletter",
                        "Request a consultation",
                        "Apply for a position"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Information Usage Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">How We Use Your Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      The information we collect is used to:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Respond to your inquiries",
                        "Process your requests",
                        "Send you relevant updates and information",
                        "Improve our services"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Data Security Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Data Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate technical and organizational security measures to protect
                      your personal information from unauthorized access, disclosure, or misuse.
                    </p>
                  </CardContent>
                </Card>

                {/* Your Rights Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      You have the right to:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Access your personal information",
                        "Correct inaccurate information",
                        "Request deletion of your information",
                        "Opt-out of marketing communications"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      If you have questions about our Privacy Policy, please contact us:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Email</p>
                          <a href="mailto:privacy@qmindx.com" className="text-muted-foreground hover:text-accent transition-colors">
                            privacy@qmindx.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Phone</p>
                          <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
