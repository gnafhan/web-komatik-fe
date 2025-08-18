import { Button } from "@/components/ui/button";
import { UiImage } from "@/components/ui/image";
import HeroSection from "@/features/home/components/HeroSection";
import PrestasiKami from "@/features/home/components/PrestasiKami";
import TentangKami from "@/features/home/components/TentangKami";
import ProgramKerja from "@/features/home/components/ProgramKerja";
import DivisiKami from "@/features/home/components/DivisiKami";
import GalleryKegiatan from "@/features/home/components/GalleryKegiatan";
import { HomeMetadata } from "@/metadata/HomeMetadata";

export const metadata = HomeMetadata;

export default function Home() {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <HeroSection />
      <div className="relative">
      <TentangKami />
      <DivisiKami />

      </div>
      <ProgramKerja />
      <PrestasiKami />
      <GalleryKegiatan />
    </div>
  );
}
