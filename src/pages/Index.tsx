import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Zap, ShoppingCart, BarChart3 } from "lucide-react";
const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Visible", "Trusted", "Automated", "Optimized", "Digital"];
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
      backgroundColor: "#F5F4F1"
    }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Small subtitle */}
          <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-12">
            RIGHT TOOLS. RIGHT TEAM. RAZERFAST.
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-wide mb-8 flex flex-wrap justify-center">
            Let’s make your business&nbsp;
            <span className="relative w-[150px] inline-block text-left" style={{
            minHeight: "1em"
          }}>
              <span key={words[currentWord]} className="absolute left-0 top-0 transition-opacity duration-500 ease-in-out animate-fade-in-up">
                {words[currentWord]}
              </span>
            </span>
          </h1>

        </div>
      </section>

      {/* What We Do Section */}
      <section style={{
      backgroundColor: "#F5F4F1"
    }} className="px-4 sm:px-6 lg:px-8 py-[50px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group animate-fade-in hover-scale transition-all duration-300 hover:bg-white/50 rounded-lg p-6 -m-6">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">Web Development</h3>
              <p className="text-muted-foreground">
                Modern, responsive websites that convert visitors into customers
              </p>
            </div>
            
            <div className="text-center group animate-fade-in hover-scale transition-all duration-300 hover:bg-white/50 rounded-lg p-6 -m-6" style={{
            animationDelay: '0.1s'
          }}>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ShoppingCart className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">E-Commerce</h3>
              <p className="text-muted-foreground">
                Complete online stores with payment processing and inventory management
              </p>
            </div>
            
            <div className="text-center group animate-fade-in hover-scale transition-all duration-300 hover:bg-white/50 rounded-lg p-6 -m-6" style={{
            animationDelay: '0.2s'
          }}>
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <BarChart3 className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">Digital Strategy</h3>
              <p className="text-muted-foreground">
                Data-driven strategies to maximize your online presence and ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Project - Woolworths */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <div className="absolute top-6 left-6 z-10 flex gap-3">
                  <Badge className="bg-black/80 text-white border-white/20 hover:bg-black/90">
                    RETAIL
                  </Badge>
                  <Badge className="bg-black/80 text-white border-white/20 hover:bg-black/90">
                    E-COMMERCE
                  </Badge>
                </div>
                <img 
                  src="/lovable-uploads/99dfd55f-9cee-46e1-a6d7-21ebfc3c9b96.png" 
                  alt="Woolworths Project"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-6">
                <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase">
                  WOOLWORTHS
                </div>
                <h3 className="text-4xl md:text-5xl font-light text-white leading-tight">
                  Delivering multiple successful projects for one of South
                </h3>
              </div>
            </div>

            {/* Right Project - Vodacom */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <div className="absolute top-6 left-6 z-10 flex gap-3">
                  <Badge className="bg-black/80 text-white border-white/20 hover:bg-black/90">
                    RESEARCH
                  </Badge>
                  <Badge className="bg-black/80 text-white border-white/20 hover:bg-black/90">
                    MOBILE APP
                  </Badge>
                </div>
                <div className="w-full h-[500px] bg-gradient-to-br from-pink-400 via-purple-500 to-red-500 relative overflow-hidden">
                  {/* Circular design elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Concentric circles */}
                      <div className="absolute inset-0 w-80 h-80 border-4 border-red-400/30 rounded-full animate-pulse"></div>
                      <div className="absolute inset-4 w-72 h-72 border-4 border-red-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute inset-8 w-64 h-64 border-4 border-red-400/70 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      
                      {/* Center portrait placeholder */}
                      <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mt-20">
                        <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-sm">SOON</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase">
                  VODACOM
                </div>
                <h3 className="text-4xl md:text-5xl font-light text-white leading-tight">
                  In-depth research and
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: "#F5F4F1"
    }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-4">
                ABOUT US
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
                Great work for great people.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We put people first, understanding that a well-crafted digital presence significantly impacts local businesses. By empowering our clients, we solve unique challenges and unlock growth potential.
              </p>
              <Button variant="ghost" className="text-foreground hover:bg-foreground/5 p-0 h-auto font-medium">
                About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">100%</div>
                <p className="text-muted-foreground">Local & Independent</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">5+</div>
                <p className="text-muted-foreground">Years crafting digital experiences</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">50+</div>
                <p className="text-muted-foreground">Successful local business transformations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: "#F5F4F1"
    }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-4">
            LET'S WORK TOGETHER
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
            Ready to go digital?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the growing number of local businesses succeeding online. Let's build something extraordinary together.
          </p>
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 text-lg rounded-full">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>;
};
export default Index;