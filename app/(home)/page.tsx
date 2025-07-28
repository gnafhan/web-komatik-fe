import { Button } from "@/components/ui/button";
import { UiImage } from "@/components/ui/image";
import HeroSection from "@/features/home/components/HeroSection";
import PrestasiKami from "@/features/home/components/PrestasiKami";
import TentangKami from "@/features/home/components/TentangKami";
import GalleryKegiatan from "@/features/home/components/GalleryKegiatan";

export default function Home() {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <HeroSection />
      <TentangKami />
      <PrestasiKami />
      <GalleryKegiatan />
    </div>
  );
}
