import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

type Props = {
  url: string;
  className?: string;
  hoverPlay?: boolean;
  loop?: boolean;
};

export default function ServiceLottie({ url, className, hoverPlay = true, loop = true }: Props) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [playing, setPlaying] = useState(!hoverPlay);

  useEffect(() => {
    let mounted = true;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (mounted) setAnimationData(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, [url]);

  return (
    <div
      className={className}
      onMouseEnter={() => hoverPlay && setPlaying(true)}
      onMouseLeave={() => hoverPlay && setPlaying(false)}
    >
      {animationData ? (
        <Lottie animationData={animationData} loop={loop} autoplay={playing} style={{ width: "100%", height: "100%" }} />
      ) : (
        <div className="w-full h-full rounded-xl bg-secondary animate-pulse" />
      )}
    </div>
  );
}
