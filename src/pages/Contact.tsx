import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "info@qmindx.com",
      link: "mailto:info@qmindx.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Tech Street, Innovation City, IN 12345",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
  <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6 animate-fade-in-up">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
                Get in touch with our team to discuss your project and explore how we can help transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent hover:shadow-hover transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.info}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />

        {/* Map Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-muted rounded-2xl overflow-hidden aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="QmindX Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
