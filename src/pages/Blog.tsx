import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Search,
  Calendar,
  User,
  Clock,
  TrendingUp,
  Smartphone,
  Globe,
  Zap,
  Car,
  Coffee
} from "lucide-react";

const Blog = () => {
  const categories = [
    { name: "All Posts", count: 24 },
    { name: "Technology", count: 12 },
    { name: "Automotive", count: 8 },
    { name: "Digital Marketing", count: 6 },
    { name: "E-commerce", count: 5 },
    { name: "Local Business", count: 10 }
  ];

  const featuredPost = {
    title: "The Complete Guide to Digital Transformation for Local Businesses in 2024",
    excerpt: "Discover the essential strategies, tools, and technologies that local businesses need to thrive in the digital age. From website optimization to mobile apps and digital marketing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    category: "Technology",
    author: "Alex Thompson",
    date: "December 15, 2024",
    readTime: "12 min read",
    tags: ["Digital Transformation", "Local Business", "Technology"]
  };

  const posts = [
    {
      id: 1,
      title: "How Auto Repair Shops Can Double Their Bookings with Smart Technology",
      excerpt: "Learn how modern auto repair shops are using online booking systems, customer portals, and digital marketing to increase efficiency and grow their business.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      category: "Automotive",
      author: "Maria Garcia",
      date: "December 12, 2024",
      readTime: "8 min read",
      tags: ["Automotive", "Booking Systems", "Digital Marketing"]
    },
    {
      id: 2,
      title: "E-commerce Trends Every Local Retailer Should Know in 2024",
      excerpt: "From mobile commerce to personalized shopping experiences, discover the e-commerce trends that are driving success for local retailers.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "E-commerce",
      author: "James Chen",
      date: "December 10, 2024",
      readTime: "10 min read",
      tags: ["E-commerce", "Retail", "Mobile Commerce"]
    },
    {
      id: 3,
      title: "The ROI of Professional Website Design for Small Businesses",
      excerpt: "Why investing in professional website design pays off: real data from our clients showing increased traffic, conversions, and revenue.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      category: "Digital Marketing",
      author: "Sarah Williams",
      date: "December 8, 2024",
      readTime: "7 min read",
      tags: ["Web Design", "ROI", "Small Business"]
    },
    {
      id: 4,
      title: "Coffee Shop Success: How to Build a Loyal Customer Base Online",
      excerpt: "From loyalty programs to social media marketing, discover how coffee shops can create meaningful connections with customers in the digital space.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop",
      category: "Local Business",
      author: "Alex Thompson",
      date: "December 5, 2024",
      readTime: "9 min read",
      tags: ["Coffee Shop", "Customer Loyalty", "Social Media"]
    },
    {
      id: 5,
      title: "Mobile-First Design: Why Your Local Business Needs It Now",
      excerpt: "With mobile traffic dominating, learn why mobile-first design is crucial for local businesses and how to implement it effectively.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      category: "Technology",
      author: "Maria Garcia",
      date: "December 3, 2024",
      readTime: "6 min read",
      tags: ["Mobile Design", "UX", "Local Business"]
    },
    {
      id: 6,
      title: "SEO Strategies That Actually Work for Local Automotive Businesses",
      excerpt: "Practical SEO tactics specifically designed for auto repair shops, dealerships, and automotive service providers to dominate local search.",
      image: "https://images.unsplash.com/photo-1632823471565-1ecdf7d81a33?w=400&h=250&fit=crop",
      category: "Automotive",
      author: "James Chen",
      date: "November 30, 2024",
      readTime: "11 min read",
      tags: ["SEO", "Automotive", "Local Search"]
    }
  ];


  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6">Insights & Resources</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Tech Insights for{" "}
            <span className="text-tech-accent">Growing Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert insights on technology, digital marketing, and business growth strategies 
            to help local businesses thrive in the digital age.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              type="text" 
              placeholder="Search articles..." 
              className="pl-10 pr-4 py-3 rounded-lg border-border/50 focus:border-tech-accent"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Featured Article</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Latest Insights</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">{featuredPost.category}</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="cta" className="w-fit group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between py-2 hover:text-tech-accent cursor-pointer transition-colors duration-300">
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">{category.count}</span>
                    </div>
                  ))}
                </div>
              </Card>


              {/* Popular Topics */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Digital Marketing", "SEO", "Web Development", "E-commerce", "Mobile Apps", "Local Business"].map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-tech-accent hover:text-tech-accent-foreground transition-colors duration-300">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                      <CardTitle className="text-lg group-hover:text-tech-accent transition-colors duration-300 leading-tight">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="minimal" className="w-full group">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 text-tech-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Apply These Insights?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Turn knowledge into action. Let's discuss how we can implement these strategies for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="minimal" size="xl">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;