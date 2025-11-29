import { useEffect, useState } from "react";
import { Layout, HeroLayout } from "@/components/layout/Layout";
import { FadeInUp } from "@/components/animation/Animations";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchBlogPosts } from "@/lib/mockData";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";

type BlogPost = {
  id?: number | string;
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
  readTime?: string;
  image?: string;
  link: string;
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const fallbackPosts: BlogPost[] = [
  {
    title: "The Future of AI in Enterprise Software Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and maintain enterprise applications.",
    category: "Artificial Intelligence",
    date: "October 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    link: "/blog/ai-enterprise",
  },
  {
    title: "Building Scalable Cloud Infrastructure: Best Practices",
    excerpt:
      "Learn the key principles and strategies for designing cloud infrastructure that can grow with your business.",
    category: "Cloud Computing",
    date: "October 25, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    link: "/blog/cloud-infrastructure",
  },
  {
    title: "Web3 Development: A Comprehensive Guide",
    excerpt:
      "Everything you need to know about building decentralized applications and working with blockchain technology.",
    category: "Web3 & Blockchain",
    date: "October 22, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    link: "/blog/web3-development",
  },
  {
    title: "Mobile App Development Trends to Watch in 2025",
    excerpt:
      "Discover the latest trends and technologies shaping the future of mobile application development.",
    category: "Mobile Development",
    date: "October 19, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    link: "/blog/mobile-trends",
  },
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const data = await fetchBlogPosts();
        if (cancelled) return;
        if (Array.isArray(data) && data.length > 0) {
          const mapped: BlogPost[] = data.map((item: any) => ({
            id: item.id,
            title: item.title,
            excerpt: item.excerpt,
            category: item.category,
            date: item.date,
            readTime: item.readTime,
            image: item.image,
            link: item.link || `/blog/${slugify(item.slug || item.title || "")}`,
          }));
          setPosts(mapped);
        } else {
          setPosts(fallbackPosts);
        }
      } catch (err) {
        console.error("Failed to load blog posts", err);
        if (!cancelled) {
          setError("Could not load blog posts from backend. Showing default articles.");
          setPosts(fallbackPosts);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <HeroLayout background="gradient" className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
            Insights & Stories
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ideas at the intersection of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AI, Product, and Engineering</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Deep dives, playbooks, and practical lessons from building real-world platforms with modern AI and cloud-native architectures.
          </p>
          {error && (
            <p className="text-sm text-red-300 mb-6 bg-red-900/20 inline-block px-4 py-2 rounded-md border border-red-500/30">
              {error}
            </p>
          )}
        </HeroLayout>

        {/* Blog Grid */}
        <section className="py-20 -mt-20 relative z-20">
          <div className="container mx-auto px-6">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayPosts.map((post) => (
                  <Link
                    to={post.link}
                    key={post.id ?? post.title}
                    className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border flex flex-col h-full"
                  >
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        {post.category && (
                          <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                            {post.category}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        {post.date && (
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                        )}
                        {post.readTime && (
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform mt-auto">
                        Read article <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Subscribe to our newsletter to get the latest insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-12 w-full rounded-full border border-input bg-background px-6 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button size="lg" className="rounded-full px-8 h-12">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Blog;
