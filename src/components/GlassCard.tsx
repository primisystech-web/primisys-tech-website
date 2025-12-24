import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export const GlassCard = ({
  children,
  className,
  hover = true,
  style,
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-card rounded-lg border border-border",
        "transition-all duration-300 ease-out",
        hover && "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
      style={style}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
