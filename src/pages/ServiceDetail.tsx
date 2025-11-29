import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Zap, HelpCircle, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/animation/PageTransition";
import { Layout, HeroLayout } from "@/components/layout/Layout";
import { fetchServiceBySlug } from "@/lib/mockData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServiceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [service, setService] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setError(false);
            try {
                if (slug) {
                    const data = await fetchServiceBySlug(slug);
                    if (data) {
                        setService(data);
                    } else {
                        setError(true);
                    }
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
                <h2 className="text-2xl font-bold text-foreground mb-2">Service Not Found</h2>
                <p className="text-muted-foreground mb-6">The service you are looking for does not exist.</p>
                <Link to="/services">
                    <Button>View All Services</Button>
                </Link>
            </div>
        );
    }

    return (
        <PageTransition>
            <Layout>
                {/* Hero Section */}
                <HeroLayout background="gradient">
                    <Link to="/services" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Services
                    </Link>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
                            Service Overview
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
                            {service.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact">
                                <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-none shadow-lg">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </HeroLayout>

                {/* Detailed Content */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">

                                {/* Long Description */}
                                {service.longDescription && (
                                    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                                        <h2 className="text-2xl font-bold text-foreground mb-6">About This Service</h2>
                                        <p className="text-muted-foreground leading-relaxed text-lg">
                                            {service.longDescription}
                                        </p>
                                    </div>
                                )}

                                {/* Features Grid */}
                                {service.features && service.features.length > 0 && (
                                    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                                        <h2 className="text-2xl font-bold text-foreground mb-8">Key Features</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {service.features.map((feature: string, index: number) => (
                                                <div key={index} className="flex items-start gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                        <Zap size={20} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-foreground mb-1">{feature}</h3>
                                                        <p className="text-sm text-muted-foreground">Advanced capability to drive results.</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Technologies */}
                                {service.technologies && service.technologies.length > 0 && (
                                    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                                        <h2 className="text-2xl font-bold text-foreground mb-8">Technologies We Use</h2>
                                        <div className="flex flex-wrap gap-3">
                                            {service.technologies.map((tech: string, index: number) => (
                                                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground border border-border">
                                                    <Code2 size={16} />
                                                    <span className="font-medium">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Benefits */}
                                {service.benefits && service.benefits.length > 0 && (
                                    <div className="bg-primary rounded-2xl p-8 shadow-lg text-primary-foreground relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-50 -mr-16 -mt-16"></div>
                                        <div className="relative z-10">
                                            <h2 className="text-2xl font-bold mb-8">Business Benefits</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {service.benefits.map((benefit: string, index: number) => (
                                                    <div key={index} className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                                                            <CheckCircle size={16} />
                                                        </div>
                                                        <span className="font-medium">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Process */}
                                {service.process && service.process.length > 0 && (
                                    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                                        <h2 className="text-2xl font-bold text-foreground mb-8">Our Process</h2>
                                        <div className="relative">
                                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
                                            <div className="space-y-8">
                                                {service.process.map((step: string, index: number) => (
                                                    <div key={index} className="relative flex items-start pl-12">
                                                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold text-sm z-10 shadow-sm">
                                                            {index + 1}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-bold text-foreground mb-2">{step}</h3>
                                                            <p className="text-muted-foreground">
                                                                We ensure every step is executed with precision and transparency.
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* FAQs */}
                                {service.faqs && service.faqs.length > 0 && (
                                    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                                        <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                                        <Accordion type="single" collapsible className="w-full">
                                            {service.faqs.map((faq: any, index: number) => (
                                                <AccordionItem key={index} value={`item-${index}`}>
                                                    <AccordionTrigger className="text-left font-medium text-foreground">
                                                        {faq.question}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-muted-foreground">
                                                        {faq.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                )}

                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border sticky top-24">
                                    <h3 className="text-xl font-bold text-foreground mb-6">Interested?</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Let's discuss how we can implement {service.title} for your business.
                                    </p>
                                    <Link to="/contact">
                                        <Button className="w-full mb-4">
                                            Contact Us
                                        </Button>
                                    </Link>
                                    <div className="text-center">
                                        <p className="text-sm text-muted-foreground mb-2">Or call us directly</p>
                                        <a href="tel:+1234567890" className="text-primary font-semibold hover:underline">
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </PageTransition>
    );
};

export default ServiceDetail;
