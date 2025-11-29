import { motion } from "framer-motion";
import { Code, Database, Cloud, Smartphone, Brain, Shield, Globe, Zap } from "lucide-react";

const TechnologiesSection = () => {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Angular", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", ".NET", "Go", "PHP"]
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "iOS", "Android", "Ionic", "Xamarin"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      category: "AI/ML",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "Computer Vision"]
    },
    {
      category: "Blockchain",
      items: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts", "DeFi", "NFT"]
    }
  ];

  const capabilities = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built from scratch to meet your unique business requirements."
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Modernization",
      description: "Seamlessly migrate your applications to the cloud with improved performance and scalability."
    },
    {
      icon: Brain,
      title: "AI Integration & Automation",
      description: "Integrate intelligent automation and AI capabilities into your existing workflows."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security implementations and compliance adherence across all solutions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technologies We Master
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((techGroup, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {techGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techGroup.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Core Capabilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond technologies, we excel in delivering comprehensive digital solutions.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">96%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;