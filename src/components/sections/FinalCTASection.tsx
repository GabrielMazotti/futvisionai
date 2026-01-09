import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Zap } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <Zap className="w-8 h-8 text-primary animate-glow-pulse" />
          </motion.div>

          {/* Headline */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            ¡EL PRÓXIMO{" "}
            <span className="gradient-text">RETO DE CAPITALIZACIÓN</span>{" "}
            COMIENZA PRONTO!
          </h2>

          {/* Urgency text */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Las ventanas de oportunidad son cortas y los cupos para el canal gratuito son limitados. 
            No te quedes por fuera del próximo movimiento de la IA.
          </p>

          {/* Scarcity indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-8 text-primary"
          >
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Cupos limitados disponibles</span>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <CTAButton variant="primary">
              ¡QUIERO ENTRAR AL GRUPO GRATIS!
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
