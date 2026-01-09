import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Radar, Shield, Zap } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { RadarAnimation } from "@/components/RadarAnimation";

export const LeadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Radar Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12"
        >
          <RadarAnimation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 lg:p-16"
        >
          {/* Icon header */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30"
              >
                <Radar className="w-7 h-7 text-primary" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30"
              >
                <Shield className="w-7 h-7 text-primary" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30"
              >
                <Zap className="w-7 h-7 text-primary" />
              </motion.div>
            </div>
          </div>

          {/* Lead text */}
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed">
              Las casas de apuestas ganan dinero porque tú usas la emoción y ellas usan{" "}
              <span className="gradient-text font-semibold">algoritmos fríos</span>. 
              FutVision equilibra el juego.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Nuestro <span className="text-primary font-medium">Escáner de Brechas</span> funciona como un GPS: 
              detecta el momento exacto en que la casa se equivoca en el precio y te envía la alerta. 
              No necesitas saber de fútbol, solo necesitas seguir el mapa y copiar las probabilidades matemáticas.
            </p>
          </div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-10"
          >
            <CTAButton variant="secondary">
              RECIBIR ALERTAS EN MI CELULAR
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
