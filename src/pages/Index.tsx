import { BGPattern } from "@/components/ui/bg-pattern";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeadSection } from "@/components/sections/LeadSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background pattern */}
      <BGPattern 
        variant="grid" 
        mask="fade-edges" 
        size={40}
        fill="rgba(0, 212, 255, 0.03)"
      />

      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Main content */}
      <main>
        <HeroSection />
        <LeadSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
