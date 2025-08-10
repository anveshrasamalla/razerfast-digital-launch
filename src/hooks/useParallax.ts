import { useEffect, useRef, useState } from "react";

export default function useParallax<T extends HTMLElement>(speed: number = 0.2) {
  const ref = useRef<T | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) {
        raf = requestAnimationFrame(update);
        return;
      }
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 0;
      const offset = (rect.top - viewport / 2) * speed;
      setY(offset);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return { ref, style: { transform: `translateY(${y}px)` } as React.CSSProperties } as const;
}
