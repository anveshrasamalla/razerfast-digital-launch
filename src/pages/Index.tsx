import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Zap } from "lucide-react";
const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["visible", "sleek", "Automated", "Optimized", "Scalable"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <Layout>
      <style>
        {`.min-h-screen { background: #F5F4F1 !important; }`}
      </style>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: '#F5F4F1'
    }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Small subtitle */}
          <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-12">
            RIGHT TOOLS. RIGHT TEAM. RAZERFAST.
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-wide mb-8">
            Let's make your business{" "}
            <span 
              key={currentWord}
              className="inline-block transition-all duration-700 ease-in-out"
              style={{
                animation: 'fade-in 0.7s ease-out forwards'
              }}
            >
              {words[currentWord]}
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-foreground font-medium tracking-wide">
            On‑Time. On‑Budget. On‑Point.
          </p>
        </div>
      </section>

      {/* Portfolio Grid - Humaan Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{
      backgroundColor: '#F5F4F1'
    }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              OUR WORK
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Our Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large Card */}
            <div className="md:col-span-2 lg:col-span-2">
              <Card className="group overflow-hidden border-0 shadow-none bg-card hover:shadow-lg transition-all duration-500 h-96 hover:scale-105">
                <div className="relative h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-foreground mb-2">AutoCare Pro</h3>
                    <p className="text-muted-foreground">Complete automotive service platform</p>
                    <Badge className="mt-4">Automotive</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Tall Card */}
            <div className="lg:row-span-2">
              <Card className="group overflow-hidden border-0 shadow-none bg-card hover:shadow-lg transition-all duration-500 h-96 lg:h-full hover:scale-105">
                <div className="relative h-full bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Café Blend</h3>
                    <p className="text-muted-foreground">Modern café experience</p>
                    <Badge className="mt-4">Food & Beverage</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Wide Card */}
            <div className="md:col-span-2">
              <Card className="group overflow-hidden border-0 shadow-none bg-card hover:shadow-lg transition-all duration-500 h-64 hover:scale-105">
                <div className="relative h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
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

      {/* About Section - Humaan Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{
      backgroundColor: '#F5F4F1'
    }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              ABOUT US
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                <span className="inline-block hover:text-tech-accent transition-colors duration-500 cursor-default">Great</span>{" "}
                <span className="inline-block hover:text-tech-accent transition-colors duration-500 cursor-default">work</span>{" "}
                <span className="inline-block hover:text-tech-accent transition-colors duration-500 cursor-default">for</span>{" "}
                <span className="inline-block hover:text-tech-accent transition-colors duration-500 cursor-default">great</span>{" "}
                <span className="inline-block hover:text-tech-accent transition-colors duration-500 cursor-default">people.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We put people first, understanding that a well-crafted digital presence significantly impacts local businesses. By empowering our clients, we solve unique challenges and unlock growth potential.
              </p>
              <Button variant="ghost" className="group text-lg">
                About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2 hover:text-tech-accent transition-colors duration-300 cursor-default">100%</div>
                <div className="text-muted-foreground">Local & Independent</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2 hover:text-tech-accent transition-colors duration-300 cursor-default">5+</div>
                <div className="text-muted-foreground">Years crafting digital experiences</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2 hover:text-tech-accent transition-colors duration-300 cursor-default">50+</div>
                <div className="text-muted-foreground">Successful local business transformations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{
      backgroundColor: '#F5F4F1'
    }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-tech-accent/20 group-hover:scale-110 transition-all duration-300">
                <Zap className="w-8 h-8 text-tech-accent group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-tech-accent transition-colors duration-300">Web Development</h3>
              <p className="text-muted-foreground">Modern, responsive websites that convert visitors into customers</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-tech-accent/20 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-tech-accent group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-tech-accent transition-colors duration-300">E-Commerce</h3>
              <p className="text-muted-foreground">Complete online stores with payment processing and inventory management</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-tech-accent/20 group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-tech-accent group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-tech-accent transition-colors duration-300">Digital Strategy</h3>
              <p className="text-muted-foreground">Data-driven strategies to maximize your online presence and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{
      backgroundColor: '#F5F4F1'
    }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
            LET'S WORK TOGETHER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            <span className="inline-block hover:text-tech-accent transition-colors duration-500 cursor-default">Ready</span>{" "}
            <span className="inline-block hover:text-tech-accent transition-colors duration-500 cursor-default">to</span>{" "}
            <span className="inline-block hover:text-tech-accent transition-colors duration-500 cursor-default">go</span>{" "}
            <span className="inline-block hover:text-tech-accent transition-colors duration-500 cursor-default">digital?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the growing number of local businesses succeeding online. Let's build something extraordinary together.
          </p>
          <Button variant="default" size="lg" className="group text-lg px-8 py-6 hover:scale-105 transition-all duration-300">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </Layout>;
};
export default Index;