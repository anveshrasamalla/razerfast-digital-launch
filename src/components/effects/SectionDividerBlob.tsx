import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerBlobProps {
  flip?: boolean;
  className?: string;
}

const SectionDividerBlob = ({ flip, className }: SectionDividerBlobProps) => {
  return (
    <div className={cn("relative h-20 overflow-hidden", className)} aria-hidden>
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 -top-10 w-[140%] h-40 rounded-[50%] blur-3xl",
          flip ? "rotate-180" : ""
        )}
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--tech-accent) / 0.15) 0%, transparent 60%)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export default SectionDividerBlob;
