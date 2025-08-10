import React from "react";
import { useInView } from "@/hooks/useInView";

type Step = { title: string; description?: string };

export default function AnimatedTimeline({ steps }: { steps: Step[] }) {
  return (
    <div className="timeline space-y-4">
      {steps.map((s, i) => (
        <TimelineItem key={i} title={s.title} description={s.description} delay={i * 80} />)
      )}
    </div>
  );
}

function TimelineItem({ title, description, delay }: { title: string; description?: string; delay?: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, rootMargin: "0px 0px -60px 0px" });
  return (
    <div
      ref={ref as any}
      className={`timeline-item ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay || 0}ms` }}
    >
      <div className="timeline-dot" />
      <div className="ml-4">
        <div className="font-medium">{title}</div>
        {description && <div className="text-sm text-muted-foreground">{description}</div>}
      </div>
    </div>
  );
}
