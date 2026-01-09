import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DollarSign {
  id: number;
  angle: number;
  distance: number;
  visible: boolean;
}

export const RadarAnimation = () => {
  const [dollarSigns, setDollarSigns] = useState<DollarSign[]>([
    { id: 1, angle: 45, distance: 35, visible: false },
    { id: 2, angle: 120, distance: 55, visible: false },
    { id: 3, angle: 200, distance: 40, visible: false },
    { id: 4, angle: 280, distance: 60, visible: false },
    { id: 5, angle: 330, distance: 45, visible: false },
    { id: 6, angle: 75, distance: 70, visible: false },
    { id: 7, angle: 160, distance: 30, visible: false },
    { id: 8, angle: 240, distance: 50, visible: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const sweepAngle = ((currentTime % 2000) / 2000) * 360;

      setDollarSigns((prev) =>
        prev.map((sign) => {
          const angleDiff = Math.abs(sweepAngle - sign.angle);
          const normalizedDiff = Math.min(angleDiff, 360 - angleDiff);
          const isInSweep = normalizedDiff < 30;
          return { ...sign, visible: isInSweep };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getDollarPosition = (angle: number, distance: number) => {
    const rad = (angle * Math.PI) / 180;
    const x = 50 + Math.cos(rad) * (distance / 2);
    const y = 50 + Math.sin(rad) * (distance / 2);
    return { x: `${x}%`, y: `${y}%` };
  };

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] aspect-square mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />

      {/* Radar container */}
      <div className="relative w-full h-full rounded-full border border-primary/20 overflow-hidden bg-background/50">
        {/* Concentric circles */}
        <div className="absolute inset-[15%] rounded-full border border-primary/15" />
        <div className="absolute inset-[30%] rounded-full border border-primary/15" />
        <div className="absolute inset-[45%] rounded-full border border-primary/15" />

        {/* Cross lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10" />

        {/* Rotating sweep line with gradient */}
        <motion.div
          className="absolute top-1/2 left-1/2 origin-left"
          style={{
            width: "50%",
            height: "2px",
            marginTop: "-1px",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Sweep gradient trail */}
          <div
            className="absolute inset-0 origin-left"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary)) 0%, transparent 100%)",
              boxShadow: "0 0 15px hsl(var(--primary) / 0.5)",
            }}
          />
          {/* Sweep cone effect */}
          <motion.div
            className="absolute -top-[100px] left-0 w-full h-[200px] origin-left"
            style={{
              background: "conic-gradient(from -10deg, transparent 0deg, hsl(var(--primary) / 0.15) 15deg, transparent 30deg)",
            }}
          />
        </motion.div>

        {/* Dollar signs */}
        {dollarSigns.map((sign) => {
          const pos = getDollarPosition(sign.angle, sign.distance);
          return (
            <motion.div
              key={sign.id}
              className="absolute text-primary font-bold text-lg sm:text-xl md:text-2xl pointer-events-none select-none"
              style={{
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                opacity: sign.visible ? 1 : 0,
                scale: sign.visible ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            >
              <span
                style={{
                  textShadow: sign.visible
                    ? "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)"
                    : "none",
                }}
              >
                $
              </span>
            </motion.div>
          );
        })}

        {/* Center point */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]" />
      </div>
    </div>
  );
};
