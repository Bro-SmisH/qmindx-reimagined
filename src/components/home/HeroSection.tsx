import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { H1, Lead } from "@/components/typography/Typography";
import { GradientText } from "@/components/typography/Typography";
import { HeroLayout } from "@/components/layout/Layout";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { number: "300+", label: "Expert Developers" },
    { number: "500+", label: "Happy Customers" },
    { number: "1140+", label: "Projects Delivered" },
    { number: "96%", label: "Client Retention" }
  ];

  return (
    <HeroLayout variant="gradient" className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <H1 className="!text-4xl sm:!text-5xl lg:!text-6xl xl:!text-7xl">
                Shaping the Future with{" "}
                <GradientText>
                  Scalable, Intelligent, AI-Powered
                </GradientText>{" "}
                Solutions
              </H1>
              
              <Lead className="!text-lg sm:!text-xl max-w-2xl">
                At QMindX, we help businesses accelerate growth through AI-powered solutions, digital transformation services, and ready-to-deploy white-label platforms. Whether you're modernizing legacy systems, launching scalable SaaS products, or integrating intelligent automation — we have the expertise to deliver.
              </Lead>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-border text-muted-foreground px-8 py-3 rounded-full font-semibold hover:bg-muted/10 transition-all duration-300"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Video */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">AI Innovation</div>
                  <div className="text-muted-foreground">Digital Transformation</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </HeroLayout>
  );
};

export default HeroSection;