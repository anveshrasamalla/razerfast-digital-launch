import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  CheckCircle,
  Globe,
  ShoppingCart,
  Smartphone,
  Search,
  PenTool,
  BarChart3,
  Shield,
  Zap,
  Clock,
  Users
} from "lucide-react";

import CursorSparkle from "@/components/effects/CursorSparkle";
import Reveal from "@/components/effects/Reveal";
import ParallaxBlob from "@/components/effects/ParallaxBlob";

const Services = () => {
  const mainServices = [
    {
      id: "web",
      icon: Globe,
      title: "Web Development",
      subtitle: "Custom websites that convert",
      description: "Professional websites built with modern technologies that look stunning and perform exceptionally across all devices.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "Content Management",
        "Analytics Integration",
        "Security Features"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      startingPrice: "Starting at $2,999",
      timeline: "2-4 weeks"
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      subtitle: "Online stores that drive sales",
      description: "Complete e-commerce platforms with payment processing, inventory management, and marketing tools to grow your online business.",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Order Processing",
        "Customer Accounts",
        "Marketing Tools",
        "Analytics Dashboard"
      ],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      startingPrice: "Starting at $4,999",
      timeline: "3-6 weeks"
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile Apps",
      subtitle: "Native & cross-platform apps",
      description: "Mobile applications that provide seamless user experiences and help you connect with customers on their preferred devices.",
      features: [
        "iOS & Android",
        "Cross-platform Development",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization",
        "User Analytics"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      startingPrice: "Starting at $7,999",
      timeline: "6-12 weeks"
    },
    {
      id: "marketing",
      icon: Search,
      title: "Digital Marketing",
      subtitle: "Strategies that bring customers",
      description: "Comprehensive digital marketing strategies designed to increase your online visibility and drive qualified leads to your business.",
      features: [
        "Search Engine Optimization",
        "Google Ads Management",
        "Social Media Marketing",
        "Content Creation",
        "Email Marketing",
        "Performance Analytics"
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "HubSpot"],
      startingPrice: "Starting at $1,499/month",
      timeline: "Ongoing"
    }
  ];

  const additionalServices = [
    {
      icon: PenTool,
      title: "Brand Design",
      description: "Logo design, brand guidelines, and visual identity that makes your business memorable."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to help you understand your customers and optimize your digital presence."
    },
    {
      icon: Shield,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and security monitoring to keep your digital assets running smoothly."
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic guidance on digital transformation and technology decisions for your business."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create the perfect strategy."
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed project planning, timeline creation, and resource allocation for optimal results."
    },
    {
      step: "03",
      title: "Design",
      description: "Creating beautiful, user-friendly designs that align with your brand and business objectives."
    },
    {
      step: "04",
      title: "Development",
      description: "Building your solution using cutting-edge technologies and best practices for performance."
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing across devices and browsers to ensure everything works perfectly."
    },
    {
      step: "06",
      title: "Launch",
      description: "Smooth deployment and launch with ongoing support to ensure your success."
    }
  ];

  return (
    <Layout>
      <style>
        {`.min-h-screen { background: #E6D7F0 !important; }`}
      </style>
      <CursorSparkle />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32" style={{ backgroundColor: '#E6D7F0' }}>
        <ParallaxBlob speed={-0.15} className="absolute -top-10 -right-10 h-56 w-56 bg-tech-accent/20 blur-3xl" />
        <ParallaxBlob speed={0.12} className="absolute bottom-[-2rem] left-1/3 h-32 w-32 bg-primary/10 blur-2xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal animation="fade" delay={0}>
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              OUR SERVICES
            </div>
          </Reveal>
          <Reveal animation="slide-up" delay={100}>
            <Badge variant="outline" className="mb-6">Our Services</Badge>
          </Reveal>
          <Reveal animation="slide-up" delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Complete Digital Solutions for{" "}
              <span className="text-tech-accent text-gradient-animated">Every Business Need</span>
            </h1>
          </Reveal>
          <Reveal animation="fade" delay={300}>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From stunning websites to powerful e-commerce platforms, we provide end-to-end digital services 
              that help local businesses compete and thrive in the digital marketplace.
            </p>
          </Reveal>
          <Reveal animation="slide-up" delay={400}>
            <Button variant="cta" size="xl" className="group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="web" className="space-y-12">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full h-auto gap-4 bg-transparent">
              {mainServices.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="group relative flex flex-col items-center p-6 rounded-2xl border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-none hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 ring-1 ring-transparent data-[state=active]:ring-tech-accent/50 data-[state=active]:bg-tech-accent/15 data-[state=active]:text-foreground data-[state=active]:shadow-tech before:absolute before:inset-x-6 before:bottom-2 before:h-0.5 before:bg-tech-accent before:origin-left before:scale-x-0 before:transition-transform before:duration-300 data-[state=active]:before:scale-x-100"
                >
                  <service.icon className="w-8 h-8 mb-2" />
                  <span className="font-semibold">{service.title}</span>
                  <span className="text-xs opacity-70">{service.subtitle}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {mainServices.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-12">
                <Card className="relative overflow-hidden rounded-3xl border bg-card shadow-card hover:shadow-tech transition-all duration-500 group transform-gpu hover:scale-[1.01]">
                  {/* Decorative animated accents */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-tech-accent/20 blur-3xl animate-float" />
                    <div className="absolute bottom-[-2rem] left-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl animate-glow" />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 relative">
                    <div className="p-8 lg:p-12">
                        <Reveal animation="scale">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-tech-accent/10 rounded-2xl ring-1 ring-tech-accent/30 flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-105">
                              <service.icon className="w-8 h-8 text-tech-accent" />
                            </div>
                            <div>
                              <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                              <p className="text-tech-accent" style={{ animationDelay: "120ms" }}>{service.subtitle}</p>
                            </div>
                          </div>
                        </Reveal>
                      
                      <p className="text-muted-foreground mb-8 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "180ms" }}>
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: `${idx * 80 + 220}ms` }}>
                            <CheckCircle className="w-5 h-5 text-tech-accent flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="cta" size="lg" className="group transition-transform duration-300 hover:scale-[1.02]">
                          Get Started
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button variant="minimal" size="lg" className="transition-transform duration-300 hover:scale-[1.02]">
                          Learn More
                        </Button>
                      </div>
                    </div>

                    <div className="relative bg-muted/50 p-8 lg:p-12 flex flex-col justify-center rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl overflow-hidden">
                      <div className="pointer-events-none absolute inset-0">
                        <ParallaxBlob speed={-0.2} className="absolute right-[-20%] top-[-20%] h-64 w-64 bg-tech-accent/15 blur-3xl" />
                      </div>
                      <div className="space-y-6 animate-slide-in-right">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-tech-accent" />
                            Technologies We Use
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="transition-transform hover:scale-105">{tech}</Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-tech-accent" />
                            Timeline
                          </h4>
                          <p className="text-muted-foreground">{service.timeline}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-tech-accent" />
                            Investment
                          </h4>
                          <p className="text-2xl font-bold text-tech-accent">{service.startingPrice}</p>
                          <p className="text-sm text-muted-foreground">Custom pricing based on your needs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20" style={{ backgroundColor: '#E6D7F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade">
            <div className="text-center mb-16">
              <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
                ADDITIONAL SERVICES
              </div>
              <Badge variant="outline" className="mb-4">Additional Services</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Supporting Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive support services to ensure your digital presence is always optimized and performing at its best.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group p-6 rounded-2xl border bg-card/80 backdrop-blur hover:shadow-tech hover:scale-[1.02] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-tech-accent/10 rounded-lg flex items-center justify-center mb-4 animate-scale-reveal" style={{ animationDelay: `${index * 80}ms` }}>
                  <service.icon className="w-6 h-6 text-tech-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade">
            <div className="text-center mb-16">
              <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
                OUR PROCESS
              </div>
              <Badge variant="outline" className="mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                How We Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proven 6-step process ensures every project is delivered on time, on budget, and exceeds expectations.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Reveal animation="slide-up" delay={index * 80}>
                <Card className="p-6 rounded-2xl border bg-card/80 backdrop-blur hover:shadow-tech hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-4xl font-bold text-tech-accent/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 text-tech-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-animated">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that fits your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group">
              Request Free Quote
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

export default Services;