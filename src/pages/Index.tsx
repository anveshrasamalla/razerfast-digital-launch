import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Globe, 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  Search,
  Zap,
  Award,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import techBg from "@/assets/tech-background.jpg";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "accelerate your digital transformation";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites that convert visitors into customers",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Tech Stack"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Online stores that drive sales and growth",
      features: ["Payment Integration", "Inventory Management", "Analytics", "Mobile Commerce"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "API Integration", "App Store Launch"]
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Strategies that bring customers to your door",
      features: ["SEO & SEM", "Social Media", "Content Marketing", "Lead Generation"]
    }
  ];

  const industries = [
    {
      name: "Automotive",
      projects: "25+",
      icon: "🚗",
      description: "Dealerships, repair shops, and auto services"
    },
    {
      name: "Cafes & Restaurants",
      projects: "40+",
      icon: "☕",
      description: "Food service and hospitality businesses"
    },
    {
      name: "Grocery Stores",
      projects: "15+",
      icon: "🛒",
      description: "Local markets and specialty food stores"
    },
    {
      name: "Art Stores",
      projects: "20+",
      icon: "🎨",
      description: "Galleries, studios, and creative businesses"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Owner, Chen's Auto Repair",
      content: "Razerfast transformed our small auto shop into a digital powerhouse. Our online bookings increased by 300% in just 3 months!",
      rating: 5,
      industry: "Automotive"
    },
    {
      name: "Marcus Rodriguez",
      role: "Manager, Bloom Coffee Co.",
      content: "The e-commerce platform they built for us is incredible. Our coffee sales online now rival our in-store revenue.",
      rating: 5,
      industry: "Cafe"
    },
    {
      name: "Emily Thompson",
      role: "Director, Fresh Valley Grocers",
      content: "Their digital marketing strategy doubled our foot traffic. Local customers actually find us now!",
      rating: 5,
      industry: "Grocery"
    }
  ];

  const stats = [
    { number: "150+", label: "Businesses Transformed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "250%", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${techBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              🚀 Transforming Local Businesses Since 2020
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              We help businesses{" "}
              <span className="text-tech-accent">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              From automotive shops to art galleries, we craft digital solutions that bring local businesses into the modern era with stunning websites, powerful e-commerce, and strategic marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="xl" className="group">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="minimal" size="xl">
                View Our Work
              </Button>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-tech-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-tech-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-tech-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end digital services to take your business from local to unstoppable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-tech-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-accent group-hover:text-tech-accent-foreground transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-tech-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Industries</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Specialized Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the unique challenges of different industries and create tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{industry.description}</p>
                <Badge variant="secondary">{industry.projects} Projects</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-tech-accent/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-tech-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <Badge variant="outline" className="ml-auto">{testimonial.industry}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 text-tech-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join 150+ local businesses that have accelerated their growth with our digital solutions. 
            Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="minimal" size="xl">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
