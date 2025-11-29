import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchTestimonials } from "@/lib/mockData";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);
  const trustIndicators = [
    { label: "Clutch Rating", value: "4.9/5", platform: "Clutch" },
    { label: "Google Reviews", value: "4.8/5", platform: "Google" },
    { label: "GoodFirms", value: "4.9/5", platform: "GoodFirms" }
  ];

  if (loading) {
    return (
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <LoadingSpinner />
          </div>
        </div>
      </section>
    );
  }

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-muted-foreground"
        }`}
      />
    ));
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with QMindX.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full p-8 space-y-6 bg-card border border-border hover:shadow-2xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to join our list of satisfied clients?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-2 border-border text-muted-foreground px-8 py-3 rounded-full font-semibold hover:bg-muted/10 transition-all duration-300">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Client Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">96%</div>
            <div className="text-sm text-muted-foreground">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;