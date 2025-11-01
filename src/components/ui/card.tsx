import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, level = 3, ...props }, ref) => {
    const Heading = `h${level}` as keyof JSX.IntrinsicElements;
    const commonProps = { className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props } as React.HTMLAttributes<HTMLElement>;

    switch (level) {
      case 1:
        return <h1 ref={ref as React.Ref<HTMLHeadingElement>} {...(commonProps as React.HTMLAttributes<HTMLHeadingElement>)} />;
      case 2:
        return <h2 ref={ref as React.Ref<HTMLHeadingElement>} {...(commonProps as React.HTMLAttributes<HTMLHeadingElement>)} />;
      case 3:
        return <h3 ref={ref as React.Ref<HTMLHeadingElement>} {...(commonProps as React.HTMLAttributes<HTMLHeadingElement>)} />;
      case 4:
        return <h4 ref={ref as React.Ref<HTMLHeadingElement>} {...(commonProps as React.HTMLAttributes<HTMLHeadingElement>)} />;
      case 5:
        return <h5 ref={ref as React.Ref<HTMLHeadingElement>} {...(commonProps as React.HTMLAttributes<HTMLHeadingElement>)} />;
      default:
        return <h6 ref={ref as React.Ref<HTMLHeadingElement>} {...(commonProps as React.HTMLAttributes<HTMLHeadingElement>)} />;
    }
  },
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
