import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBlogPostBySlug } from "@/lib/mockData";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import LoadingSpinner from "@/components/ui/loading-spinner";

const BlogPostDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                if (!slug) throw new Error("No slug provided");
                const data = await fetchBlogPostBySlug(slug);
                if (data) {
                    setPost(data);
                } else {
                    setError("Post not found");
                }
            } catch (err) {
                setError("Failed to load blog post");
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [slug]);

    if (loading) return <LoadingSpinner />;

    if (error || !post) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20">
                    <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
                    <p className="text-muted-foreground mb-6">{error || "The requested blog post could not be found."}</p>
                    <Button asChild>
                        <Link to="/blog">Back to Blog</Link>
                    </Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <article className="pt-24 pb-16">
                {/* Header */}
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Blog
                    </Link>

                    <div className="space-y-4 mb-8">
                        {post.category && (
                            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                        )}
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                            {post.author && (
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>{post.author}</span>
                                </div>
                            )}
                            {post.date && (
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>{post.date}</span>
                                </div>
                            )}
                            {post.readTime && (
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>{post.readTime}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {post.image && (
                        <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
                            <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8">{post.excerpt}</p>
                        {/* Render content if available, otherwise fallback */}
                        {post.content ? (
                            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
                        ) : (
                            <div className="bg-slate-50 p-8 rounded-lg border border-dashed text-center text-slate-500">
                                <p>Full content for this article is coming soon.</p>
                            </div>
                        )}
                    </div>

                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t">
                            <h4 className="text-sm font-semibold text-slate-900 mb-4">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag: string) => (
                                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </Layout>
    );
};

export default BlogPostDetail;
