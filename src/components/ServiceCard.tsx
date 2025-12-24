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
        "group p-6 cursor-pointer opacity-0 animate-fade-in",
        "hover:scale-[1.02]"
      )}
      style={{ animationDelay: `${delay}ms` } as React.CSSProperties}
    >
      {/* Icon container with hexagonal background */}
      <div className="relative mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
          <Icon className="w-7 h-7 text-primary group-hover:text-glow-primary transition-colors duration-300" />
        </div>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </GlassCard>
  );
};

export default ServiceCard;