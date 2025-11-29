import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Users, TrendingUp, Clock, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchCaseStudies } from "@/lib/mockData";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudyPreview = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        const data = await fetchCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudies();
  }, []);
  const stats = [
    { label: "Projects Delivered", value: "500+", icon: TrendingUp },
    { label: "Happy Clients", value: "300+", icon: Users },
    { label: "Awards Won", value: "25+", icon: Award }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
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
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={study.id} variants={itemVariants}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">{study.client}</div>
                      <div className="text-sm opacity-90">{study.category}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {study.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {study.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                        Results
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {study.results}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    asChild
                    variant="ghost" 
                    className="group/btn text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 h-auto font-semibold w-full justify-between"
                  >
                    <Link to={study.link} className="flex items-center">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">1140+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">96%</div>
              <div className="text-sm opacity-90">Client Retention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;