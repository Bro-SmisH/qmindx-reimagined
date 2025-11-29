# QMindX Design System Documentation

## Overview

This document serves as the comprehensive reference for the QMindX design system, ensuring consistent implementation across all feature modules and maintaining visual coherence with the home page design.

## Design Tokens

### Color Palette

#### CSS Variables (HSL Format)
```css
/* Light Theme */
--background: hsl(0 0% 100%);
--foreground: hsl(222.2 84% 4.9%);
--card: hsl(0 0% 100%);
--card-foreground: hsl(222.2 84% 4.9%);
--popover: hsl(0 0% 100%);
--popover-foreground: hsl(222.2 84% 4.9%);
--primary: hsl(221.2 83.2% 53.3%);
--primary-foreground: hsl(210 40% 98%);
--secondary: hsl(210 40% 96.1%);
--secondary-foreground: hsl(222.2 47.4% 11.2%);
--muted: hsl(210 40% 96.1%);
--muted-foreground: hsl(215.4 16.3% 46.9%);
--accent: hsl(210 40% 96.1%);
--accent-foreground: hsl(222.2 47.4% 11.2%);
--destructive: hsl(0 84.2% 60.2%);
--destructive-foreground: hsl(210 40% 98%);
--border: hsl(214.3 31.8% 91.4%);
--input: hsl(214.3 31.8% 91.4%);
--ring: hsl(221.2 83.2% 53.3%);
```

#### Tailwind Color Classes
```css
/* Primary Colors */
blue-50: #eff6ff;     blue-100: #dbeafe;    blue-200: #bfdbfe;
blue-300: #93c5fd;     blue-400: #60a5fa;    blue-500: #3b82f6;
blue-600: #2563eb;     blue-700: #1d4ed8;    blue-800: #1e40af;
blue-900: #1e3a8a;     blue-950: #172554;

purple-50: #faf5ff;    purple-100: #f3e8ff;  purple-200: #e9d5ff;
purple-300: #d8b4fe;   purple-400: #c084fc;  purple-500: #a855f7;
purple-600: #9333ea;   purple-700: #7c3aed;  purple-800: #6b21a8;
purple-900: #581c87;   purple-950: #3b0764;

/* Neutral Colors */
gray-50: #f9fafb;      gray-100: #f3f4f6;   gray-200: #e5e7eb;
gray-300: #d1d5db;    gray-400: #9ca3af;   gray-500: #6b7280;
gray-600: #4b5563;     gray-700: #374151;   gray-800: #1f2937;
gray-900: #111827;     gray-950: #030712;

/* Dark Mode Colors */
slate-50: #f8fafc;     slate-100: #f1f5f9;  slate-200: #e2e8f0;
slate-300: #cbd5e1;   slate-400: #94a3b8;  slate-500: #64748b;
slate-600: #475569;    slate-700: #334155;  slate-800: #1e293b;
slate-900: #0f172a;    slate-950: #020617;
```

### Typography System

#### Font Sizes
```css
/* Heading Sizes */
text-4xl: 2.25rem (36px)     - Mobile headings
text-5xl: 3rem (48px)       - Tablet headings  
text-6xl: 3.75rem (60px)    - Desktop headings
text-7xl: 4.5rem (72px)     - Large desktop headings

/* Body Text */
text-base: 1rem (16px)      - Default body text
text-lg: 1.125rem (18px)    - Large body text
text-xl: 1.25rem (20px)     - Extra large body text

/* Small Text */
text-sm: 0.875rem (14px)    - Small text
text-xs: 0.75rem (12px)     - Extra small text
```

#### Font Weights
```css
font-normal: 400            - Body text, descriptions
font-medium: 500             - Emphasized text, links
font-semibold: 600           - Subheadings, important text
font-bold: 700              - Headings, primary CTAs
```

#### Line Heights
```css
leading-tight: 1.25         - Headlines, large text
leading-normal: 1.5          - Body text, paragraphs
leading-relaxed: 1.625      - Long-form content
```

### Spacing System

#### Container Spacing
```css
/* Page Containers */
px-4: 1rem (16px)           - Mobile padding
px-6: 1.5rem (24px)         - Tablet padding  
px-8: 2rem (32px)            - Desktop padding

/* Section Spacing */
py-16: 4rem (64px)          - Mobile section padding
py-20: 5rem (80px)          - Tablet section padding
py-24: 6rem (96px)          - Desktop section padding
```

#### Component Spacing
```css
/* Gap System */
gap-4: 1rem (16px)          - Tight component spacing
gap-6: 1.5rem (24px)        - Standard component spacing
gap-8: 2rem (32px)          - Loose component spacing
gap-12: 3rem (48px)         - Extra loose spacing

/* Margin System */
mb-2: 0.5rem (8px)          - Tight margins
mb-4: 1rem (16px)           - Standard margins
mb-6: 1.5rem (24px)         - Loose margins
mb-8: 2rem (32px)           - Extra loose margins
```

### Border Radius System

```css
rounded: 0.25rem (4px)       - Small elements, buttons
rounded-lg: 0.5rem (8px)     - Cards, medium elements
rounded-xl: 0.75rem (12px)   - Large cards, containers
rounded-2xl: 1rem (16px)     - Hero sections, large containers
rounded-full: 9999px         - Circular elements, pills
```

### Shadow System

```css
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)           - Subtle elevation
shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1)                - Standard elevation
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)         - Medium elevation
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)       - High elevation
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)       - Extra high elevation
```

## Component Patterns

### Standard Section Wrapper
```typescript
const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);
```

