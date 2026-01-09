import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, ChevronLeft, ChevronRight } from "lucide-react";
import { PROOF_IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROOF_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROOF_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PROOF_IMAGES.length) % PROOF_IMAGES.length);
  };

  return (
    <section ref={ref} className="section-spacing px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
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

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card p-2 rounded-2xl overflow-hidden"
          >
            <img
              src={PROOF_IMAGES[currentIndex]}
              alt={`Testimonio ${currentIndex + 1}`}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </motion.div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-primary/30 hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {PROOF_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-primary w-6" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-primary/30 hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-2 rounded-2xl image-hover cursor-pointer"
            >
              <img
                src={image}
                alt={`Testimonio ${index + 1}`}
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
