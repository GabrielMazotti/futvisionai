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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
        {/* Headline */}
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Mais de 20.000 pessoas já ganharam entre{" "}
          <span className="gradient-text">100 $ e 300 $</span> por dia nos
          últimos 5 meses.
        </h1>

        {/* Sub-copy */}
        <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
          Utilizando apenas o <span className="text-primary font-semibold">FutVision</span> para
          detetar falhas em sites de apostas e entrar antes de todos os outros.
        </p>

        <p className="text-sm md:text-base text-white/70">
          Assista ao vídeo a seguir e descubra como pode ser o próximo.
        </p>

        {/* VSL Video Embed */}
        <div className="w-full max-w-[400px] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-black/60">
          <div style={{ position: "relative", paddingTop: "177.77777777777777%" }}>
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
