import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  delay: number;
  duration: number;
}

export const HexagonParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 20 + Math.random() * 40,
          rotation: Math.random() * 360,
          delay: Math.random() * 5,
          duration: 15 + Math.random() * 10,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            transform: `rotate(${particle.rotation}deg)`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ filter: "blur(1px)" }}
          >
            <polygon
              points="50,2 95,25 95,75 50,98 5,75 5,25"
              fill="none"
              stroke="hsl(190 100% 50%)"
              strokeWidth="2"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default HexagonParticles;