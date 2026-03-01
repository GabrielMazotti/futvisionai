import { CTAButton } from "@/components/CTAButton";

const Index = () => {
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
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-black/60">
          {/* Replace the src below with your actual VSL embed URL */}
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="FutVision VSL"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* CTA */}
        <CTAButton variant="primary">
          QUERO COMEÇAR AGORA 📲
        </CTAButton>
      </div>
    </div>
  );
};

export default Index;
