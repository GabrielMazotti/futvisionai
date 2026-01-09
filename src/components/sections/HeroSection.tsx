import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/CTAButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />

      <div className="container max-w-5xl mx-auto text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-6 md:mb-8 bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm md:text-base font-semibold">
            <Zap className="w-4 h-4 mr-2 animate-glow-pulse" />
            ACCESO GRATUITO DISPONIBLE
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8"
        >
          ¡DEJA DE DAR PAPAYA A LAS CASAS!{" "}
          <span className="gradient-text">USA EL GPS DE FUTVISION</span>{" "}
          PARA DETECTAR ERRORES EN TIEMPO REAL.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Genera de <span className="text-primary font-semibold">$50.000 a $300.000 COP</span> diarios 
          siguiendo nuestro mapa del lucro. Recibe el acceso gratuito ahora mismo vía Telegram.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <CTAButton variant="primary">
            ACCEDER AL GPS EN TELEGRAM
          </CTAButton>
          <p className="text-muted-foreground text-sm md:text-base">
            Únete a más de <span className="text-primary font-medium">1.500 parceros</span> que ya están cobrando.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
