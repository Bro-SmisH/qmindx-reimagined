import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { FadeInUp } from "@/components/animation/Animations";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchBlogPosts } from "@/lib/mockData";

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
    image: "https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/ai-enterprise.jpg",
    link: "/blog/ai-enterprise",
  },
  {
    title: "Building Scalable Cloud Infrastructure: Best Practices",
    excerpt:
      "Learn the key principles and strategies for designing cloud infrastructure that can grow with your business.",
    category: "Cloud Computing",
    date: "October 25, 2025",
    readTime: "7 min read",
    image: "https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/cloud-infra.jpg",
    link: "/blog/cloud-infrastructure",
  },
  {
    title: "Web3 Development: A Comprehensive Guide",
    excerpt:
      "Everything you need to know about building decentralized applications and working with blockchain technology.",
    category: "Web3 & Blockchain",
    date: "October 22, 2025",
    readTime: "10 min read",
    image: "https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/web3-guide.jpg",
    link: "/blog/web3-development",
  },
  {
    title: "Mobile App Development Trends to Watch in 2025",
    excerpt:
      "Discover the latest trends and technologies shaping the future of mobile application development.",
    category: "Mobile Development",
    date: "October 19, 2025",
    readTime: "6 min read",
    image: "https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/mobile-trends.jpg",
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
    <Layout>
      <main id="main-content" role="main" style={{ paddingTop: "var(--header-offset)" }}>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border/60">
          <div className="container mx-auto px-4">
            <FadeInUp className="max-w-3xl">
              <p className="text-accent font-semibold uppercase tracking-wide mb-3 text-sm">
                Insights & Stories
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ideas at the intersection of{" "}
                <span className="text-accent">AI, product, and engineering</span>.
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mb-6">
                Deep dives, playbooks, and practical lessons from building real-world platforms with modern
                AI and cloud-native architectures.
              </p>
              {error && (
                <p className="text-sm text-destructive/90 mb-2">
                  {error}
                </p>
              )}
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contact">Talk to our team</Link>
              </Button>
            </FadeInUp>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post) => (
                <FadeInUp key={post.id ?? post.title} className="h-full">
                  <article className="h-full flex flex-col bg-card/80 border border-border/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        {post.category && (
                          <span className="absolute top-4 left-4 bg-accent text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                            {post.category}
                          </span>
                        )}
                      </div>
                    )}
                    <Card className="border-0 shadow-none rounded-none flex-1">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          {post.date && <span>{post.date}</span>}
                          {post.readTime && (
                            <>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-1">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <Button asChild variant="outline" size="sm" className="rounded-full">
                            <Link to={post.link}>Read article</Link>
                          </Button>
                          <span className="text-xs text-muted-foreground">
                            {post.category}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Blog;
