import { Card } from "@/components/ui/card";

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  delay?: string;
}

interface AboutJourneyProps {
  milestones: MilestoneItem[];
}

const AboutJourney = ({ milestones }: AboutJourneyProps) => {
  return (
    <section className="py-16 md:py-20 relative bg-gradient-to-br from-background to-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <div className="text-sm font-semibold tracking-widest text-muted-foreground/70 uppercase mb-4">
            Our Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground animate-reveal-text">
            Building Success Stories Since 2020
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row gap-4 md:gap-6 items-start group animate-slide-in-left ${milestone.delay ?? ''}`}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-tech-accent rounded-full flex items-center justify-center text-tech-accent-foreground font-bold text-sm group-hover:scale-110 group-hover:shadow-tech transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">{milestone.year}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-tech-accent to-tech-accent/80 group-hover:rotate-180 transition-transform duration-500" />
                </div>
              </div>
              <Card className="flex-1 p-5 md:p-6 group-hover:shadow-tech group-hover:scale-[1.01] transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 group-hover:text-tech-accent transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
