import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowRight, 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Globe,
  ShoppingCart,
  Smartphone,
  Search,
  Users
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    urgency: "",
    newsletter: false
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+1 (555) 123-4567",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a detailed response",
      value: "hello@razerfast.com",
      action: "Send Email",
      available: "24/7 Response within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support online",
      value: "Chat with us",
      action: "Start Chat",
      available: "Available now"
    }
  ];

  const services = [
    { value: "web-development", label: "Web Development", icon: Globe },
    { value: "ecommerce", label: "E-commerce Solutions", icon: ShoppingCart },
    { value: "mobile-app", label: "Mobile App Development", icon: Smartphone },
    { value: "digital-marketing", label: "Digital Marketing", icon: Search },
    { value: "consulting", label: "Technology Consulting", icon: Users },
    { value: "other", label: "Other Services", icon: MessageCircle }
  ];

  const budgetRanges = [
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+"
  ];

  const urgencyOptions = [
    "ASAP (Within 1 month)",
    "Soon (1-3 months)",
    "Future Planning (3-6 months)",
    "Just Exploring Options"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex e-commerce or mobile apps can take 6-12 weeks."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer comprehensive maintenance packages including updates, security monitoring, and technical support."
    },
    {
      question: "What's included in your pricing?",
      answer: "Our pricing includes design, development, testing, launch, and 30 days of post-launch support. Additional services are clearly outlined."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing business systems, CRMs, and databases to enhance your current workflow."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32"
        style={{ background: 'var(--theme-background, #f3f3e9)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
            GET IN TOUCH
          </div>
          <Badge variant="outline" className="mb-6">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Build Something{" "}
            <span className="text-tech-accent">Amazing Together</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? We'd love to hear about your project and discuss how we can help you achieve your digital goals.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-tech-accent">&lt; 2 Hours</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-tech-accent">Free</div>
              <div className="text-sm text-muted-foreground">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-tech-accent">150+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              CONTACT OPTIONS
            </div>
            <Badge variant="outline" className="mb-4">Contact Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your Preferred Way to Connect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-tech-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <p className="font-semibold text-foreground mb-2">{method.value}</p>
                <p className="text-xs text-muted-foreground mb-4">{method.available}</p>
                <Button variant="outline" className="w-full">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20"
        style={{ background: 'var(--theme-background, #f3f3e9)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
                PROJECT DETAILS
              </div>
              <Badge variant="outline" className="mb-4">Project Details</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tell Us About Your Project
              </h2>
              <p className="text-muted-foreground mb-8">
                The more details you provide, the better we can understand your needs and provide an accurate estimate.
              </p>

              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label>Services Needed *</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            <div className="flex items-center gap-2">
                              <service.icon className="w-4 h-4" />
                              {service.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your project, goals, and any specific requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  {/* Newsletter Checkbox */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for tech insights and business tips
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="cta" size="lg" className="w-full group">
                    Send Project Details
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll respond within 2 hours during business hours
                  </p>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-tech-accent" />
                    <div>
                      <p className="font-medium">Our Office</p>
                      <p className="text-sm text-muted-foreground">123 Tech Street, Innovation City, IC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-tech-accent" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-tech-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hello@razerfast.com</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* What Happens Next */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-tech-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-tech-accent">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Quick Response</p>
                      <p className="text-sm text-muted-foreground">We'll review your project and respond within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-tech-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-tech-accent">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Free Consultation</p>
                      <p className="text-sm text-muted-foreground">30-minute call to discuss your goals and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-tech-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-tech-accent">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Custom Proposal</p>
                      <p className="text-sm text-muted-foreground">Detailed proposal with timeline and pricing</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* FAQ */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <p className="font-medium text-sm mb-1">{faq.question}</p>
                      <p className="text-xs text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="bg-muted/50 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-tech-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Find Us</h3>
                <p className="text-muted-foreground">123 Tech Street, Innovation City</p>
                <Button variant="outline" className="mt-4">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;