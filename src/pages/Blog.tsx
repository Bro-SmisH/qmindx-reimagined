import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animation/Animations";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Software Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and maintain enterprise applications.",
      category: "Artificial Intelligence",
      date: "October 28, 2025",
      readTime: "5 min read",
      image: "https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/ai-enterprise.jpg"
    },
    {
      title: "Building Scalable Cloud Infrastructure: Best Practices",
      excerpt: "Learn the key principles and strategies for designing cloud infrastructure that can grow with your business.",
      category: "Cloud Computing",
      date: "October 25, 2025",
      readTime: "7 min read",
      image: "https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/cloud-infra.jpg"
    },
    {
      title: "Web3 Development: A Comprehensive Guide",
      excerpt: "Everything you need to know about building decentralized applications and working with blockchain technology.",
      category: "Blockchain",
      date: "October 22, 2025",
      readTime: "10 min read",
      image: "https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/web3-dev.jpg"
    },
    {
      title: "Mobile App Development Trends in 2025",
      excerpt: "Discover the latest trends and technologies shaping the future of mobile application development.",
      category: "Mobile Development",
      date: "October 19, 2025",
      readTime: "6 min read",
      image: "https://d3puhl2t51lebl.cloudfront.net/uploads/2025/05/mobile-trends.jpg"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" style={{ paddingTop: 'var(--header-offset)' }}>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FadeInUp>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
                  Latest Insights & Articles
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                  Stay updated with the latest trends, insights, and best practices in technology and digital innovation.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <FadeInUp key={index} delay={index * 0.1}>
                  <Card className="group overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-hover">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle level={2} className="text-xl md:text-2xl group-hover:text-accent transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {post.excerpt}
                      </p>
                      <Button asChild variant="outline" className="group-hover:border-accent group-hover:text-accent transition-colors">
                        <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          Read More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInUp>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="max-w-3xl mx-auto mt-20 text-center">
              <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get the latest insights and updates delivered straight to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;