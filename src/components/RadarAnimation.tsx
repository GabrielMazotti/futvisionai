import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DollarSign {
  id: number;
  angle: number;
  distance: number;
  glowing: boolean;
}

export const RadarAnimation = () => {
  const [sweepAngle, setSweepAngle] = useState(0);
  const [dollarSigns] = useState<DollarSign[]>([
    { id: 1, angle: 35, distance: 32, glowing: false },
    { id: 2, angle: 95, distance: 58, glowing: false },
    { id: 3, angle: 155, distance: 42, glowing: false },
    { id: 4, angle: 220, distance: 68, glowing: false },
    { id: 5, angle: 285, distance: 38, glowing: false },
    { id: 6, angle: 340, distance: 55, glowing: false },
  ]);

  const [glowingIds, setGlowingIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    let animationFrame: number;
    const startTime = Date.now();
    const duration = 4000; // 4 seconds per rotation

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const currentAngle = ((elapsed % duration) / duration) * 360;
      setSweepAngle(currentAngle);

      // Check which dollar signs should glow
      const newGlowing = new Set<number>();
      dollarSigns.forEach((sign) => {
        const angleDiff = Math.abs(currentAngle - sign.angle);
        const normalizedDiff = Math.min(angleDiff, 360 - angleDiff);
        if (normalizedDiff < 25) {
          newGlowing.add(sign.id);
        }
      });
      setGlowingIds(newGlowing);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [dollarSigns]);

  const getDollarPosition = (angle: number, distance: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    const x = 50 + Math.cos(rad) * (distance / 2.2);
    const y = 50 + Math.sin(rad) * (distance / 2.2);
    return { x: `${x}%`, y: `${y}%` };
  };

  return (
    <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] aspect-square mx-auto">
      {/* Outer glow */}
      <div className="absolute -inset-4 rounded-full bg-primary/5 blur-2xl" />
      
      {/* Main radar container */}
      <div 
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{ 
          background: 'radial-gradient(circle, rgba(10,14,18,0.95) 0%, rgba(10,14,18,1) 100%)',
          boxShadow: 'inset 0 0 60px rgba(0, 212, 255, 0.05), 0 0 40px rgba(0, 212, 255, 0.08)'
        }}
      >
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Concentric circles */}
        <div className="absolute inset-[10%] rounded-full border border-primary/10" />
        <div className="absolute inset-[25%] rounded-full border border-primary/12" />
        <div className="absolute inset-[40%] rounded-full border border-primary/10" />
        <div className="absolute inset-[55%] rounded-full border border-primary/8" />

        {/* Cross lines */}
        <div className="absolute top-1/2 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute left-1/2 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent" />

        {/* Sweep cone (gradient trail) */}
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from ${sweepAngle - 90}deg at 50% 50%, 
              transparent 0deg,
              transparent 320deg,
              rgba(0, 212, 255, 0.02) 340deg,
              rgba(0, 212, 255, 0.08) 355deg,
              rgba(0, 212, 255, 0.15) 359deg,
              transparent 360deg
            )`,
          }}
        />

        {/* Main sweep line */}
        <div
          className="absolute top-1/2 left-1/2 origin-left"
          style={{
            width: '42%',
            height: '2px',
            transform: `rotate(${sweepAngle}deg)`,
            background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, rgba(0, 212, 255, 0.6) 60%, transparent 100%)',
            boxShadow: '0 0 8px hsl(var(--primary) / 0.6), 0 0 16px hsl(var(--primary) / 0.3)',
            marginTop: '-1px',
          }}
        />

        {/* Dollar signs */}
        {dollarSigns.map((sign) => {
          const pos = getDollarPosition(sign.angle, sign.distance);
          const isGlowing = glowingIds.has(sign.id);
          
          return (
            <div
              key={sign.id}
              className="absolute font-bold text-sm sm:text-base md:text-lg transition-all duration-300 pointer-events-none select-none"
              style={{
                left: pos.x,
                top: pos.y,
                transform: 'translate(-50%, -50%)',
                color: isGlowing ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.3)',
                textShadow: isGlowing 
                  ? '0 0 8px hsl(var(--primary)), 0 0 16px hsl(var(--primary) / 0.6), 0 0 24px hsl(var(--primary) / 0.3)' 
                  : 'none',
                filter: isGlowing ? 'brightness(1.3)' : 'brightness(0.6)',
              }}
            >
              $
            </div>
          );
        })}

        {/* Center pulsating point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary"
            style={{
              boxShadow: '0 0 12px hsl(var(--primary)), 0 0 24px hsl(var(--primary) / 0.5)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Inner glow ring */}
        <div 
          className="absolute inset-[45%] rounded-full"
          style={{
            boxShadow: 'inset 0 0 20px rgba(0, 212, 255, 0.1)',
          }}
        />
      </div>
    </div>
  );
};
