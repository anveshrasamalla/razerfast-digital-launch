import { Card } from "@/components/ui/card";
import { LucideProps } from "lucide-react";

export interface StatItem {
  number: string;
  label: string;
  icon: React.ComponentType<LucideProps>;
  delay?: string;
}

interface AboutStatsProps {
  stats: StatItem[];
}

const AboutStats = ({ stats }: AboutStatsProps) => {
  return (
    <section className="relative py-12 md:py-16 bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tech-accent/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className={`text-center p-6 bg-card/70 backdrop-blur-sm border-0 hover:shadow-tech transition-all duration-300 group animate-fade-in ${stat.delay ?? ''}`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-tech-accent/20 rounded-full flex items-center justify-center group-hover:bg-tech-accent/30 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-tech-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
