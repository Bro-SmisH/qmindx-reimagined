import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const services = [
    "AI Solutions",
    "Web Development",
    "Mobile Apps",
    "Cloud Services",
    "Blockchain",
    "Digital Transformation",
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-bold">QmindX</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Leading technology company delivering cutting-edge AI and digital solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-primary-foreground/80">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@qmindx.com" className="hover:text-accent transition-colors">
                  info@qmindx.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-primary-foreground/80">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3 text-primary-foreground/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Tech Street, Innovation City, IN 12345</span>
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
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
