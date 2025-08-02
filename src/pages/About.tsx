import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  Target, 
  Heart, 
  Award,
  Code2,
  Lightbulb,
  Shield,
  Zap,
  Sparkles,
  TrendingUp,
  Globe,
  Clock
} from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Simplicity",
      description: "We cut through the tech jargon and deliver solutions that are easy to understand and use. No complexity, just results.",
      delay: "delay-100"
    },
    {
      icon: Clock,
      title: "Speed",
      description: "Time is money in business. We deliver projects fast without compromising quality, getting you online quickly.",
      delay: "delay-200"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear communication, honest timelines, and upfront pricing. No hidden fees, no surprises - just honest business.",
      delay: "delay-300"
    },
    {
      icon: Users,
      title: "Community",
      description: "We're invested in the success of local businesses. Your growth strengthens our community, and we're here for the long haul.",
      delay: "delay-400"
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Developer",
      bio: "Former corporate tech consultant who saw the gap between enterprise solutions and small business needs. Founded Razerfast to bridge that divide.",
      expertise: ["Full-Stack Development", "Business Strategy", "Team Leadership"],
      delay: "delay-100"
    },
    {
      name: "Sarah Rodriguez",
      role: "Creative Director",
      bio: "Brand strategist and designer who believes every business has a unique story worth telling. Specializes in making complex ideas simple and beautiful.",
      expertise: ["Brand Design", "User Experience", "Visual Strategy"],
      delay: "delay-200"
    },
    {
      name: "Mike Thompson",
      role: "Digital Growth Specialist",
      bio: "Local marketing expert who helps businesses get found online. Obsessed with turning website visitors into loyal customers.",
      expertise: ["Local SEO", "Conversion Optimization", "Analytics"],
      delay: "delay-300"
    },
    {
      name: "Lisa Park",
      role: "Client Success Manager",
      bio: "The bridge between our technical team and your business goals. Ensures every project exceeds expectations and deadlines.",
      expertise: ["Project Management", "Client Relations", "Quality Assurance"],
      delay: "delay-400"
    }
  ];

  const stats = [
    { number: "2020", label: "Founded", icon: Clock, delay: "delay-100" },
    { number: "150+", label: "Projects Completed", icon: TrendingUp, delay: "delay-200" },
    { number: "98%", label: "Client Satisfaction", icon: Heart, delay: "delay-300" },
    { number: "50+", label: "Industries Served", icon: Globe, delay: "delay-400" }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a mission to help local businesses succeed online",
      delay: "delay-100"
    },
    {
      year: "2021",
      title: "First 50 Clients",
      description: "Reached our first major milestone helping automotive shops and cafes go digital",
      delay: "delay-200"
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Named 'Best Local Web Agency' by the Chamber of Commerce",
      delay: "delay-300"
    },
    {
      year: "2023",
      title: "100+ Success Stories",
      description: "Helped over 100 businesses transform their digital presence",
      delay: "delay-400"
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Grew team and expanded services to include advanced AI integration",
      delay: "delay-500"
    }
  ];

  return (
    <Layout>
      <div className="font-mono overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-tech-accent/5 rounded-full animate-float"></div>
          <div className="absolute top-1/2 right-20 w-24 h-24 bg-primary/5 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-tech-accent/10 rounded-full animate-float animation-delay-2000"></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative" style={{ backgroundColor: '#A8C4B5' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4 animate-slide-in-left">
              ABOUT RAZERFAST
            </div>
            <Badge variant="outline" className="mb-6 animate-scale-in hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-3 h-3 mr-1" />
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-reveal-text">
              Helping Local Businesses{" "}
              <span className="text-tech-accent relative">
                Go Digital Fast
                <div className="absolute -inset-1 bg-tech-accent/20 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in delay-300">
              Founded in 2020, Razerfast was born from a simple observation: too many great local businesses 
              were being left behind in the digital revolution. We exist to change that by making powerful 
              online presence accessible, affordable, and achievable for every small and medium business.
            </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-500">
                  <Button variant="default" size="lg" className="group hover:shadow-tech transition-all duration-300 hover:scale-105">
                    Meet Our Team
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <Button variant="outline" size="lg" className="hover:bg-tech-accent/10 hover:border-tech-accent transition-all duration-300">
                    Our Process
                  </Button>
                </div>
              </div>
              <div className="relative animate-slide-in-right">
                <div className="relative group">
                  <img 
                    src={teamImage} 
                    alt="Razerfast team collaboration" 
                    className="rounded-2xl shadow-elegant group-hover:shadow-tech transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-tech-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-tech-accent text-tech-accent-foreground p-6 rounded-xl shadow-tech animate-bounce-in delay-700 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section className="py-16 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-tech-accent/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center group animate-fade-in ${stat.delay}`}>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-tech-accent/20 rounded-full flex items-center justify-center group-hover:bg-tech-accent/30 transition-all duration-300 group-hover:scale-110">
                      <stat.icon className="w-6 h-6 text-tech-accent" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-tech-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Mission & Values */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
                OUR VALUES
              </div>
              <Badge variant="outline" className="mb-4 hover:bg-tech-accent/10 hover:border-tech-accent transition-all duration-300">
                <Target className="w-3 h-3 mr-1" />
                Our Values
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-reveal-text">
                Built on Simplicity, Speed, Transparency & Community
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
                These four core values guide every decision we make and every solution we build. 
                They're not just words on a wall - they're our commitment to you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className={`text-center p-6 hover:shadow-tech transition-all duration-500 group border-0 bg-card/50 backdrop-blur-sm hover:bg-card hover:scale-105 animate-scale-reveal ${value.delay}`}>
                  <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-tech-accent/20 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-tech-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-accent transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Redesigned Journey Section */}
        <section className="py-20 relative" style={{ backgroundColor: '#A8C4B5' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-background/30 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16 animate-fade-in">
              <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
                OUR JOURNEY
              </div>
              <Badge variant="outline" className="mb-4 hover:bg-tech-accent/10 hover:border-tech-accent transition-all duration-300">
                <Award className="w-3 h-3 mr-1" />
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-reveal-text">
                Our Vision: The Go-To Tech Partner for Non-Digital-First Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
                We envision a future where every local business - from the corner cafe to the family auto shop - 
                has the digital tools they need to compete and thrive in an increasingly connected world.
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-6 items-start group animate-slide-in-left ${milestone.delay}`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-tech-accent rounded-full flex items-center justify-center text-tech-accent-foreground font-bold text-sm group-hover:scale-110 group-hover:shadow-tech transition-all duration-300 relative overflow-hidden">
                      <span className="relative z-10">{milestone.year}</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-tech-accent to-tech-accent/80 group-hover:rotate-180 transition-transform duration-500"></div>
                    </div>
                  </div>
                  <Card className="flex-1 p-6 group-hover:shadow-tech group-hover:scale-105 transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-accent transition-colors duration-300">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Team Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
                MEET THE TEAM
              </div>
              <Badge variant="outline" className="mb-4 hover:bg-tech-accent/10 hover:border-tech-accent transition-all duration-300">
                <Users className="w-3 h-3 mr-1" />
                Meet the Team
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-reveal-text">
                The Experts Behind Your Success
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
                Our diverse team brings together years of experience in technology, design, 
                marketing, and business strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className={`p-6 hover:shadow-tech transition-all duration-500 group border-0 bg-card/50 backdrop-blur-sm hover:bg-card hover:scale-105 animate-scale-reveal ${member.delay}`}>
                  <div className="w-20 h-20 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-tech-accent/20 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                    <Users className="w-10 h-10 text-tech-accent relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-tech-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-center group-hover:text-tech-accent transition-colors duration-300">{member.name}</h3>
                  <p className="text-tech-accent text-center mb-4 font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1 hover:bg-tech-accent/20 hover:text-tech-accent transition-all duration-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

          {/* Tech, Trust, and Transformation Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <Badge variant="outline" className="mb-4 hover:bg-tech-accent/10 hover:border-tech-accent transition-all duration-300">
                <Sparkles className="w-3 h-3 mr-1" />
                Our Foundation
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-reveal-text">
                Tech, Trust, and Transformation
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group animate-scale-reveal delay-100">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-accent/20 to-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-tech transition-all duration-300">
                  <Code2 className="w-12 h-12 text-tech-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-tech-accent transition-colors">Tech</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cutting-edge technology made simple. We use the latest tools and frameworks to build 
                  fast, secure, and scalable solutions that grow with your business.
                </p>
              </div>
              
              <div className="text-center group animate-scale-reveal delay-200">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-accent/20 to-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-tech transition-all duration-300">
                  <Shield className="w-12 h-12 text-tech-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-tech-accent transition-colors">Trust</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transparent communication, honest pricing, and reliable delivery. We build lasting 
                  partnerships based on mutual respect and shared success.
                </p>
              </div>
              
              <div className="text-center group animate-scale-reveal delay-300">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-accent/20 to-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-tech transition-all duration-300">
                  <TrendingUp className="w-12 h-12 text-tech-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-tech-accent transition-colors">Transformation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real results that matter. We don't just build websites - we transform how your 
                  business operates, connects with customers, and drives growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-tech-accent/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-tech-accent/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-foreground/10 rounded-full blur-lg animate-float animation-delay-1000"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-tech-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-tech-accent" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-reveal-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
                Join the hundreds of local businesses that have chosen Razerfast as their digital growth partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
                <Button variant="default" size="xl" className="group bg-tech-accent text-tech-accent-foreground hover:bg-tech-accent/90 hover:shadow-tech hover:scale-105 transition-all duration-300">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground hover:scale-105 transition-all duration-300">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;