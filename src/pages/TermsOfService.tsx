import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ScrollText, Mail, Phone } from "lucide-react";

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

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <FadeInUp delay={0.1}>
                {/* Introduction Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader className="space-y-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <ScrollText className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle level={2}>Agreement to Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      By accessing or using QmindX's services, you agree to be bound by these Terms of Service.
                      Please read these terms carefully before using our services.
                    </p>
                  </CardContent>
                </Card>

                {/* Services Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle level={2}>Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our services include but are not limited to:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "AI and Machine Learning Solutions",
                        "Web and Mobile Application Development",
                        "Cloud Infrastructure Services",
                        "Digital Transformation Consulting",
                        "Technical Support and Maintenance"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Intellectual Property Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle level={2}>Intellectual Property</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      All content, features, and functionality of our services are owned by QmindX
                      and are protected by international copyright, trademark, and other intellectual
                      property laws.
                    </p>
                  </CardContent>
                </Card>

                {/* User Responsibilities Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle level={2}>User Responsibilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      When using our services, you agree to:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Provide accurate and complete information",
                        "Maintain the security of your account",
                        "Comply with all applicable laws and regulations",
                        "Use services in accordance with our guidelines"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Limitation of Liability Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle level={2}>Limitation of Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      QmindX shall not be liable for any indirect, incidental, special, consequential,
                      or punitive damages resulting from your use or inability to use our services.
                    </p>
                  </CardContent>
                </Card>

                {/* Changes to Terms Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle level={2}>Changes to Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify or replace these terms at any time. We will provide
                      notice of any significant changes and the new terms will be effective immediately
                      upon posting.
                    </p>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <CardTitle level={2}>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      For questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Email</p>
                          <a href="mailto:legal@qmindx.com" className="text-muted-foreground hover:text-accent transition-colors">
                            legal@qmindx.com
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

export default TermsOfService;
