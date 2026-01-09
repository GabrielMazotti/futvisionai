import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface DollarSign {
  id: number;
  angle: number;
  distance: number;
  detectedAt: number | null;
}

export const RadarAnimation = () => {
  const [sweepAngle, setSweepAngle] = useState(0);
  const [dollarSigns, setDollarSigns] = useState<DollarSign[]>([
    { id: 1, angle: 45, distance: 35, detectedAt: null },
    { id: 2, angle: 120, distance: 60, detectedAt: null },
    { id: 3, angle: 180, distance: 45, detectedAt: null },
    { id: 4, angle: 240, distance: 70, detectedAt: null },
    { id: 5, angle: 310, distance: 50, detectedAt: null },
  ]);
  
  const lastDetectedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    let animationFrame: number;
    const startTime = Date.now();
    const duration = 5000; // 5 seconds per rotation

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const currentAngle = ((elapsed % duration) / duration) * 360;
      setSweepAngle(currentAngle);

      // Check detection for each dollar sign
      setDollarSigns(prev => {
        return prev.map(sign => {
          // Calculate if sweep line is passing over this dollar sign
          let angleDiff = currentAngle - sign.angle;
          if (angleDiff < 0) angleDiff += 360;
          
          // Detection window: when sweep line is within 5 degrees ahead of the symbol
          const isBeingDetected = angleDiff >= 0 && angleDiff < 8;
          
          // If just detected (wasn't detected before)
          if (isBeingDetected && !lastDetectedRef.current.has(sign.id)) {
            lastDetectedRef.current.add(sign.id);
            return { ...sign, detectedAt: now };
          }
          
          // Reset detection state when sweep passes
          if (angleDiff >= 20 && lastDetectedRef.current.has(sign.id)) {
            lastDetectedRef.current.delete(sign.id);
          }
          
          // Clear detection after 1 second
          if (sign.detectedAt && now - sign.detectedAt > 1000) {
            return { ...sign, detectedAt: null };
          }
          
          return sign;
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const getDollarPosition = (angle: number, distance: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    const x = 50 + Math.cos(rad) * (distance / 2.5);
    const y = 50 + Math.sin(rad) * (distance / 2.5);
    return { x: `${x}%`, y: `${y}%` };
  };

  const getOpacity = (sign: DollarSign) => {
    if (!sign.detectedAt) return 0;
    const elapsed = Date.now() - sign.detectedAt;
    if (elapsed < 200) return elapsed / 200; // Fade in
    if (elapsed < 800) return 1; // Stay visible
    if (elapsed < 1000) return 1 - (elapsed - 800) / 200; // Fade out
    return 0;
  };

  return (
    <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] aspect-square mx-auto">
      {/* Outer ambient glow */}
      <div className="absolute -inset-6 rounded-full bg-primary/3 blur-3xl" />
      
      {/* Main radar container */}
      <div 
        className="relative w-full h-full rounded-full overflow-hidden border border-primary/10"
        style={{ 
          background: '#0a0e12',
        }}
      >
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            backgroundPosition: 'center center'
          }}
        />

        {/* Concentric circles */}
        <div className="absolute inset-[15%] rounded-full border border-primary/8" />
        <div className="absolute inset-[30%] rounded-full border border-primary/10" />
        <div className="absolute inset-[45%] rounded-full border border-primary/8" />
        <div className="absolute inset-[60%] rounded-full border border-primary/6" />

        {/* Cross lines */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-y-px" />
        <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent -translate-x-px" />

        {/* Sweep beam (gradient trail behind the line) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `conic-gradient(from ${sweepAngle - 90}deg at 50% 50%, 
              transparent 0deg,
              transparent 325deg,
              rgba(0, 212, 255, 0.015) 340deg,
              rgba(0, 212, 255, 0.04) 350deg,
              rgba(0, 212, 255, 0.08) 357deg,
              rgba(0, 212, 255, 0.12) 359deg,
              transparent 360deg
            )`,
          }}
        />

        {/* Main sweep line */}
        <div
          className="absolute top-1/2 left-1/2 origin-left pointer-events-none"
          style={{
            width: '40%',
            height: '2px',
            transform: `rotate(${sweepAngle}deg) translateY(-50%)`,
            background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.7) 50%, transparent 100%)',
            boxShadow: '0 0 6px hsl(var(--primary) / 0.5), 0 0 12px hsl(var(--primary) / 0.25)',
          }}
        />

        {/* Dollar signs - invisible until detected */}
        {dollarSigns.map((sign) => {
          const pos = getDollarPosition(sign.angle, sign.distance);
          const opacity = getOpacity(sign);
          
          return (
            <div
              key={sign.id}
              className="absolute font-bold text-sm sm:text-base md:text-lg pointer-events-none select-none"
              style={{
                left: pos.x,
                top: pos.y,
                transform: 'translate(-50%, -50%)',
                color: 'hsl(var(--primary))',
                opacity: opacity,
                textShadow: opacity > 0 
                  ? '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5), 0 0 30px hsl(var(--primary) / 0.3)' 
                  : 'none',
                transition: 'opacity 0.15s ease-out',
              }}
            >
              $
            </div>
          );
        })}

        {/* Center pulsating point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-primary"
            style={{
              boxShadow: '0 0 8px hsl(var(--primary)), 0 0 16px hsl(var(--primary) / 0.4)',
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};
