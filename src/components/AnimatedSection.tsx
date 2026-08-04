import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 65,
        rotateX: -18,
        scale: 0.95
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1], // fluid premium cubic-bezier ease-out
        delay
      }}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
