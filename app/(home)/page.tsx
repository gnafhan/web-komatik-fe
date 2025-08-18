import HeroSection from "@/features/home/components/HeroSection";
import PrestasiKami from "@/features/home/components/PrestasiKami";
import TentangKami from "@/features/home/components/TentangKami";
import ProgramKerja from "@/features/home/components/ProgramKerja";
import DivisiKami from "@/features/home/components/DivisiKami";
import GalleryKegiatan from "@/features/home/components/GalleryKegiatan";
import { getTentangKamiData } from "@/services/tentang-kami.service";
import { getDivisionsData } from "@/services/divisions.service";
import { getProgramKerjaData } from "@/services/program-kerja.service";

export default async function Home() {
  const [tentangKamiData, divisionsData, programKerjaData] = await Promise.all([
    getTentangKamiData(),
    getDivisionsData(),
    getProgramKerjaData()
  ]);

  return (
    <div className="w-full font-sans overflow-x-hidden">
      <HeroSection />
      <TentangKami data={tentangKamiData} />
      <DivisiKami data={divisionsData} />
      <ProgramKerja data={programKerjaData} />
      <PrestasiKami />
      <GalleryKegiatan />
    </div>
  );
}
