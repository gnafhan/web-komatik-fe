import HeroSection from "@/features/home/components/HeroSection";
import PrestasiKami from "@/features/home/components/PrestasiKami";
import TentangKami from "@/features/home/components/TentangKami";
import ProgramKerja from "@/features/home/components/ProgramKerja";
import DivisiKami from "@/features/home/components/DivisiKami";
import GalleryKegiatan from "@/features/home/components/GalleryKegiatan";
import { getTentangKamiData } from "@/services/tentang-kami.service";

export default async function Home() {
  const tentangKamiData = await getTentangKamiData();

  return (
    <div className="w-full font-sans overflow-x-hidden">
      <HeroSection />
      <TentangKami data={tentangKamiData} />
      <DivisiKami />
      <ProgramKerja />
      <PrestasiKami />
      <GalleryKegiatan />
    </div>
  );
}
