import { Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/CTAButton";
import { lazy, Suspense } from "react";

const RadarAnimation = lazy(() =>
  import("@/components/RadarAnimation").then((m) => ({ default: m.RadarAnimation }))
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />

      <div className="container max-w-5xl mx-auto text-center z-10">
        {/* Badge */}
        <div className="animate-fade-up">
          <Badge className="mb-6 md:mb-8 bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm md:text-base font-semibold">
            <Zap className="w-4 h-4 mr-2 animate-glow-pulse" />
            ACCESO GRATUITO DISPONIBLE
          </Badge>
        </div>

        {/* Headline */}
        <h1
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          ¡DEJA DE RECOGER MIGAJAS!{" "}
          <span className="gradient-text">MULTIPLICA TU CAPITAL</span>{" "}
          HASTA ODD 69.
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Nuestra IA detecta errores matemáticos con cuotas de <span className="text-primary font-semibold">5.0, 8.0 y hasta 69.0</span> en tiempo real.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <CTAButton variant="primary">
            QUIERO ALERTAS DE ODD69 📲
          </CTAButton>
          <p className="text-muted-foreground text-sm md:text-base">
            Únete a más de <span className="text-primary font-medium">1.500 parceros</span> que ya están cobrando.
          </p>
        </div>

        {/* Radar Animation - lazy loaded */}
        <div className="mt-12 md:mt-16">
          <Suspense fallback={<div className="w-full max-w-[340px] aspect-square mx-auto" />}>
            <RadarAnimation />
          </Suspense>
        </div>
      </div>
    </section>
  );
};
