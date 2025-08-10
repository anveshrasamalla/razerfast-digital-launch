import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedBlobsProps {
  className?: string;
  count?: number;
}

// Lightweight CSS-only morphing blobs for background ambience
// Uses design tokens via HSL variables, respects reduced motion
const AnimatedBlobs: React.FC<AnimatedBlobsProps> = ({ className, count = 3 }) => {
  const blobs = Array.from({ length: count });

  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden>
      {/* Keyframes local to this component */}
      <style>{`
        @keyframes blob-morph {
          0%   { border-radius: 38% 62% 55% 45% / 45% 40% 60% 55%; transform: translate3d(0,0,0) scale(1); }
          25%  { border-radius: 58% 42% 35% 65% / 50% 60% 40% 50%; transform: translate3d(2%, -1%, 0) scale(1.05); }
          50%  { border-radius: 42% 58% 65% 35% / 42% 48% 52% 58%; transform: translate3d(-1%, 2%, 0) scale(0.98); }
          75%  { border-radius: 48% 52% 42% 58% / 58% 42% 58% 42%; transform: translate3d(-2%, -2%, 0) scale(1.03); }
          100% { border-radius: 38% 62% 55% 45% / 45% 40% 60% 55%; transform: translate3d(0,0,0) scale(1); }
        }
        @keyframes float-slow {
          0%   { transform: translateY(0) }
          50%  { transform: translateY(-8px) }
          100% { transform: translateY(0) }
        }
        @media (prefers-reduced-motion: reduce) {
          .rf-blob { animation: none !important; }
        }
      `}</style>

      {blobs.map((_, i) => (
        <span
          key={i}
          className="rf-blob absolute rounded-[40%] mix-blend-screen"
          style={{
            width: `clamp(200px, ${24 + i * 6}vw, 520px)`,
            height: `clamp(200px, ${24 + i * 6}vw, 520px)`,
            top: i === 0 ? "8%" : i === 1 ? "55%" : "20%",
            left: i === 0 ? "-5%" : i === 1 ? "60%" : "75%",
            filter: "blur(28px)",
            background:
              i % 2 === 0
                ? "linear-gradient(135deg, hsl(var(--primary) / 0.35), hsl(var(--tech-accent) / 0.35))"
                : "linear-gradient(135deg, hsl(var(--tech-accent) / 0.28), hsl(var(--primary) / 0.28))",
            animation: `blob-morph ${16 + i * 4}s ease-in-out infinite alternate` as any,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBlobs;
