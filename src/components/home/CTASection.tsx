import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, Send, MessageCircle, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients"
    },
    {
      icon: TrendingUp,
      number: "1140+",
      label: "Projects Delivered"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@qmindx.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "New York, NY",
      description: "By appointment only"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Transform Your Business?
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Let's discuss how QMindX can help you achieve your digital transformation goals. Our team of experts is ready to bring your vision to life.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-white/90">{info.value}</div>
                      <div className="text-sm text-white/70">{info.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="p-8 bg-card/95 backdrop-blur-sm border border-border/20">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    Get In Touch
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-card border-border text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-card border-border text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-card border-border text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project... *"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="bg-card border-border text-foreground placeholder-muted-foreground resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Or schedule a call directly{" "}
                    <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                      book a consultation
                    </Link>
                  </p>
                </div>
              </div>
            </Card>

            {/* Alternative CTA */}
            <div className="text-center space-y-4">
              <p className="text-lg text-white/90">
                Prefer to discuss over a call?
              </p>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;