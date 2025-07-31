import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Zap } from "lucide-react";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Websites", "E-Commerce", "Apps", "Digital Success"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-8">
            Extraordinary
            <span className="text-primary"> Digital Experiences</span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We design, build and ship world-class digital products for forward-thinking local businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="default" size="lg" className="group text-lg px-8 py-6">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="group text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent projects and see how we help businesses succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large Card */}
            <div className="md:col-span-2 lg:col-span-2">
              <Card className="group overflow-hidden hover:shadow-card transition-all duration-300 h-80">
                <div className="relative h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">AutoCare Pro</h3>
                    <p className="text-muted-foreground">Complete automotive service platform</p>
                    <Badge className="mt-4">Automotive</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Tall Card */}
            <div className="lg:row-span-2">
              <Card className="group overflow-hidden hover:shadow-card transition-all duration-300 h-80 lg:h-full">
                <div className="relative h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Café Blend</h3>
                    <p className="text-muted-foreground">Modern café experience</p>
                    <Badge className="mt-4">Food & Beverage</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Wide Card */}
            <div className="md:col-span-2">
              <Card className="group overflow-hidden hover:shadow-card transition-all duration-300 h-60">
                <div className="relative h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">FreshMart Online</h3>
                    <p className="text-muted-foreground">Grocery delivery platform</p>
                    <Badge className="mt-4">E-Commerce</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Great work for great people.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We put people first, understanding that a well-crafted digital presence significantly impacts local businesses. By empowering our clients, we solve unique challenges and unlock growth potential.
              </p>
              <Button variant="outline" className="group">
                About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground text-sm">Local & Independent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Web Development</h3>
              <p className="text-muted-foreground text-sm">Modern, responsive websites that convert visitors into customers</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">E-Commerce</h3>
              <p className="text-muted-foreground text-sm">Complete online stores with payment processing and inventory management</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Digital Strategy</h3>
              <p className="text-muted-foreground text-sm">Data-driven strategies to maximize your online presence and ROI</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to go digital?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join the growing number of local businesses succeeding online. Let's build something extraordinary together.
          </p>
          <Button variant="secondary" size="lg" className="group">
            Start Your Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
