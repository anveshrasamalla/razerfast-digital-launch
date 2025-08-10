import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AboutHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  image?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

const AboutHero = ({ badge, title, subtitle, image, primaryCta, secondaryCta }: AboutHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-tech-accent/20" />
      <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-tech-accent/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-reveal-text">
            <Badge variant="outline" className="mb-2 hover:bg-primary/10 hover:border-primary transition-all duration-300">
              {badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl leading-tight font-semibold text-foreground drop-shadow-sm">
              {title}
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90 animate-fade-in delay-200 max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-slide-up delay-300">
              {primaryCta && (
                <Button size="lg" className="bg-tech-accent text-tech-accent-foreground hover:bg-tech-accent/90 hover:shadow-tech">
                  {primaryCta}
                </Button>
              )}
              {secondaryCta && (
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  {secondaryCta}
                </Button>
              )}
            </div>
          </div>

          {image && (
            <div className="relative animate-slide-in-right">
              <div className="relative group">
                <img
                  src={image}
                  alt="Razerfast team collaboration"
                  className="rounded-2xl shadow-elegant group-hover:shadow-tech transition-all duration-500 group-hover:scale-105 w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-tech-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-tech-accent text-tech-accent-foreground p-6 rounded-xl shadow-tech animate-bounce-in delay-700">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
