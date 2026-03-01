import { useEffect } from "react";
import { CTAButton } from "@/components/CTAButton";

const Index = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    s.async = true;
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, []);

  return (
    <div
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 py-6 sm:py-8 overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-5 md:gap-8">
        {/* Headline */}
        <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-snug text-white px-2">
          Mais de 20.000 pessoas já ganharam entre{" "}
          <span className="gradient-text">100 $ e 300 $</span> por dia nos
          últimos 5 meses.
        </h1>

        {/* Sub-copy */}
        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-sm sm:max-w-md md:max-w-2xl leading-relaxed px-2">
          Utilizando apenas o <span className="text-primary font-semibold">FutVision</span> para
          detetar falhas em sites de apostas e entrar antes de todos os outros.
        </p>

        <p className="text-xs sm:text-sm md:text-base text-white/70">
          Assista ao vídeo a seguir e descubra como pode ser o próximo.
        </p>

        {/* VSL Video Embed - mobile-first sizing */}
        <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-black/60">
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

        {/* CTA */}
        <CTAButton variant="primary">
          Experimentar FutVision 📲
        </CTAButton>
      </div>
    </div>
  );
};

export default Index;
