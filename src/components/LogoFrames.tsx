import { useState, useEffect } from "react";

interface LogoFramesProps {
  totalFrames?: number;
  fps?: number;
  width?: number;
  className?: string;
}

export const LogoFrames = ({
  totalFrames = 178,
  fps = 30,
  width = 200,
  className = "",
}: LogoFramesProps) => {
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev >= totalFrames ? 1 : prev + 1));
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [totalFrames, fps]);

  const paddedIndex = String(currentFrame).padStart(3, "0");
  const frameSrc = `/logo-frames/ezgif-frame-${paddedIndex}.png`;

  return (
    <div className="relative flex items-center justify-center group">
      {/* Tech Blue Ambient Glow Halo */}
      <div 
        className="absolute rounded-full bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-blue-400/30 blur-2xl animate-pulse pointer-events-none"
        style={{ width: `${width * 0.9}px`, height: `${width * 0.9}px` }}
      />
      <img
        src={frameSrc}
        alt="Primisys Tech Logo Animation"
        style={{ width: `${width}px` }}
        className={`relative z-10 h-auto object-contain pointer-events-none ${className}`}
      />
    </div>
  );
};

export default LogoFrames;
