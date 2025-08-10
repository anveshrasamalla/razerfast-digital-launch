import { useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface ServiceLottieProps {
  src: string;
  size?: number;
  loop?: boolean;
}

const ServiceLottie = ({ src, size = 160, loop = true }: ServiceLottieProps) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error(`Failed to load Lottie: ${res.status}`);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "error");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (error || !data) return null;

  return (
    <div style={{ width: size, height: size }} aria-hidden>
      <Lottie animationData={data} loop={loop} autoplay />
    </div>
  );
};

export default ServiceLottie;
