import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

export const StatCounter = ({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  delay = 0,
}: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, duration, started]);

  return (
    <div className={cn("text-center opacity-0", started && "animate-fade-in")}>
      <div className="font-display text-4xl md:text-5xl font-bold text-glow mb-2">
        <span className="text-primary">{prefix}</span>
        <span className="gradient-text">{count}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-muted-foreground text-sm uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
};

export default StatCounter;