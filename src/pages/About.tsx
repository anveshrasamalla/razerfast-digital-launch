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
  Zap
} from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "People-First Approach",
      description: "We believe technology should serve people, not the other way around. Every solution we create puts user experience at the center."
    },
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "We use cutting-edge technologies and best practices to deliver solutions that are fast, secure, and scalable."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide our clients with innovative solutions that give them a competitive edge."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Clear communication, honest timelines, and transparent pricing. We build long-term partnerships based on trust."
    }
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & Lead Developer",
      bio: "10+ years in web development. Former tech lead at major startup. Passionate about helping local businesses thrive.",
      expertise: ["Full-Stack Development", "System Architecture", "Team Leadership"]
    },
    {
      name: "Maria Garcia",
      role: "UX/UI Design Director",
      bio: "Award-winning designer with expertise in user experience. Believes great design should be invisible and intuitive.",
      expertise: ["User Experience", "Interface Design", "Brand Identity"]
    },
    {
      name: "James Chen",
      role: "Digital Marketing Strategist",
      bio: "Results-driven marketer specializing in local SEO and conversion optimization for small businesses.",
      expertise: ["SEO Strategy", "Local Marketing", "Analytics"]
    },
    {
      name: "Sarah Williams",
      role: "Project Manager",
      bio: "Ensures every project delivers on time and exceeds expectations. Master of communication and process optimization.",
      expertise: ["Project Management", "Client Relations", "Quality Assurance"]
    }
  ];

  const stats = [
    { number: "2020", label: "Founded" },
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Industries Served" }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a mission to help local businesses succeed online"
    },
    {
      year: "2021",
      title: "First 50 Clients",
      description: "Reached our first major milestone helping automotive shops and cafes go digital"
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Named 'Best Local Web Agency' by the Chamber of Commerce"
    },
    {
      year: "2023",
      title: "100+ Success Stories",
      description: "Helped over 100 businesses transform their digital presence"
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Grew team and expanded services to include advanced AI integration"
    }
  ];

  return (
    <Layout>
      <style>
        {`.min-h-screen { background: #A8C4B5 !important; }`}
      </style>
      {/* Hero Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#A8C4B5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
                ABOUT RAZERFAST
              </div>
              <Badge variant="outline" className="mb-6">About Razerfast</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                We're not just developers —{" "}
                <span className="text-tech-accent">we're growth partners</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Since 2020, we've been on a mission to level the playing field for local businesses. 
                We believe every small business deserves access to world-class digital solutions 
                that help them compete and thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" className="group">
                  Meet Our Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button variant="minimal" size="lg">
                  Our Process
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Razerfast team collaboration" 
                className="rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 bg-tech-accent text-tech-accent-foreground p-6 rounded-xl shadow-tech">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tech-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              OUR MISSION
            </div>
            <Badge variant="outline" className="mb-4">Our Mission</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Local Businesses Through Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bridge the gap between complex technology and practical business needs, 
              making digital transformation accessible and profitable for every business we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300">
                <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-tech-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20" style={{ backgroundColor: '#A8C4B5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              OUR JOURNEY
            </div>
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Building Success Stories Since 2020
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-tech-accent rounded-full flex items-center justify-center text-tech-accent-foreground font-bold">
                    {milestone.year}
                  </div>
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
              MEET THE TEAM
            </div>
            <Badge variant="outline" className="mb-4">Meet the Team</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Experts Behind Your Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team brings together years of experience in technology, design, 
              marketing, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <div className="w-20 h-20 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-tech-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
                <p className="text-tech-accent text-center mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-tech-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="minimal" size="xl">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;