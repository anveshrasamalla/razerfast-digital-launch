import { Card } from "@/components/ui/card";

export interface ValueItem {
  icon: any;
  title: string;
  description: string;
  delay?: string;
}

interface AboutValuesProps {
  values: ValueItem[];
}

const AboutValues = ({ values }: AboutValuesProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 animate-reveal-text">
            Empowering Local Businesses Through Technology
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            We bridge the gap between complex technology and practical business needs, making digital transformation accessible and profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, idx) => (
            <Card
              key={idx}
              className={`text-center p-6 hover:shadow-tech transition-all duration-300 group border-0 bg-card/60 backdrop-blur-sm hover:bg-card animate-scale-reveal ${value.delay ?? ''}`}
            >
              <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-tech-accent/20 transition-all duration-300">
                <value.icon className="w-8 h-8 text-tech-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-tech-accent transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
