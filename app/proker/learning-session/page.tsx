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
      className="backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-[#E6EBFE]/[0.4] transition-all duration-300 flex items-center justify-center w-[300px] h-[100px]"
      style={{ backgroundColor: '#E6EBFE4D' }}
    >
      <div className="flex items-center gap-4">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="text-white font-semibold whitespace-nowrap">
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

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#081936] mb-6">
                Apa itu Learning Session?
              </h2>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white rounded-2xl">
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-bold text-[#D80000]">Learning Session</span> adalah salah satu program kerja utama KOMATIK yang berfokus pada pembinaan internal untuk menghadapi ajang nasional GEMASTIK. Kegiatan ini dirancang sebagai wadah belajar bersama seluruh anggota KOMATIK tanpa batasan divisi, dengan menghadirkan mentor-mentor berprestasi dan kompeten di bidangnya masing-masing. Learning Session bersifat wajib bagi semua anggota KOMATIK dan menjadi bagian penting dalam upaya peningkatan kapasitas, wawasan, dan keterampilan teknis.
              </p>
            </div>
          </div>
        </section>

        <section
          className="py-16 px-4"
          style={{
            background:
              "linear-gradient(0deg, #081936, #081936), linear-gradient(113.67deg, #0C2A5E -10.22%, #081936 62.39%, #030F22 107.98%)",
          }}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-white text-lg mb-8">
                Materi dalam Learning Session dibina langsung oleh divisi-divisi teknis KOMATIK, yaitu:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
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