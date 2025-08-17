import { BlurHeader } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/features/TentangKami/components/HeroSection";
import { ApaItuKomatik } from "@/features/TentangKami/components/ApaItuKomatik";
import { TujuanKomatik } from "@/features/TentangKami/components/TujuanKomatik";
import { VideoProfile } from "@/features/TentangKami/components/VideoProfile";

export default function TentangKamiPage() {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <BlurHeader />
      <HeroSection />
      <ApaItuKomatik />
      <TujuanKomatik />
      <VideoProfile />
      <Footer />
    </div>
  );
}