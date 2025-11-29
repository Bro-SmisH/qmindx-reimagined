import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { contactFormSchema } from "@/lib/validations";
import { useState } from "react";
import Section from "@/components/layout/Section";
import { HeroLayout } from "@/components/layout/Layout";
import { H2, Body, GradientText } from "@/components/typography/Typography";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Simulated API call - replace with actual endpoint in production
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <HeroLayout background="gradient" variant="primary">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="text-accent font-semibold text-sm uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in Touch
          </motion.span>
          <H2 className="!text-4xl md:!text-5xl mb-6">
            Let's Build Something <GradientText>Amazing Together</GradientText>
          </H2>
          <Body className="!text-lg !text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Contact our team for a free consultation.
          </Body>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 border border-border/50"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className={cn(
                            "w-full transition-all duration-200",
                            "focus:ring-2 focus:ring-accent focus:border-transparent"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className={cn(
                            "w-full transition-all duration-200",
                            "focus:ring-2 focus:ring-accent focus:border-transparent"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Phone Number (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        className={cn(
                          "w-full transition-all duration-200",
                          "focus:ring-2 focus:ring-accent focus:border-transparent"
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Message *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className={cn(
                          "w-full min-h-[150px] transition-all duration-200",
                          "focus:ring-2 focus:ring-accent focus:border-transparent"
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto rounded-full px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </div>
    </HeroLayout>
  );
};

export default ContactSection;
