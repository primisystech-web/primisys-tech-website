import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  style?: CSSProperties;
}

export const GlassCard = ({
  children,
  className,
  hover = true,
  glow = false,
  style,
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-card/40 backdrop-blur-xl rounded-xl border border-glass-border/20",
        "transition-all duration-500 ease-out",
        hover && "hover:bg-card/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
        hover && "hover:-translate-y-1",
        glow && "animate-glow-pulse",
        className
      )}
      style={style}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;