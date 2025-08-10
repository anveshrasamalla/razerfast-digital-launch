import React from "react";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
}

const animationMap: Record<NonNullable<RevealProps["animation"]>, string> = {
  fade: "animate-fade-in",
  "slide-up": "animate-slide-up",
  "slide-left": "animate-slide-in-left",
  "slide-right": "animate-slide-in-right",
  scale: "animate-scale-reveal",
};

const Reveal = ({ children, className, as = "div", delay = 0, animation = "fade" }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const Comp: any = as;

  return (
    <Comp
      ref={ref}
      className={cn(
        "will-change-transform",
        !inView && "opacity-0 translate-y-4",
        inView && animationMap[animation],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
