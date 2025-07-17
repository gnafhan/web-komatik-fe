import { Button } from "@/components/ui/button";
import { UiImage } from "@/components/ui/image";
import HeroSection from "@/features/home/components/HeroSection";
import TentangKami from "@/features/home/components/TentangKami";

export default function Home() {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <HeroSection />
      <TentangKami />
    </div>
  );
}
