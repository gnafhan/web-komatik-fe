import { BlurHeader } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/features/TentangKami/components/HeroSection";

export default function TentangKamiPage() {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <BlurHeader />
      <HeroSection />
      <Footer />
    </div>
  );
} 