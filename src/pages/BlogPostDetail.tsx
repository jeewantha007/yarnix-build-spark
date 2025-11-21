import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { fetchBlogPostBySlug } from "@/services/api";
import type { BlogPost } from "@/services/api";

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const blogPost = await fetchBlogPostBySlug(slug);
        if (blogPost) {
          setPost(blogPost);
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        setError("Failed to load blog post");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4">Loading blog post...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Retry
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
          {post.image && (
            <div className="absolute inset-0 z-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
            </div>
          )}
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-accent/80 backdrop-blur-sm px-4 py-1 rounded-full mb-4 border border-primary/20">
                <span className="text-xs font-medium text-accent-foreground">{post.category}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                </div>
                {post.read_time && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.read_time}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              {post.excerpt && (
                <p className="text-xl text-muted-foreground mb-8 italic">
                  {post.excerpt}
                </p>
              )}
              
              <div 
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-8 border-t border-border">
                <Link to="/blog">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;