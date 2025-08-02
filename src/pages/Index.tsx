import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Main CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Small subtitle */}
          <div className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
            LET'S WORK TOGETHER
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Ready to go digital?
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Join the growing number of local businesses succeeding online. Let's build something extraordinary together.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg bg-foreground text-background hover:bg-foreground/90 rounded-full group transition-all hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;