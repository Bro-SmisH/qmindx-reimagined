import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/animation/PageTransition";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { fetchStaffingBySlug } from "@/lib/mockData";

const StaffingDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [staffing, setStaffing] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setError(false);
            try {
                if (slug) {
                    const data = await fetchStaffingBySlug(slug);
                    if (data) {
                        setStaffing(data);
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
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (error || !staffing) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Staffing Solution Not Found</h2>
                <p className="text-slate-600 mb-6">The staffing solution you are looking for does not exist.</p>
                <Link to="/">
                    <Button>Go Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <Header />

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 z-0" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />

                    <div className="container mx-auto px-6 relative z-10">
                        <Link to="/" className="inline-flex items-center text-indigo-200 hover:text-white mb-8 transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Home
                        </Link>

                        <div className="max-w-3xl">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 border border-indigo-500/30">
                                Staffing Solutions
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {staffing.title}
                            </h1>
                            <p className="text-xl text-indigo-100 leading-relaxed mb-8 max-w-2xl">
                                {staffing.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white border-none shadow-lg shadow-indigo-900/20">
                                    Hire Now
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                                    Schedule Consultation
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">

                                {/* Overview */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        Looking to {staffing.title.toLowerCase()}? Our team provides top-tier talent ready to integrate into your projects.
                                        We ensure that every developer we provide is vetted for technical expertise, communication skills, and cultural fit.
                                        Whether you need a single developer or a full dedicated team, we have the resources to scale your development capabilities immediately.
                                    </p>
                                </div>

                                {/* Key Features / Skills */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Expertise</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {staffing.features?.map((feature: string, index: number) => (
                                            <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                                <div className="mt-1 text-indigo-600">
                                                    <CheckCircle size={20} />
                                                </div>
                                                <span className="font-medium text-slate-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Why Choose Us */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Hire From Us?</h2>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                                <CheckCircle size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-900 mb-2">Vetted Talent</h3>
                                                <p className="text-slate-600">Top 1% of developers selected through a rigorous screening process.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                                <Calendar size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Engagement</h3>
                                                <p className="text-slate-600">Hourly, monthly, or project-based hiring models to suit your needs.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                                <CheckCircle size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-900 mb-2">Immediate Start</h3>
                                                <p className="text-slate-600">Developers ready to onboard and start working on your project within 48 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6">Get Started</h3>
                                    <form className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                            <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Your name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                            <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                            <textarea className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all h-32 resize-none" placeholder="Tell us about your requirements..." />
                                        </div>
                                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                                            Send Request
                                        </Button>
                                    </form>

                                    <div className="mt-8 pt-8 border-t border-slate-100">
                                        <h4 className="font-medium text-slate-900 mb-4">Contact Directly</h4>
                                        <div className="space-y-3">
                                            <a href="mailto:hiring@qmindx.com" className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors">
                                                <Mail size={18} className="mr-3" /> hiring@qmindx.com
                                            </a>
                                            <a href="tel:+1234567890" className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors">
                                                <Phone size={18} className="mr-3" /> +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default StaffingDetail;
