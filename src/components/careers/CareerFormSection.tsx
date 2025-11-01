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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Upload } from "lucide-react";
import { careerFormSchema } from "@/lib/validations";
import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  role: string;
  resume?: FileList;
  coverLetter: string;
};

const CareerFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeName, setResumeName] = useState<string | null>(null);
  const { role } = useParams();
  const navigate = useNavigate();
  const resumeInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: role || "",
      coverLetter: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      // Create FormData for file upload
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      if (data.phone) formData.append("phone", data.phone);
      formData.append("role", data.role);
      formData.append("coverLetter", data.coverLetter);
      if (data.resume?.[0]) {
        formData.append("resume", data.resume[0]);
      }

      // Simulated API call - replace with actual endpoint in production
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });

      form.reset();
      navigate("/careers"); // Redirect back to careers page
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

  const roles = [
    "Senior AI Engineer",
    "Full Stack Developer",
    "Blockchain Developer",
    "Mobile Developer",
    "DevOps Engineer",
    "UX/UI Designer",
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Join Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
              Apply Now
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Take the first step towards an exciting career at QmindX.
            </p>
          </div>

          {/* Career Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-background rounded-2xl shadow-hover p-8 md:p-12 space-y-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
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
                        <Input placeholder="John Doe" className="w-full" {...field} />
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
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Position *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="resume"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Resume (Optional)
                    </FormLabel>
                    <FormControl>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <input
                          ref={resumeInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="sr-only"
                          onChange={(e) => {
                            const files = e.target.files;
                            onChange(files);
                            if (files && files[0]) setResumeName(files[0].name);
                            else setResumeName(null);
                          }}
                          {...field}
                        />

                        <button
                          type="button"
                          onClick={() => resumeInputRef.current?.click()}
                          className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent/5 transition-colors"
                        >
                          <Upload className="w-4 h-4" />
                          Upload Resume
                        </button>

                        <div className="text-sm text-muted-foreground">
                          {resumeName ? (
                            <span className="inline-block max-w-xs truncate">{resumeName}</span>
                          ) : (
                            <span className="text-muted-foreground/80">PDF, DOC, DOCX — max 5MB</span>
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Cover Letter *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself and why you'd be a great fit..."
                        className="w-full min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-8"
                  onClick={() => navigate("/careers")}
                >
                  Back to Careers
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 inline-flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CareerFormSection;