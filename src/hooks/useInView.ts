import { useEffect, useRef, useState } from "react";

export default function useInView<T extends HTMLElement>(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options?.once !== false) observer.unobserve(entry.target);
      } else if (options?.once === false) {
        setInView(false);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.root, options?.rootMargin, options?.threshold, options?.once]);

  return { ref, inView } as const;
}
