import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  interactive?: boolean;
}

const cardVariants = {
  default: "bg-card text-card-foreground rounded-xl shadow-elegant",
  gradient: "bg-gradient-card text-card-foreground rounded-xl shadow-elegant",
  outlined: "bg-transparent border-2 border-border rounded-xl",
  elevated: "bg-card text-card-foreground rounded-xl shadow-hover hover:shadow-elegant transition-shadow"
};

const paddingClasses = {
  none: "",
  sm: "p-4 md:p-6",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10"
};

export const Card = ({ 
  children, 
  className, 
  variant = "default", 
  padding = "md",
  interactive = false
}: CardProps) => (
  <div className={cn(
    cardVariants[variant],
    paddingClasses[padding],
    interactive && "cursor-pointer transition-transform hover:scale-[1.02]",
    className
  )}>
    {children}
  </div>
);

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => (
  <div className={cn("mb-6", className)}>
    {children}
  </div>
);

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => (
  <h3 className={cn("text-xl md:text-2xl font-semibold leading-tight", className)}>
    {children}
  </h3>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription = ({ children, className }: CardDescriptionProps) => (
  <p className={cn("text-muted-foreground mt-2 leading-relaxed", className)}>
    {children}
  </p>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => (
  <div className={cn("space-y-4", className)}>
    {children}
  </div>
);

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className }: CardFooterProps) => (
  <div className={cn("mt-6 pt-6 border-t border-border/50", className)}>
    {children}
  </div>
);