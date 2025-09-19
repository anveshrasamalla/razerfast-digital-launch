import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden bg-background">
        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Tech Accent Circle */}
          <div className="absolute top-32 right-80 w-16 h-16 bg-tech-accent rounded-full shadow-elegant animate-float"></div>
          
          {/* Primary Donut */}
          <div className="absolute top-20 right-32 w-32 h-32 bg-tech-accent rounded-full shadow-elegant animate-float animation-delay-1000">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background rounded-full"></div>
          </div>
          
          {/* Primary U-Shape */}
          <div className="absolute top-72 right-48 w-48 h-32 perspective-1000">
            <div className="w-full h-full bg-primary rounded-t-full shadow-elegant relative animate-float animation-delay-2000">
              <div className="absolute inset-x-8 top-0 bottom-4 bg-primary rounded-t-full"></div>
              <div className="absolute inset-x-12 top-4 bottom-8 bg-background rounded-t-full"></div>
            </div>
            {/* Tech accent sphere on the U */}
            <div className="absolute -top-4 right-4 w-16 h-16 bg-tech-accent rounded-full shadow-elegant"></div>
            {/* Base platform */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-56 h-8 bg-muted rounded-full shadow-card"></div>
          </div>
          
          {/* Tech Accent Donut Platform */}
          <div className="absolute bottom-32 right-16 w-80 h-20 perspective-1000">
            <div className="w-full h-full bg-tech-accent rounded-full shadow-elegant relative animate-float animation-delay-3000">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-background rounded-full"></div>
              {/* Inner hole highlight */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-foreground/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-start px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-none tracking-tight mb-12">
                <div className="mb-4">We've got a</div>
                <div className="mb-4">great feeling</div>
                <div>about this</div>
              </h1>
              
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 group hover:shadow-elegant"
              >
                Submit a brief
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Footer Contact Info */}
          <div className="px-8 md:px-16 lg:px-24 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-muted-foreground">
              {/* Global Contact */}
              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 mt-1 text-tech-accent" />
                <div>
                  <div className="font-medium text-foreground mb-2">We work globally</div>
                  <div className="text-muted-foreground">contact@razerfast.com</div>
                </div>
              </div>

              {/* USA */}
              <div>
                <div className="font-semibold text-foreground mb-2">USA</div>
                <div className="text-muted-foreground mb-1">Los Angeles, CA</div>
                <div className="text-muted-foreground">jason@razerfast.com</div>
              </div>

              {/* Australia */}
              <div>
                <div className="font-semibold text-foreground mb-2">Australia</div>
                <div className="text-muted-foreground mb-1">Perth, WA</div>
                <div className="text-muted-foreground">jay@razerfast.com.au</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}