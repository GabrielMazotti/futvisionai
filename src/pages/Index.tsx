import { useEffect, useState } from "react";
import { CTAButton } from "@/components/CTAButton";

const CTA_DELAY_MS = 4 * 60 * 1000 + 43 * 1000; // 4:43

const Index = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    s.async = true;
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowCTA(true), CTA_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-[100dvh] flex flex-col bg-background ${!showCTA ? "h-[100dvh] overflow-hidden" : ""}`}>
      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center px-4 py-10 sm:py-14 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-center flex flex-col items-center gap-4">
          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-white px-2">
            11 567 pessoas já ganham entre{" "}
            <span className="gradient-text">100 € e 300 €</span> por dia com o FutVision.
          </h1>

          <p className="text-sm sm:text-base text-white/80 px-2">
            Veja o vídeo e saiba como.
          </p>

          {/* VSL */}
          <div className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-black/60">
            <div style={{ position: "relative", paddingTop: "177.78%" }}>
              <iframe
                frameBorder="0"
                allowFullScreen
                src={`https://scripts.converteai.net/5e853756-3835-489a-b398-e289a9f79c12/players/69a4959210258bc4a102862e/v4/embed.html?vl=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                referrerPolicy="origin"
              />
            </div>
          </div>

          {/* CTA after 4:43 */}
          <div
            className={`w-full transition-all duration-700 ${showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
          >
            <CTAButton>QUERO O MEU ACESSO 📲</CTAButton>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className={`px-4 py-12 sm:py-16 transition-all duration-700 ${showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
          <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-center mb-8 gradient-text">
            COMO FUNCIONA?
          </h2>

          <div className="flex flex-col gap-6">
            {[
              {
                num: "1",
                title: "O Robô Deteta",
                desc: "Varre 40 ligas e encontra falhas matemáticas.",
              },
              {
                num: "2",
                title: "Tu Recebes",
                desc: "Alerta direto no telemóvel com o sinal pronto.",
              },
              {
                num: "3",
                title: "Tu Ganhas",
                desc: "Copia, cola e levanta o lucro. Sem análises.",
              },
            ].map((step) => (
              <div key={step.num} className="glass-card p-5 flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-heading font-bold text-primary text-base">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O QUE RECEBES ── */}
      <section className={`px-4 py-12 sm:py-16 transition-all duration-700 ${showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
          <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-center mb-8 gradient-text">
            O QUE RECEBES HOJE:
          </h2>

          <div className="glass-card p-6 sm:p-8 space-y-5">
            {[
              { icon: "✅", text: "App FUTVISIÓN: Robô de falhas", tag: "GRÁTIS" },
              { icon: "✅", text: "Guia de Alavancagem: Banca a subir rápido", tag: "GRÁTIS" },
              { icon: "✅", text: "Comunidade VIP no Whatsapp: Lucra com os melhores", tag: "GRÁTIS" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <p className="text-foreground text-sm sm:text-base leading-relaxed">
                  {item.text} →{" "}
                  <span className="font-bold text-primary">{item.tag}</span>
                </p>
              </div>
            ))}

            <div className="pt-4 border-t border-border/40">
              <p className="text-center text-sm sm:text-base font-semibold" style={{ color: "hsl(45, 100%, 55%)" }}>
                ⚠️ ACESSO TOTAL GRÁTIS POR 30 DIAS.
              </p>
              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-1">
                Sem cartões. Sem letras pequenas.
              </p>
            </div>
          </div>

          <div
            className={`mt-8 transition-all duration-700 ${showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
          >
            <CTAButton>ENTRAR AGORA 📲</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
