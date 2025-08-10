import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-tech-accent/20" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-tech-accent/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-foreground/10 rounded-full blur-lg animate-float animation-delay-1000" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="animate-fade-in">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-tech-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 md:w-10 md:h-10 text-tech-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 animate-reveal-text">
            Ready to Work with Us?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
            Let's discuss how we can help your business achieve its digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <Button
              variant="default"
              size="lg"
              className="group bg-tech-accent text-tech-accent-foreground hover:bg-tech-accent/90 hover:shadow-tech"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
