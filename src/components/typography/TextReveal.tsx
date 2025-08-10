import React from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

const TextReveal = ({ text, className }: TextRevealProps) => {
  return (
    <h2 className={cn("tracking-tight", className)}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="inline-block animate-reveal-text"
          style={{ animationDelay: `${i * 30}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </h2>
  );
};

export default TextReveal;
