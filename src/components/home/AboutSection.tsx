import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Section from "@/components/layout/Section";
import { H2, Body, GradientText } from "@/components/typography";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const features = [
    "17+ years of global experience",
    "In-house AI engineers & solution architects",
    "Agile, transparent approach",
    "Enterprise-grade applications",
    "Proven frameworks for faster delivery",
  ];

  return (
    <Section background="gradient" padding="large">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
              About QmindX
            </span>
          </motion.div>
          
          <H2 className="!text-4xl md:!text-5xl">
            Shaping the Future with{" "}
            <GradientText>Scalable, Intelligent,</GradientText> AI-Powered Solutions
          </H2>
          
          <Body className="!text-lg">
            At QmindX, we help businesses accelerate growth through AI-powered solutions, 
            digital transformation services, and ready-to-deploy white-label platforms. 
            Whether you're modernizing legacy systems, launching scalable SaaS products, 
            or integrating intelligent automation — we have the expertise to deliver.
          </Body>
          
          <Body className="!text-lg">
            With 17+ years of global experience, our team of in-house AI engineers, 
            solution architects, and product specialists has empowered clients across 
            industries and geographies. From strategy to deployment, we deliver 
            enterprise-grade web and mobile applications that drive measurable business outcomes.
          </Body>

          {/* Features List */}
          <motion.div 
            className="space-y-3 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-foreground group-hover:text-accent transition-colors duration-200">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link to="/about">Learn More About QmindX</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-border text-muted-foreground hover:bg-muted/10 transition-all duration-300">
              <Link to="/contact">Get an Estimate</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image/Illustration */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-accent/20 to-blue-bright/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-cyan-accent/20 to-purple-accent/20 rounded-full blur-3xl"></div>
            <motion.img
              src="https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/salesforce-ai.svg"
              alt="AI Innovation Illustration"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;