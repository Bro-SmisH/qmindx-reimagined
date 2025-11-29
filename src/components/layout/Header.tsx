import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "default" | "transparent" | "solid";
}

const Header = ({ variant = "default" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerRef = useRef<HTMLElement | null>(null);

  // Measure header height and expose as CSS variable so pages can offset content
  useLayoutEffect(() => {
    const setHeaderOffset = () => {
      const el = headerRef.current;
      const height = el ? Math.ceil(el.getBoundingClientRect().height) : 64;
      document.documentElement.style.setProperty("--header-offset", `${height}px`);
    };

    setHeaderOffset();
    window.addEventListener("resize", setHeaderOffset);
    return () => window.removeEventListener("resize", setHeaderOffset);
  }, []);

  // Hide header on scroll down, show on scroll up (but keep visible when mobile menu open)
  useEffect(() => {
    let lastY = window.scrollY;
    const threshold = 10;

    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < threshold) return;

      if (y > lastY && y > 80 && !isMobileMenuOpen) {
        // scrolling down
        setIsHidden(true);
      } else {
        // scrolling up
        setIsHidden(false);
      }

      lastY = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const headerBackground = {
    default: "bg-background/95 backdrop-blur-md",
    transparent: "bg-transparent",
    solid: "bg-background"
  };

  const headerShadow = isScrolled ? "shadow-elegant" : "";
  const headerTransform = isHidden ? "-translate-y-full" : "translate-y-0";

  return (
    <header 
      ref={headerRef} 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerBackground[variant],
        headerShadow,
        headerTransform
      )}
    >
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
              "bg-gradient-to-br from-accent to-blue-bright group-hover:scale-110 group-hover:shadow-lg"
            )}>
              <span className="text-primary-foreground font-bold text-xl">Q</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                QmindX
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                Digital Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                  "hover:bg-accent/10 hover:text-accent",
                  location.pathname === item.path 
                    ? "text-accent bg-accent/10" 
                    : "text-foreground/80 hover:text-foreground"
                )}
                aria-current={location.pathname === item.path ? "page" : undefined}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              variant="default" 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-accent to-blue-bright hover:shadow-lg transition-all duration-300"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-all duration-200",
              "text-foreground/80 hover:text-foreground hover:bg-accent/10"
            )}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                )} 
              />
              <X 
                size={24} 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                )} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav 
            id="mobile-menu"
            className="pt-4 pb-6 border-t border-border/20"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                    "hover:bg-accent/10 hover:text-accent",
                    location.pathname === item.path 
                      ? "text-accent bg-accent/10" 
                      : "text-foreground/80"
                  )}
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild 
                variant="default" 
                size="lg" 
                className="rounded-full mt-4 w-full bg-gradient-to-r from-accent to-blue-bright"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
