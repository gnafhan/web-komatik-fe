import HeroSection from "@/features/home/components/HeroSection";
import PrestasiKami from "@/features/home/components/PrestasiKami";
import TentangKami from "@/features/home/components/TentangKami";
import ProgramKerja from "@/features/home/components/ProgramKerja";
import DivisiKami from "@/features/home/components/DivisiKami";
import GalleryKegiatan from "@/features/home/components/GalleryKegiatan";
import { getTentangKamiData } from "@/services/tentang-kami.service";
import { getDivisionsData } from "@/services/divisions.service";
import { getProgramKerjaData } from "@/services/program-kerja.service";
import { getPrestasiData } from "@/services/prestasi.service";
import { getGalleryData } from "@/services/gallery.service";
import getHeroImageData from "@/services/hero-image.service";

export default async function Home() {
  const [heroImageData, tentangKamiData, divisionsData, programKerjaData, prestasiData, galleryData] = await Promise.all([
    getHeroImageData(),
    getTentangKamiData(),
    getDivisionsData(),
    getProgramKerjaData(),
    getPrestasiData(),
    getGalleryData()
  ]);

  return (
    <div className="w-full font-sans overflow-x-hidden">
      <HeroSection data={heroImageData} />
      <TentangKami data={tentangKamiData} />
      <DivisiKami data={divisionsData} />
      <ProgramKerja data={programKerjaData} />
      <PrestasiKami data={prestasiData} />
      <GalleryKegiatan data={galleryData} />
    </div>
  );
}
