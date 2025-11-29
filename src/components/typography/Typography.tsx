import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: TypographyProps) => (
  <h1 className={cn(
    "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    "text-foreground leading-tight",
    "scroll-mt-24",
    className
  )}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: TypographyProps) => (
  <h2 className={cn(
    "text-3xl md:text-4xl font-bold tracking-tight",
    "text-foreground leading-tight",
    "scroll-mt-24",
    className
  )}>
    {children}
  </h2>
);

export const H3 = ({ children, className }: TypographyProps) => (
  <h3 className={cn(
    "text-2xl md:text-3xl font-semibold tracking-tight",
    "text-foreground leading-tight",
    "scroll-mt-24",
    className
  )}>
    {children}
  </h3>
);

export const H4 = ({ children, className }: TypographyProps) => (
  <h4 className={cn(
    "text-xl md:text-2xl font-semibold tracking-tight",
    "text-foreground leading-tight",
    "scroll-mt-24",
    className
  )}>
    {children}
  </h4>
);

export const Lead = ({ children, className }: TypographyProps) => (
  <p className={cn(
    "text-lg md:text-xl text-muted-foreground leading-relaxed",
    "max-w-3xl",
    className
  )}>
    {children}
  </p>
);

export const Body = ({ children, className }: TypographyProps) => (
  <p className={cn(
    "text-base text-foreground leading-relaxed",
    "max-w-prose",
    className
  )}>
    {children}
  </p>
);

export const Muted = ({ children, className }: TypographyProps) => (
  <p className={cn(
    "text-sm text-muted-foreground leading-relaxed",
    className
  )}>
    {children}
  </p>
);

export const Subtitle = ({ children, className }: TypographyProps) => (
  <p className={cn(
    "text-base text-muted-foreground leading-relaxed",
    "max-w-2xl",
    className
  )}>
    {children}
  </p>
);

export const Small = ({ children, className }: TypographyProps) => (
  <p className={cn(
    "text-xs text-muted-foreground leading-relaxed",
    className
  )}>
    {children}
  </p>
);

export const GradientText = ({ children, className }: TypographyProps) => (
  <span className={cn(
    "bg-gradient-to-r from-accent to-blue-bright bg-clip-text text-transparent",
    "font-bold",
    className
  )}>
    {children}
  </span>
);

