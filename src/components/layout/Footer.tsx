import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fetchServices } from "@/lib/mockData";

interface FooterProps {
  variant?: "default" | "minimal";
}

interface FooterServiceLink {
  name: string;
  path: string;
}

const staffingServices: FooterServiceLink[] = [
  { name: "Hire Android Developer", path: "/staffing/hire-android-developer" },
  { name: "Hire DevOps Developer", path: "/staffing/hire-devops-developer" },
  { name: "Hire iOS Developer", path: "/staffing/hire-ios-developer" },
  { name: "Hire PHP Developer", path: "/staffing/hire-php-developer" },
  { name: "Hire Magento Developers", path: "/staffing/hire-magento-developers" },
  { name: "Hire NodeJS Developers", path: "/staffing/hire-nodejs-developers" },
  { name: "Hire ReactJS Developers", path: "/staffing/hire-reactjs-developers" },
  { name: "Hire Apple Watch Developers", path: "/staffing/hire-apple-watch-developers" },
  { name: "Hire WordPress Developer", path: "/staffing/hire-wordpress-developer" },
  { name: "Hire React Native Developer", path: "/staffing/hire-react-native-developer" },
];

const Footer = ({ variant = "default" }: FooterProps) => {
  const [services, setServices] = useState<FooterServiceLink[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchServices();
        if (data) {
          setServices(data.map((s: any) => ({
            name: s.title,
            path: s.link || `/services/${s.slug}`
          })).slice(0, 7)); // Limit to 7 items
        }
      } catch (e) {
        console.error("Failed to load footer services", e);
      }
    };
    load();
  }, []);

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (variant === "minimal") {
    return (
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-blue-bright rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">Q</span>
              </div>
              <span className="text-xl font-bold">QmindX</span>
            </div>
            <p className="text-primary-foreground/60 text-sm text-center md:text-right">
              © {new Date().getFullYear()} QmindX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  "bg-gradient-to-br from-accent to-blue-bright"
                )}
              >
                <span className="text-primary-foreground font-bold text-xl">Q</span>
              </div>
              <div>
                <span className="text-2xl font-bold">QmindX</span>
                <p className="text-primary-foreground/70 text-sm">Digital Excellence</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Leading technology company delivering cutting-edge AI and digital solutions for modern businesses.
            </p>
            <div className="flex space-x-3 mb-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-primary-foreground/80 hover:text-accent transition-all duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Staffing Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Staffing Services</h3>
            <ul className="space-y-3">
              {staffingServices.map((staff) => (
                <li key={staff.path}>
                  <Link
                    to={staff.path}
                    className="text-primary-foreground/80 hover:text-accent transition-all duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {staff.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/80 hover:text-accent transition-all duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-primary-foreground/80">
                <Mail size={18} className="mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:info@qmindx.com" className="hover:text-accent transition-colors">
                  info@qmindx.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-primary-foreground/80">
                <Phone size={18} className="mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3 text-primary-foreground/80">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-accent" />
                <span className="leading-relaxed">
                  123 Tech Street<br />Innovation City, IN 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} QmindX. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/30">•</span>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="ml-4 p-2 rounded-full bg-primary-foreground/10 hover:bg-accent/20 transition-all duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
