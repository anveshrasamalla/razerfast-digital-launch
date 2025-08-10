import React, { useEffect, useRef } from "react";

const PARTICLES = 12;

const CursorSparkle = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const positions = useRef(Array.from({ length: PARTICLES }, () => ({ x: 0, y: 0 })));
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(0 as number);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("pointermove", onMove);

    const loop = () => {
      positions.current = positions.current.map((p, i) => {
        const lerp = 0.15 + i * 0.02;
        return {
          x: p.x + (target.current.x - p.x) * lerp,
          y: p.y + (target.current.y - p.y) * lerp,
        };
      });

      const el = containerRef.current;
      if (el) {
        Array.from(el.children).forEach((child, i) => {
          const p = positions.current[i];
          const node = child as HTMLElement;
          node.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(${1 - i * 0.03})`;
          node.style.opacity = `${Math.max(0, 1 - i * 0.08)}`;
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
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[60] mix-blend-screen">
      {Array.from({ length: PARTICLES }).map((_, i) => (
        <span
          key={i}
          className="absolute left-0 top-0 w-2 h-2 rounded-full shadow-tech"
          style={{
            background: "radial-gradient(circle at center, hsl(var(--tech-accent)) 0%, transparent 70%)",
            filter: "blur(0.5px)",
            transition: "transform 0.12s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default CursorSparkle;
