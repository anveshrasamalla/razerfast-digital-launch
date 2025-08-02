import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Rocket,
  Award,
  Clock,
  Shield,
  Target,
  Code2,
  Palette,
  Search,
  Wrench,
  Coffee,
  Car,
  ShoppingBag,
  Utensils,
  Paintbrush2,
  ChevronRight
} from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Visible", "Trusted", "Automated", "Optimized", "Digital"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Web Design & Development",
      description: "Modern, responsive websites built for performance and conversions"
    },
    {
      icon: Search,
      title: "SEO & Local Search",
      description: "Get found by customers when they're searching for your services"
    },
    {
      icon: Wrench,
      title: "Tech Consulting",
      description: "Strategic technology guidance to streamline your operations"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Professional branding that makes your business stand out"
    }
  ];

  const portfolioHighlights = [
    {
      icon: Car,
      title: "Auto Garage",
      description: "Complete digital transformation for automotive services",
      stats: "200% more online bookings"
    },
    {
      icon: ShoppingBag,
      title: "Grocery Store",
      description: "E-commerce platform with local delivery integration",
      stats: "150% increase in online sales"
    },
    {
      icon: Utensils,
      title: "Restaurant",
      description: "Online ordering system and digital menu management",
      stats: "300% growth in takeout orders"
    },
    {
      icon: Coffee,
      title: "Cafe & Bakery",
      description: "Social media presence and loyalty program setup",
      stats: "180% follower growth"
    },
    {
      icon: Paintbrush2,
      title: "Art Studio",
      description: "Portfolio website with online booking for classes",
      stats: "90% booking automation"
    }
  ];

  const whyChooseUs = [
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Get your project launched in weeks, not months"
    },
    {
      icon: Users,
      title: "Personalized Support",
      description: "Dedicated account manager for every project"
    },
    {
      icon: Shield,
      title: "Future-Proof Tech",
      description: "Built with scalable, modern technologies"
    },
    {
      icon: Target,
      title: "Affordable Solutions",
      description: "Enterprise-quality results at small business prices"
    }
  ];

  const testimonials = [
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Auto Repair",
      quote: "Razerfast transformed our business. We went from 3 calls a week to booking out 2 weeks in advance!",
      rating: 5
    },
    {
      name: "Sarah Kim",
      business: "Fresh Market Grocery",
      quote: "The online ordering system they built doubled our sales during COVID and continues to drive growth.",
      rating: 5
    },
    {
      name: "David Chen",
      business: "Bella Vista Restaurant",
      quote: "Professional, fast, and they actually understand small business needs. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              {/* Small subtitle */}
              <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase animate-fade-in">
                RIGHT TOOLS. RIGHT TEAM. RAZERFAST.
              </div>

              {/* Main headline with consistent font */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-slide-in-left">
                Let's make your business&nbsp;
                <span className="relative inline-block">
                  <span
                    key={words[currentWord]}
                    className="text-tech-accent transition-opacity duration-500 ease-in-out"
                  >
                    {words[currentWord]}
                  </span>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in delay-300">
                We help local businesses build powerful online presence with fast, affordable, and future-proof digital solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-500">
                <Button size="lg" className="group hover:scale-105 transition-transform">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Play className="mr-2 w-4 h-4" />
                  See Our Work
                </Button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img 
                src={heroImage} 
                alt="Digital consulting services" 
                className="rounded-2xl shadow-elegant hover:shadow-tech transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              <Wrench className="w-3 h-3 mr-1" />
              What We Do
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From websites to SEO, we provide everything your business needs to succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-tech transition-all duration-300 group border-0 bg-card hover:scale-105">
                <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-tech-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-tech-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              <Award className="w-3 h-3 mr-1" />
              Portfolio Highlights
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Success Stories Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve digital success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioHighlights.map((item, index) => (
              <Card key={index} className="group cursor-pointer border-0 overflow-hidden hover:shadow-tech transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-accent/10 rounded-lg flex items-center justify-center group-hover:bg-tech-accent/20 transition-colors">
                      <item.icon className="w-6 h-6 text-tech-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex items-center text-tech-accent font-medium">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {item.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              <CheckCircle className="w-3 h-3 mr-1" />
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Razerfast Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine speed, quality, and personal attention to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tech-accent/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-tech-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              <Star className="w-3 h-3 mr-1" />
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 bg-card/80 hover:shadow-tech transition-all duration-300 hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strong Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-tech-accent/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="w-20 h-20 bg-tech-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-10 h-10 text-tech-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Your Business the Razerfast Way
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to transform your business? Get a free consultation and see how we can help you succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" className="bg-tech-accent text-tech-accent-foreground hover:bg-tech-accent/90 hover:scale-105 transition-all">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="xl" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;