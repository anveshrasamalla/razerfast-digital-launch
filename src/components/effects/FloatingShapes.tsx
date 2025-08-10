import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const SHAPES = 8;

const FloatingShapes = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(0 as number);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const loop = () => {
      const el = ref.current;
      if (el) {
        Array.from(el.children).forEach((child, i) => {
          const node = child as HTMLElement;
          const dx = (target.current.x - window.innerWidth / 2) / window.innerWidth;
          const dy = (target.current.y - window.innerHeight / 2) / window.innerHeight;
          const strength = 10 + i * 3;
          node.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
        });
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={ref} className={cn("pointer-events-none fixed inset-0 z-[30]", className)} aria-hidden>
      {Array.from({ length: SHAPES }).map((_, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen opacity-50"
          style={{
            width: `${80 + i * 18}px`,
            height: `${80 + i * 18}px`,
            filter: "blur(20px)",
            background: "radial-gradient(circle at center, hsl(var(--tech-accent)) 0%, transparent 70%)",
            transition: "transform 0.2s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
