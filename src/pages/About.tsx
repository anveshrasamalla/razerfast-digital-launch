import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Heart, Award, Code2, Lightbulb, Shield, Zap, Sparkles, TrendingUp, Globe, Clock } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";
import { useEffect } from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutValues from "@/components/about/AboutValues";
import AboutJourney from "@/components/about/AboutJourney";
import AboutCTA from "@/components/about/AboutCTA";
const About = () => {
  const values = [{
    icon: Heart,
    title: "People-First Approach",
    description: "We believe technology should serve people, not the other way around. Every solution we create puts user experience at the center.",
    delay: "delay-100"
  }, {
    icon: Code2,
    title: "Technical Excellence",
    description: "We use cutting-edge technologies and best practices to deliver solutions that are fast, secure, and scalable.",
    delay: "delay-200"
  }, {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends to provide our clients with innovative solutions that give them a competitive edge.",
    delay: "delay-300"
  }, {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Clear communication, honest timelines, and transparent pricing. We build long-term partnerships based on trust.",
    delay: "delay-400"
  }];
  const team = [{
    name: "Alex Thompson",
    role: "Founder & Lead Developer",
    bio: "10+ years in web development. Former tech lead at major startup. Passionate about helping local businesses thrive.",
    expertise: ["Full-Stack Development", "System Architecture", "Team Leadership"],
    delay: "delay-100"
  }, {
    name: "Maria Garcia",
    role: "UX/UI Design Director",
    bio: "Award-winning designer with expertise in user experience. Believes great design should be invisible and intuitive.",
    expertise: ["User Experience", "Interface Design", "Brand Identity"],
    delay: "delay-200"
  }, {
    name: "James Chen",
    role: "Digital Marketing Strategist",
    bio: "Results-driven marketer specializing in local SEO and conversion optimization for small businesses.",
    expertise: ["SEO Strategy", "Local Marketing", "Analytics"],
    delay: "delay-300"
  }, {
    name: "Sarah Williams",
    role: "Project Manager",
    bio: "Ensures every project delivers on time and exceeds expectations. Master of communication and process optimization.",
    expertise: ["Project Management", "Client Relations", "Quality Assurance"],
    delay: "delay-400"
  }];
  const stats = [{
    number: "2020",
    label: "Founded",
    icon: Clock,
    delay: "delay-100"
  }, {
    number: "150+",
    label: "Projects Completed",
    icon: TrendingUp,
    delay: "delay-200"
  }, {
    number: "98%",
    label: "Client Satisfaction",
    icon: Heart,
    delay: "delay-300"
  }, {
    number: "50+",
    label: "Industries Served",
    icon: Globe,
    delay: "delay-400"
  }];
  const milestones = [{
    year: "2020",
    title: "Company Founded",
    description: "Started with a mission to help local businesses succeed online",
    delay: "delay-100"
  }, {
    year: "2021",
    title: "First 50 Clients",
    description: "Reached our first major milestone helping automotive shops and cafes go digital",
    delay: "delay-200"
  }, {
    year: "2022",
    title: "Award Recognition",
    description: "Named 'Best Local Web Agency' by the Chamber of Commerce",
    delay: "delay-300"
  }, {
    year: "2023",
    title: "100+ Success Stories",
    description: "Helped over 100 businesses transform their digital presence",
    delay: "delay-400"
  }, {
    year: "2024",
    title: "Expansion",
    description: "Grew team and expanded services to include advanced AI integration",
    delay: "delay-500"
  }];
  useEffect(() => {
    document.title = "About Razerfast — Growth Partners";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'About Razerfast: people-first, technical excellence, innovation, trust.');
    }
  }, []);
  return <Layout>
      <div className="overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-tech-accent/5 rounded-full animate-float"></div>
          <div className="absolute top-1/2 right-20 w-24 h-24 bg-primary/5 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-tech-accent/10 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-32 right-1/3 w-40 h-40 bg-tech-accent/3 rounded-full animate-pulse animation-delay-3000"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce animation-delay-4000"></div>
        </div>

        {/* Hero Section */}
        <AboutHero
          badge="About Razerfast"
          title="We're not just developers — we're growth partners"
          subtitle="Since 2020, we've been on a mission to level the playing field for local businesses. We believe every small business deserves access to world-class digital solutions that help them compete and thrive in the digital age."
          image={teamImage}
          primaryCta="Start Your Project"
          secondaryCta="Schedule a Call"
        />

        {/* Stats Section */}
        <AboutStats stats={stats} />

        {/* Mission & Values */}
        <AboutValues values={values} />

        {/* Journey */}
        <AboutJourney milestones={milestones} />

        {/* Enhanced Team Section */}
        

        {/* CTA */}
        <AboutCTA />
      </div>
    </Layout>;
};
export default About;