### Standard Card Component
```typescript
const Card = ({ icon, title, description, features }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {description}
    </p>
    {features && (
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Check className="w-4 h-4 text-blue-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    )}
  </div>
);
```

### Standard Button Patterns

#### Primary Button
```typescript
<Button 
  size="lg" 
  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
>
  Get Started
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
```

#### Secondary Button
```typescript
<Button 
  variant="outline" 
  size="lg"
  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
>
  Learn More
</Button>
```

#### Text Link
```typescript
<Link 
  to="/path"
  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 font-medium inline-flex items-center"
>
  Link Text
  <ArrowRight className="ml-1 h-4 w-4" />
</Link>
```

## Animation System

### Standard Animation Components

#### FadeInUp
```typescript
export const FadeInUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
```

#### FadeIn
```typescript
export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
```

#### ScaleIn
```typescript
export const ScaleIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
```

### Animation Timing Guidelines

#### Duration Standards
- **Micro-interactions**: 0.2-0.3s (hover, focus)
- **Content animations**: 0.5-0.8s (fade in, slide up)
- **Page transitions**: 0.8-1.2s (route changes)
- **Complex sequences**: 1.0-1.5s (staggered animations)

#### Easing Functions
- **easeOut**: For entering animations (most common)
- **easeInOut**: For symmetric animations
- **linear**: For progress indicators
- **spring**: For bouncy, playful interactions

#### Stagger Patterns
```typescript
// Standard stagger delay
const staggerDelay = (index) => index * 0.1;

// Slow stagger delay
const slowStaggerDelay = (index) => index * 0.2;

// Fast stagger delay
const fastStaggerDelay = (index) => index * 0.05;
```

## Responsive Design Patterns

### Breakpoint System

```css
/* Mobile First Approach */
/* Default styles for mobile */
.component { /* Mobile styles */ }

/* Small tablets and up */
@media (min-width: 640px) {
  .component { /* sm styles */ }
}

/* Large tablets and up */
@media (min-width: 768px) {
  .component { /* md styles */ }
}

/* Small desktops and up */
@media (min-width: 1024px) {
  .component { /* lg styles */ }
}

/* Large desktops and up */
@media (min-width: 1280px) {
  .component { /* xl styles */ }
}

/* Extra large desktops and up */
@media (min-width: 1536px) {
  .component { /* 2xl styles */ }
}
```

### Common Responsive Patterns

#### Grid Layouts
```typescript
// Two-column layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Content */}
</div>

// Three-column layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content */}
</div>

// Responsive card grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Cards */}
</div>
```

#### Typography Scaling
```typescript
// Responsive heading
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
  Heading Text
</h1>

// Responsive paragraph
<p className="text-base sm:text-lg lg:text-xl leading-relaxed">
  Paragraph text
</p>
```

## State Management Patterns

### Loading States
```typescript
const LoadingState = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    <span className="ml-3 text-gray-600 dark:text-gray-400">Loading...</span>
  </div>
);
```

### Error States
```typescript
const ErrorState = ({ message, onRetry }) => (
  <div className="text-center py-12">
    <div className="text-red-600 dark:text-red-400 mb-4">
      <AlertCircle className="w-12 h-12 mx-auto mb-2" />
      <p className="font-medium">{message || "Something went wrong"}</p>
    </div>
    {onRetry && (
      <Button onClick={onRetry} variant="outline" size="sm">
        Try Again
      </Button>
    )}
  </div>
);
```

### Empty States
```typescript
const EmptyState = ({ icon: Icon, title, description, action }) => (
  <div className="text-center py-12">
    {Icon && <Icon className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />}
    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6">
      {description}
    </p>
    {action && <div>{action}</div>}
  </div>
);
```

## Accessibility Guidelines

### Color Contrast
- **Normal text**: 4.5:1 contrast ratio minimum
- **Large text**: 3:1 contrast ratio minimum
- **Interactive elements**: 3:1 contrast ratio minimum
- **Focus indicators**: 3:1 contrast ratio minimum

### Focus Management
```css
/* Focus styles */
.focus-visible\:ring-2:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
```

### ARIA Labels
```typescript
// Interactive elements
<button aria-label="Close menu" aria-expanded={isOpen}>
  <X className="w-6 h-6" />
</button>

// Form elements
<input
  aria-label="Email address"
  aria-required="true"
  aria-invalid={errors.email ? "true" : "false"}
  aria-describedby={errors.email ? "email-error" : undefined}
/>
```

## Implementation Checklist

### Before Implementation
- [ ] Review current component usage in home page
- [ ] Identify required customizations for specific use cases
- [ ] Plan responsive behavior for all target devices
- [ ] Consider accessibility requirements

### During Implementation
- [ ] Use consistent CSS variables for colors
- [ ] Apply standard spacing and typography
- [ ] Implement proper animation patterns
- [ ] Add appropriate loading and error states
- [ ] Include proper ARIA labels and roles

### After Implementation
- [ ] Test across all breakpoints
- [ ] Verify color contrast ratios
- [ ] Test keyboard navigation
- [ ] Validate with screen readers
- [ ] Performance test animations
- [ ] Cross-browser compatibility check

## Maintenance Guidelines

### Regular Updates
- Review and update color values when brand guidelines change
- Update animation timing based on user feedback
- Adjust responsive breakpoints based on analytics data
- Refine accessibility features based on testing results

### Documentation Updates
- Keep component examples current with actual usage
- Update code snippets when patterns evolve
- Add new patterns as they're discovered
- Remove deprecated patterns and components

This design system documentation should be treated as a living document that evolves with the project. Regular reviews and updates ensure it remains accurate and useful for all team members.