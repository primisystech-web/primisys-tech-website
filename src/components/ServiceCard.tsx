import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <GlassCard
      className={cn(
        "group p-6 opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${delay}ms` } as React.CSSProperties}
    >
      {/* Icon container */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </GlassCard>
  );
};

export default ServiceCard;
