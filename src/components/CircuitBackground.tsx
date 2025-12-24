import { useEffect, useRef } from "react";

interface CircuitNode {
  x: number;
  y: number;
  connections: number[];
}

export const CircuitBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateSize = () => {
      svg.setAttribute("width", window.innerWidth.toString());
      svg.setAttribute("height", window.innerHeight.toString());
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Generate random circuit nodes
  const generateNodes = (): CircuitNode[] => {
    const nodes: CircuitNode[] = [];
    const gridSize = 100;
    
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 12; y++) {
        if (Math.random() > 0.6) {
          nodes.push({
            x: x * gridSize + Math.random() * 40 - 20,
            y: y * gridSize + Math.random() * 40 - 20,
            connections: [],
          });
        }
      }
    }

    // Create connections
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i !== j) {
          const dist = Math.sqrt(
            Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
          );
          if (dist < 150 && Math.random() > 0.7) {
            node.connections.push(j);
          }
        }
      });
    });

    return nodes;
  };

  const nodes = generateNodes();

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    >
      <defs>
        <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(190 100% 50%)" stopOpacity="0.6" />
          <stop offset="50%" stopColor="hsl(220 100% 50%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(155 100% 50%)" stopOpacity="0.6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Draw connections */}
      {nodes.map((node, i) =>
        node.connections.map((connIndex, j) => {
          const other = nodes[connIndex];
          if (!other) return null;
          
          // Create path with right angles
          const midX = (node.x + other.x) / 2;
          const useVerticalFirst = Math.random() > 0.5;
          
          const path = useVerticalFirst
            ? `M ${node.x} ${node.y} L ${node.x} ${other.y} L ${other.x} ${other.y}`
            : `M ${node.x} ${node.y} L ${other.x} ${node.y} L ${other.x} ${other.y}`;

          return (
            <path
              key={`${i}-${j}`}
              d={path}
              stroke="url(#circuit-gradient)"
              strokeWidth="1"
              fill="none"
              filter="url(#glow)"
              className="animate-circuit-pulse"
              style={{
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          );
        })
      )}

      {/* Draw nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r="4"
            fill="hsl(190 100% 50%)"
            filter="url(#glow)"
            className="animate-node-pulse"
            style={{
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill="none"
            stroke="hsl(190 100% 50%)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </g>
      ))}
    </svg>
  );
};

export default CircuitBackground;