import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Small subtitle */}
          <div className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
            RIGHT TOOLS. RIGHT TEAM. RAZERFAST.
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Let's make your business Scalable
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            On-Time. On-Budget. On-Point.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;