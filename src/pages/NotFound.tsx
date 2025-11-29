import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/animation/Animations";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Use a warning instead of an error for expected 404 route navigation
    console.warn("404 Warning: Attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-8">
          <FadeInUp>
            <div className="text-9xl font-bold text-primary">404</div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Page Not Found
            </h1>
            <p className="text-muted-foreground">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <Button 
              asChild 
              className="mt-4"
              variant="default"
            >
              <a href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </a>
            </Button>
          </FadeInUp>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;