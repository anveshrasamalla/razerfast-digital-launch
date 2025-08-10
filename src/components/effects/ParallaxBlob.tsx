import React from "react";
import useParallax from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

interface ParallaxBlobProps {
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ParallaxBlob = ({ speed = 0.2, className, style }: ParallaxBlobProps) => {
  const { ref, style: t } = useParallax<HTMLDivElement>(speed);
  return <div ref={ref} className={cn("rounded-full pointer-events-none", className)} style={{ ...style, ...t }} />;
};

export default ParallaxBlob;
