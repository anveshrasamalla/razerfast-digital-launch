import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  ExternalLink,
  Car,
  Coffee,
  ShoppingBasket,
  Palette,
  TrendingUp,
  Users,
  Globe,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const industries = [
    { id: "all", name: "All Projects", icon: Globe },
    { id: "automotive", name: "Automotive", icon: Car },
    { id: "cafe", name: "Cafes & Restaurants", icon: Coffee },
    { id: "grocery", name: "Grocery Stores", icon: ShoppingBasket },
    { id: "art", name: "Art Stores", icon: Palette },
    { id: "boutique", name: "Boutiques", icon: Users }
  ];

  const projects = [
    {
      id: 1,
      title: "AutoMax Pro",
      category: "automotive",
      description: "Complete digital transformation for a growing auto repair chain",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      services: ["Web Development", "E-commerce", "Digital Marketing"],
      results: {
        traffic: "+350%",
        conversions: "+280%",
        revenue: "+400%"
      },
      technologies: ["React", "Node.js", "Stripe", "Google Ads"],
      timeline: "6 weeks",
      year: "2024"
    },
    {
      id: 2,
      title: "Brew & Bean Cafe",
      category: "cafe",
      description: "Modern website and online ordering system for local coffee shop",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
      services: ["Web Development", "Mobile App", "Brand Design"],
      results: {
        orders: "+500%",
        customers: "+180%",
        rating: "4.9/5"
      },
      technologies: ["Next.js", "React Native", "Sanity", "Stripe"],
      timeline: "4 weeks",
      year: "2024"
    },
    {
      id: 3,
      title: "Fresh Valley Market",
      category: "grocery",
      description: "E-commerce platform for local grocery store with delivery system",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
      services: ["E-commerce", "Inventory Management", "SEO"],
      results: {
        sales: "+320%",
        efficiency: "+150%",
        reach: "+200%"
      },
      technologies: ["Shopify", "WooCommerce", "QuickBooks", "Mailchimp"],
      timeline: "8 weeks",
      year: "2023"
    },
    {
      id: 4,
      title: "Canvas & Color Gallery",
      category: "art",
      description: "Elegant portfolio and e-commerce site for local art gallery",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      services: ["Web Development", "E-commerce", "Photography"],
      results: {
        visibility: "+400%",
        sales: "+250%",
        engagement: "+300%"
      },
      technologies: ["React", "Gatsby", "Strapi", "Cloudinary"],
      timeline: "5 weeks",
      year: "2023"
    },
    {
      id: 5,
      title: "SpeedFix Auto Service",
      category: "automotive",
      description: "Appointment booking system and customer portal for auto service",
      image: "https://images.unsplash.com/photo-1632823471565-1ecdf7d81a33?w=600&h=400&fit=crop",
      services: ["Web Development", "CRM Integration", "Mobile App"],
      results: {
        bookings: "+380%",
        efficiency: "+200%",
        satisfaction: "98%"
      },
      technologies: ["Vue.js", "Laravel", "Flutter", "Calendly"],
      timeline: "7 weeks",
      year: "2024"
    },
    {
      id: 6,
      title: "Artisan Coffee Co.",
      category: "cafe",
      description: "Multi-location coffee chain website with loyalty program",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
      services: ["Web Development", "Loyalty Program", "Analytics"],
      results: {
        retention: "+250%",
        visits: "+180%",
        revenue: "+220%"
      },
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
      timeline: "6 weeks",
      year: "2023"
    },
    {
      id: 7,
      title: "Chic Boutique",
      category: "boutique",
      description: "Luxury e-commerce platform for high-end fashion boutique",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      services: ["E-commerce", "Brand Design", "Photography"],
      results: {
        sales: "+400%",
        reach: "+300%",
        engagement: "+250%"
      },
      technologies: ["Shopify Plus", "React", "Klaviyo", "Instagram API"],
      timeline: "5 weeks",
      year: "2024"
    }
  ];

  const filterProjects = (category: string) => {
    if (category === "all") return projects;
    return projects.filter(project => project.category === category);
  };

  const getCaseStudyPath = (title: string): string | null => {
    const map: Record<string, string> = {
      "AutoMax Pro": "/work/automax-pro",
      "Brew & Bean Cafe": "/work/brew-bean-cafe",
      "Fresh Valley Market": "/work/fresh-valley-market",
      "Canvas & Color Gallery": "/work/canvas-color-gallery",
      "Chic Boutique": "/work/boutique-fashion",
    };
    return map[title] ?? null;
  };

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "250%", label: "Average ROI Increase" },
    { number: "50+", label: "Industries Served" }
  ];

  return (
    <Layout>
      <style>
        {`.min-h-screen { background: #F0EDE8 !important; }`}
      </style>
      {/* Hero Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#F0EDE8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
            OUR PORTFOLIO
          </div>
          <Badge variant="outline" className="mb-6">Our Portfolio</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Success Stories from{" "}
            <span className="text-tech-accent">Real Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped local businesses across different industries achieve remarkable growth 
            through strategic digital solutions and innovative technology.
          </p>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-tech-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="space-y-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto gap-2 bg-transparent">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex items-center gap-2 p-3 data-[state=active]:bg-tech-accent data-[state=active]:text-tech-accent-foreground"
                >
                  <industry.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{industry.name}</span>
                  <span className="sm:hidden">{industry.name.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="mt-12">
                <div className="space-y-16">
                  {filterProjects(industry.id).map((project, index) => (
                    <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Project Details */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="space-y-2">
                          <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase">
                            {project.category.toUpperCase()} PROJECT
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                            <span className="relative inline-block">
                              {project.title.split(' ').map((word, wordIndex) => (
                                <span key={wordIndex} className="relative">
                                  {word}
                                  {wordIndex === 0 && (
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-tech-accent transform scale-x-100"></span>
                                  )}
                                  {wordIndex < project.title.split(' ').length - 1 && ' '}
                                </span>
                              ))}
                            </span>
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Key Metrics */}
                        <div className="space-y-3">
                          {Object.entries(project.results).map(([key, value], idx) => (
                            <div key={idx} className="flex items-center space-x-4">
                              <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                              <span className="text-lg font-semibold text-tech-accent">{value}</span>
                              <span className="text-muted-foreground capitalize">increase in {key}</span>
                            </div>
                          ))}
                          <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
                            <span className="text-lg font-semibold text-tech-accent">{project.timeline}</span>
                            <span className="text-muted-foreground">project timeline</span>
                          </div>
                        </div>

                        {/* Services & Technologies */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2 text-muted-foreground/70 uppercase tracking-wide">Services</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.services.map((service, idx) => (
                                <Badge key={idx} variant="outline" className="text-sm">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2 text-muted-foreground/70 uppercase tracking-wide">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="text-sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {getCaseStudyPath(project.title) ? (
                          <Link to={getCaseStudyPath(project.title)!} aria-label={`View case study: ${project.title}`}>
                            <Button variant="minimal" className="group mt-6">
                              View Case Study
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </Link>
                        ) : null}
                      </div>

                      {/* Project Image */}
                      <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-tech-accent text-tech-accent-foreground">
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20" style={{ backgroundColor: '#F0EDE8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              INDUSTRY EXPERTISE
            </div>
            <Badge variant="outline" className="mb-4">Industry Expertise</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Specialized Solutions for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the unique challenges and opportunities in different industries, 
              allowing us to create tailored solutions that deliver real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.slice(1).map((industry) => {
              const projectCount = projects.filter(p => p.category === industry.id).length;
              return (
                <Card key={industry.id} className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-tech-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <Badge variant="secondary" className="mb-4">{projectCount} Projects</Badge>
                  <p className="text-muted-foreground text-sm">
                    Specialized expertise in {industry.name.toLowerCase()} digital solutions
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 text-tech-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the growing list of businesses that have transformed their digital presence and achieved remarkable growth with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="minimal" size="xl">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;