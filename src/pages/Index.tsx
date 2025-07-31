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
      {/* Hero Section - Humaan Style */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 overflow-hidden">
            <div className="animate-text-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-tight tracking-tight group">
                <span className="inline-block animate-word-fade opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.4s' }}>
                  Extraordinary
                </span>
              </h1>
            </div>
            <div className="animate-text-reveal opacity-0" style={{ animationDelay: '0.6s' }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-tight tracking-tight group">
                <span className="inline-block animate-word-fade opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.8s' }}>
                  Digital
                </span>{" "}
                <span className="inline-block animate-word-fade opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '1.0s' }}>
                  Experiences
                </span>
              </h1>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We design, build and ship{" "}
              <span className="hover:text-tech-accent transition-colors duration-300 cursor-default">world-class</span>{" "}
              digital products for{" "}
              <span className="hover:text-tech-accent transition-colors duration-300 cursor-default">forward-thinking</span>{" "}
              local businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: '1.4s' }}>
            <Button variant="default" size="lg" className="group text-lg px-8 py-6 hover:scale-105 transition-all duration-300">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="ghost" size="lg" className="group text-lg px-8 py-6 hover:scale-105 transition-all duration-300">
              <Play className="w-5 h-5 mr-2" />
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Humaan Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              OUR WORK
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block animate-letter-slide opacity-0" style={{ animationDelay: '0.3s' }}>O</span>
              <span className="inline-block animate-letter-slide opacity-0" style={{ animationDelay: '0.4s' }}>u</span>
              <span className="inline-block animate-letter-slide opacity-0" style={{ animationDelay: '0.5s' }}>r</span>
              <span className="inline-block animate-letter-slide opacity-0 mr-4" style={{ animationDelay: '0.6s' }}> </span>
              <span className="inline-block animate-letter-slide opacity-0" style={{ animationDelay: '0.7s' }}>W</span>
              <span className="inline-block animate-letter-slide opacity-0" style={{ animationDelay: '0.8s' }}>o</span>
              <span className="inline-block animate-letter-slide opacity-0" style={{ animationDelay: '0.9s' }}>r</span>
              <span className="inline-block animate-letter-slide opacity-0" style={{ animationDelay: '1.0s' }}>k</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large Card */}
            <div className="md:col-span-2 lg:col-span-2 animate-slide-in-left opacity-0" style={{ animationDelay: '0.4s' }}>
              <Card className="group overflow-hidden border-0 shadow-none bg-card hover:shadow-lg transition-all duration-500 h-96 hover:scale-105">
                <div className="relative h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-foreground mb-2 animate-clip-path opacity-0" style={{ animationDelay: '0.8s' }}>AutoCare Pro</h3>
                    <p className="text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '1.0s' }}>Complete automotive service platform</p>
                    <Badge className="mt-4 animate-scale-reveal opacity-0" style={{ animationDelay: '1.2s' }}>Automotive</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Tall Card */}
            <div className="lg:row-span-2 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
              <Card className="group overflow-hidden border-0 shadow-none bg-card hover:shadow-lg transition-all duration-500 h-96 lg:h-full hover:scale-105">
                <div className="relative h-full bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-foreground mb-2 animate-reveal-text opacity-0" style={{ animationDelay: '1.0s' }}>Café Blend</h3>
                    <p className="text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>Modern café experience</p>
                    <Badge className="mt-4 animate-scale-reveal opacity-0" style={{ animationDelay: '1.4s' }}>Food & Beverage</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Wide Card */}
            <div className="md:col-span-2 animate-slide-in-left opacity-0" style={{ animationDelay: '0.8s' }}>
              <Card className="group overflow-hidden border-0 shadow-none bg-card hover:shadow-lg transition-all duration-500 h-64 hover:scale-105">
                <div className="relative h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-foreground mb-2 animate-clip-path opacity-0" style={{ animationDelay: '1.2s' }}>FreshMart Online</h3>
                    <p className="text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '1.4s' }}>Grocery delivery platform</p>
                    <Badge className="mt-4 animate-scale-reveal opacity-0" style={{ animationDelay: '1.6s' }}>E-Commerce</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Humaan Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              ABOUT US
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                <span className="inline-block animate-reveal-text opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.4s' }}>Great</span>{" "}
                <span className="inline-block animate-reveal-text opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.6s' }}>work</span>{" "}
                <span className="inline-block animate-reveal-text opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.8s' }}>for</span>{" "}
                <span className="inline-block animate-reveal-text opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '1.0s' }}>great</span>{" "}
                <span className="inline-block animate-reveal-text opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '1.2s' }}>people.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '1.4s' }}>
                We put people first, understanding that a well-crafted digital presence significantly impacts local businesses. By empowering our clients, we solve unique challenges and unlock growth potential.
              </p>
              <Button variant="ghost" className="group text-lg animate-scale-reveal opacity-0" style={{ animationDelay: '1.6s' }}>
                About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            <div className="space-y-8 animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
              <div className="text-center animate-scale-reveal opacity-0" style={{ animationDelay: '1.0s' }}>
                <div className="text-4xl font-bold text-foreground mb-2 hover:text-tech-accent transition-colors duration-300 cursor-default">100%</div>
                <div className="text-muted-foreground">Local & Independent</div>
              </div>
              <div className="text-center animate-scale-reveal opacity-0" style={{ animationDelay: '1.2s' }}>
                <div className="text-4xl font-bold text-foreground mb-2 hover:text-tech-accent transition-colors duration-300 cursor-default">5+</div>
                <div className="text-muted-foreground">Years crafting digital experiences</div>
              </div>
              <div className="text-center animate-scale-reveal opacity-0" style={{ animationDelay: '1.4s' }}>
                <div className="text-4xl font-bold text-foreground mb-2 hover:text-tech-accent transition-colors duration-300 cursor-default">50+</div>
                <div className="text-muted-foreground">Successful local business transformations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: 'var(--theme-background, #f3f3e9)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="inline-block animate-letter-slide opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.4s' }}>W</span>
              <span className="inline-block animate-letter-slide opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.5s' }}>h</span>
              <span className="inline-block animate-letter-slide opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.6s' }}>a</span>
              <span className="inline-block animate-letter-slide opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.7s' }}>t</span>
              <span className="inline-block animate-letter-slide opacity-0 mr-4" style={{ animationDelay: '0.8s' }}> </span>
              <span className="inline-block animate-letter-slide opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.9s' }}>W</span>
              <span className="inline-block animate-letter-slide opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '1.0s' }}>e</span>
              <span className="inline-block animate-letter-slide opacity-0 mr-4" style={{ animationDelay: '1.1s' }}> </span>
              <span className="inline-block animate-letter-slide opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '1.2s' }}>D</span>
              <span className="inline-block animate-letter-slide opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '1.3s' }}>o</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '1.5s' }}>
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-tech-accent/20 group-hover:scale-110 transition-all duration-300">
                <Zap className="w-8 h-8 text-tech-accent group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-tech-accent transition-colors duration-300">Web Development</h3>
              <p className="text-muted-foreground">Modern, responsive websites that convert visitors into customers</p>
            </div>

            <div className="text-center group animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 bg-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-tech-accent/20 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-tech-accent group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-tech-accent transition-colors duration-300">E-Commerce</h3>
              <p className="text-muted-foreground">Complete online stores with payment processing and inventory management</p>
            </div>

            <div className="text-center group animate-slide-up opacity-0" style={{ animationDelay: '1.0s' }}>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            LET'S WORK TOGETHER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block animate-reveal-text opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.4s' }}>Ready</span>{" "}
            <span className="inline-block animate-reveal-text opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.6s' }}>to</span>{" "}
            <span className="inline-block animate-reveal-text opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '0.8s' }}>go</span>{" "}
            <span className="inline-block animate-reveal-text opacity-0 hover:text-tech-accent transition-colors duration-500 cursor-default" style={{ animationDelay: '1.0s' }}>digital?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
            Join the growing number of local businesses succeeding online. Let's build something extraordinary together.
          </p>
          <Button variant="default" size="lg" className="group text-lg px-8 py-6 animate-scale-reveal opacity-0 hover:scale-105 transition-all duration-300" style={{ animationDelay: '1.4s' }}>
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
