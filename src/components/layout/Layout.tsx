import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  headerVariant?: "default" | "transparent" | "solid";
  footerVariant?: "default" | "minimal";
}

export const Layout = ({ 
  children, 
  className, 
  showHeader = true, 
  showFooter = true,
  headerVariant = "default",
  footerVariant = "default"
}: LayoutProps) => {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {showHeader && <Header variant={headerVariant} />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer variant={footerVariant} />}
    </div>
  );
};

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
}

export const PageLayout = ({ children, className, contained = true }: PageLayoutProps) => {
  return (
    <div className={cn(
      contained ? "container mx-auto px-4 py-8 md:py-16" : "w-full",
      "max-w-7xl",
      className
    )}>
      {children}
    </div>
  );
};

interface HeroLayoutProps {
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
  background?: "default" | "gradient" | "primary" | "secondary";
}

export const HeroLayout = ({ 
  children, 
  className, 
  contained = true,
  background = "default"
}: HeroLayoutProps) => {
  const backgroundClasses = {
    default: "",
    gradient: "bg-gradient-hero",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary"
  };

  return (
    <section className={cn(
      backgroundClasses[background],
      "relative overflow-hidden"
    )}>
      <div className={cn(
        contained ? "container mx-auto px-4" : "w-full",
        "max-w-7xl py-20 md:py-32 lg:py-40",
        className
      )}>
        {children}
      </div>
    </section>
  );
};