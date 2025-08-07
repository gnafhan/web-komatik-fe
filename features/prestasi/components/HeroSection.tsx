import { UiImage } from "@/components/ui/image";

export default function HeroSection(){
  return (
    <section className="flex items-center px-8 py-16 max-sm:py-8 relative">
      <div className="absolute inset-0 w-full h-full -z-50">
        <UiImage
          src="/assets/program-kerja/program-kerja-bg.png"
          alt="Prestasi Hero Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="text-white flex flex-col gap-2.5">
        <h4 className=" font-bold text-2xl">Prestasi Kami</h4>
        <p className="w-full md:w-lg font-medium text-base max-sm:text-xs max-sm:font-normal">
          Kegiatan tahunan yang rutin diselenggarakan KOMATIK guna memfasilitasi
          mahasiswa dalam mempersiapkan lomba
        </p>
      </div>
    </section>
  );
};