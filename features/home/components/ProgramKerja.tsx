"use client";
import { UiImage } from "@/components/ui/image";
import ProgramKerjaCard from "@/components/ui/ProgramKerjaCard";
import { programKerjaData } from "@/data/program-kerja-data";

export default function ProgramKerja() {
  return (
    <div className="w-full py-16 px-4 bg-[#D60000] relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <UiImage
          src="/assets/program-kerja/program-kerja-bg.png"
          alt="Program Kerja Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Program Kerja
          </h2>
          <p className="text-white/90 text-base lg:text-lg max-w-2xl">
            Kegiatan tahunan yang rutin diselenggarakan KOMATIK guna memfasilitasi mahasiswa dalam mempersiapkan lomba
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programKerjaData.map((program) => (
            <div key={program.id} className="w-full">
              <ProgramKerjaCard
                title={program.title}
                description={program.description}
                image={program.image}
                category={program.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
