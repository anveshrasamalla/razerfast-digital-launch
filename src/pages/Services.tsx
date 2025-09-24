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
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-accent/5 via-transparent to-primary/5" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-sm font-semibold tracking-widest text-tech-accent uppercase mb-4 animate-fade-in">
            OUR EXPERTISE
          </div>
          <Badge variant="outline" className="mb-6 border-tech-accent/20 text-tech-accent bg-tech-accent/5">Our Services</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Complete Digital Solutions for{" "}
            <span className="bg-gradient-to-r from-tech-accent to-primary bg-clip-text text-transparent">Every Business Need</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            From stunning websites to powerful e-commerce platforms, we provide end-to-end digital services 
            that help local businesses compete and thrive in the digital marketplace.
          </p>
          <Button variant="cta" size="xl" className="group animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="web" className="space-y-12">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full h-auto gap-4 bg-transparent">
              {mainServices.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex flex-col items-center p-6 rounded-xl border bg-card hover:bg-muted/50 transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover-scale"
                >
                  <service.icon className="w-8 h-8 mb-2" />
                  <span className="font-semibold">{service.title}</span>
                  <span className="text-xs opacity-70">{service.subtitle}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {mainServices.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-12">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-tech-accent/10 rounded-xl flex items-center justify-center shadow-lg">
                          <service.icon className="w-8 h-8 text-tech-accent" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                          <p className="text-tech-accent font-medium">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-tech-accent flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="default" size="lg" className="group">
                          Get Started
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button variant="outline" size="lg">
                          Learn More
                        </Button>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-8 lg:p-12 flex flex-col justify-center border-l border-border/50">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-tech-accent" />
                            Technologies We Use
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-tech-accent/10 text-tech-accent border-tech-accent/20">{tech}</Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            Timeline
                          </h4>
                          <p className="text-muted-foreground font-medium">{service.timeline}</p>
                        </div>

                        <div className="bg-tech-accent/5 p-4 rounded-lg border border-tech-accent/20">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-tech-accent" />
                            Investment
                          </h4>
                          <p className="text-2xl font-bold text-primary">{service.startingPrice}</p>
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
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-accent/5 via-primary/5 to-tech-accent/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold tracking-widest text-tech-accent uppercase mb-4">
              ADDITIONAL SERVICES
            </div>
            <Badge variant="outline" className="mb-4 border-tech-accent/20 text-tech-accent bg-tech-accent/5">Additional Services</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-tech-accent">Supporting</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services to ensure your digital presence is always optimized and performing at its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card group">
                <div className="w-12 h-12 bg-tech-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-tech-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-accent transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold tracking-widest text-tech-accent uppercase mb-4">
              OUR PROCESS
            </div>
            <Badge variant="outline" className="mb-4 border-tech-accent/20 text-tech-accent bg-tech-accent/5">Our Process</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We <span className="text-tech-accent">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 6-step process ensures every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card group">
                <div className="text-4xl font-bold text-tech-accent/60 mb-4 group-hover:text-tech-accent transition-all duration-300">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-accent transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 text-tech-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that fits your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="group">
              Request Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="xl">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;