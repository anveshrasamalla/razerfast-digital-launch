import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Zap } from "lucide-react";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Visible", "Trusted", "Automated", "Optimized", "Digital"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <style>
        {`.min-h-screen { background: #F5F4F1 !important; }`}
      </style>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F5F4F1" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Small subtitle */}
          <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-12">
            RIGHT TOOLS. RIGHT TEAM. RAZERFAST.
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-wide mb-8 flex flex-wrap justify-center">
            Let’s make your business&nbsp;
            <span
              className="relative w-[150px] inline-block text-left"
              style={{ minHeight: "1em" }}
            >
              <span
                key={words[currentWord]}
                className="absolute left-0 top-0 transition-opacity duration-500 ease-in-out animate-fade-in-up"
              >
                {words[currentWord]}
              </span>
            </span>
          </h1>

        </div>
      </section>
    </Layout>
  );
};

export default Index;
