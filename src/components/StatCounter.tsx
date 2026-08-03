import { useState, useEffect, useRef } from "react";

interface StatCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  label,
  delay = 0,
}: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Jab element screen par view ho tab counting trigger hogi
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(percentage) * end);
      
      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, started]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
        <span className="text-primary">
          {prefix}
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
    </div>
  );
};

export default StatCounter;
