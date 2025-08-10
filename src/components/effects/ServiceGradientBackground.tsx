import React from "react";

type Props = { activeKey: string };

const gradients: Record<string, string> = {
  web: "linear-gradient(135deg, hsl(var(--tech-accent) / 0.25), hsl(var(--primary) / 0.12))",
  ecommerce: "linear-gradient(135deg, hsl(var(--success) / 0.25), hsl(var(--primary) / 0.12))",
  mobile: "linear-gradient(135deg, hsl(var(--primary) / 0.25), hsl(var(--tech-accent) / 0.12))",
  marketing: "linear-gradient(135deg, hsl(var(--destructive) / 0.2), hsl(var(--tech-accent) / 0.12))",
};

export default function ServiceGradientBackground({ activeKey }: Props) {
  const bg = gradients[activeKey] ?? gradients.web;
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 gradient-animated"
      style={{ backgroundImage: bg, filter: "blur(20px)" }}
    />
  );
}
