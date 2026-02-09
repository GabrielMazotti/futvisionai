import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Users, ChevronLeft, ChevronRight } from "lucide-react";
import { PROOF_IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROOF_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROOF_IMAGES.length) % PROOF_IMAGES.length);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <section ref={ref} className="section-spacing px-4">
      <div className="container max-w-2xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">Testimonios</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Lo que dicen los{" "}
            <span className="gradient-text">parceros</span>{" "}
            que ya usan FutVision
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div
            className="glass-card p-2 sm:p-3 rounded-2xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-black/40">
              {PROOF_IMAGES.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Testimonio ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
                  style={{ opacity: idx === currentIndex ? 1 : 0 }}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 border-primary/30 hover:bg-primary/10 bg-background/80 backdrop-blur-sm z-10 h-9 w-9"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 border-primary/30 hover:bg-primary/10 bg-background/80 backdrop-blur-sm z-10 h-9 w-9"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {PROOF_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-primary w-6" : "bg-muted w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
