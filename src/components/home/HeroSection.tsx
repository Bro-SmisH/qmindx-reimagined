import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, FadeInUp, ScaleIn } from "@/components/animation/Animations";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Tech Grid Pattern */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(78,124,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,124,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              AI First Digital Innovation
              <br />
              <span className="text-accent">for Modern Businesses</span>
            </h1>
          </FadeInUp>

          {/* Subheading */}
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
              AI. Mobile. Web. Cloud. Analytics.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Web3. Blockchain. Crypto.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
              Bespoke solutions to drive growth.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <ScaleIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="default" className="rounded-full px-8 group">
                <Link to="/contact">
                  Consult With Us
                  <motion.div
                    className="inline-block ml-2"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </ScaleIn>

          {/* Partner Badges */}
          <FadeIn delay={0.6}>
            <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-primary-foreground/90 text-sm font-medium">AWS Consulting Partner</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="w-2 h-2 bg-cyan-accent rounded-full"></div>
                <span className="text-primary-foreground/90 text-sm font-medium">AI Innovation Leader</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-primary-foreground/90 text-sm font-medium">Cloud Solutions Expert</span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          y: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-3 bg-primary-foreground/50 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
