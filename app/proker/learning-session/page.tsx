import { ProkerHero } from "@/components/ui/ProkerHero";
import Image from "next/image";

export default function LearningSessionPage() {
  const divisions = [
    { name: "UX GAMA", logo: "/assets/divisi/ux-gama.png" },
    { name: "SRD", logo: "/assets/divisi/srd.png" },
    { name: "ASGama", logo: "/assets/divisi/as-gama.png" },
    { name: "IoT GAMA", logo: "/assets/divisi/iot-gama.png" },
    { name: "GAM-LAB", logo: "/assets/divisi/gam-lab.png" },
    { name: "Competitive Programming", logo: "/assets/divisi/cp.png" },
    { name: "DMAI", logo: "/assets/divisi/dmai.png" },
    { name: "Animasi", logo: "/assets/divisi/animasi.png" },
  ];

  const DivisionCard = ({ name, logo }: { name: string; logo: string }) => (
    <div
      className="backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-6 border border-white/20 hover:bg-[#E6EBFE]/[0.4] transition-all duration-300 flex items-center justify-center w-full md:w-[300px] h-[80px] md:h-[100px]"
      style={{ backgroundColor: '#E6EBFE4D' }}
    >
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={32}
          height={32}
          className="object-contain md:w-[50px] md:h-[50px] flex-shrink-0"
        />
        <p className="text-white font-semibold text-xs md:text-base leading-tight text-center">
          {name}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <ProkerHero
          title="Program Kerja"
          description="Program kerja KOMATIK bertujuan untuk membina anggota dan menyiapkan kontingen UGM menuju GEMASTIK"
          backgroundImage="/assets/proker/background.svg"
        />

        <section className="py-8 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#081936] mb-4 md:mb-6">
                Apa itu Learning Session?
              </h2>
              <div className="w-12 md:w-16 h-0.5 bg-red-600 mx-auto mb-6 md:mb-8"></div>
            </div>
            
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-0">
              <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base">
                <span className="font-bold text-[#D80000]">Learning Session</span> adalah salah satu program kerja utama KOMATIK yang berfokus pada pembinaan internal untuk menghadapi ajang nasional GEMASTIK. Kegiatan ini dirancang sebagai wadah belajar bersama seluruh anggota KOMATIK tanpa batasan divisi, dengan menghadirkan mentor-mentor berprestasi dan kompeten di bidangnya masing-masing. Learning Session bersifat wajib bagi semua anggota KOMATIK dan menjadi bagian penting dalam upaya peningkatan kapasitas, wawasan, dan keterampilan teknis.
              </p>
            </div>
          </div>
        </section>

        <section
          className="py-8 md:py-16 px-4"
          style={{
            background:
              "linear-gradient(0deg, #081936, #081936), linear-gradient(113.67deg, #0C2A5E -10.22%, #081936 62.39%, #030F22 107.98%)",
          }}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8 md:mb-12">
              <p className="text-white text-base md:text-lg mb-6 md:mb-8 text-left">
                Materi dalam Learning Session dibina langsung oleh divisi-divisi teknis KOMATIK, yaitu:
              </p>
            </div>
          </div>
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap justify-center md:gap-6">
              {divisions.map((division) => (
                <DivisionCard key={division.name} {...division} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}