import { useEffect, useMemo, useRef, useState } from "react";
import useInView from "@/hooks/useInView";

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number; // ms
  easing?: (t: number) => number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function useCountUp<T extends HTMLElement = HTMLSpanElement>({
  start = 0,
  end,
  duration = 1500,
  easing = easeOutCubic,
}: UseCountUpOptions) {
  const { ref, inView } = useInView<T>({ threshold: 0.3 });
  const [value, setValue] = useState(start);
  const frameRef = useRef(0);
  const startRef = useRef<number | null>(null);

  const animate = useMemo(() => {
    return (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const progress = Math.min(1, (ts - startRef.current) / duration);
      const eased = easing(progress);
      const current = Math.round(start + (end - start) * eased);
      setValue(current);
      if (progress < 1) frameRef.current = requestAnimationFrame(animate as FrameRequestCallback);
    };
  }, [start, end, duration, easing]);

  useEffect(() => {
    if (inView) {
      cancelAnimationFrame(frameRef.current);
      startRef.current = null;
      frameRef.current = requestAnimationFrame(animate as FrameRequestCallback);
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, animate]);

  return { ref, value } as const;
}
