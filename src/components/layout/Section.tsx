import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  contained?: boolean; // wrap with container by default
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "transparent" | "secondary" | "primary" | "accent";
}

const paddingClasses = {
  none: "",
  sm: "py-8 md:py-12",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-40"
};

const backgroundClasses = {
  transparent: "",
  secondary: "bg-secondary",
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground"
};

const Section = ({ 
  children, 
  className, 
  contained = true,
  padding = "md",
  background = "transparent",
  ...props 
}: SectionProps) => (
  <section 
    className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )} 
    {...props}
  >
    <div className={cn(
      contained ? "container mx-auto px-4 sm:px-6 lg:px-8" : "w-full",
      "max-w-7xl"
    )}>
      {children}
    </div>
  </section>
);

export default Section;

