import React from "react";
import { TabsTrigger } from "@/components/ui/tabs";
import ServiceLottie from "./ServiceLottie";
import type { LucideIcon } from "lucide-react";

interface Props {
  value: string;
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  lottieUrl?: string;
}

export default function ServiceFlipTrigger({ value, title, subtitle, Icon, lottieUrl }: Props) {
  return (
    <TabsTrigger
      value={value}
      className="tabs-trigger-flip group relative p-0 border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-none hover:shadow-card transition-all duration-300 ring-1 ring-transparent data-[state=active]:ring-tech-accent/50 data-[state=active]:bg-tech-accent/15 data-[state=active]:text-foreground data-[state=active]:shadow-tech rounded-2xl overflow-hidden"
    >
      <div className="flip-group w-full">
        <div className="flip-inner w-full h-full">
          <div className="flip-face front flex flex-col items-center justify-center p-6 min-h-[120px]">
            <Icon className="w-8 h-8 mb-2 text-foreground" />
            <span className="font-semibold">{title}</span>
            <span className="text-xs opacity-70">{subtitle}</span>
          </div>
          <div className="flip-face flip-back flex flex-col items-center justify-center p-6 min-h-[120px] bg-card">
            {lottieUrl ? (
              <ServiceLottie url={lottieUrl} className="w-16 h-16 mb-2" hoverPlay loop />
            ) : (
              <Icon className="w-8 h-8 mb-2 text-tech-accent" />
            )}
            <span className="text-xs text-muted-foreground">View details</span>
          </div>
        </div>
      </div>
    </TabsTrigger>
  );
}
