import { Button } from "@/components/ui/button";
import { UiImage } from "@/components/ui/image"

export default function TentangKami() {
    return (
        <div>
        <section className="relative w-full min-h-screen bg-gray-100 overflow-hidden">
            {/* Background Elements */}
            {/* Subtle gradient from bottom-left */}
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 
            bg-gradient-to-tr from-red-100 to-transparent opacity-35 z-0"></div>

<div className="absolute -bottom-20 -left-20 w-64 h-64 z-0 opacity-80">
                <UiImage
                    src="/assets/home/bg_side_tentangkami_left.png"
                    alt="Background Left"
                    fill
                    className="object-contain
                    w-full h-full"
                />
            </div>
            

            {/* Background Pattern - Top Right */}
            <div className="absolute -top-12 right-0 w-68 h-68 opacity-80 z-0">
                <UiImage src="/assets/home/bg_side_tentangkami_right.png" alt="Tentang Kami Section" fill className="object-contain object-right w-full h-full " />
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-2 py-8 flex flex-col items-center justify-center min-h-screen">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                    Tentang Kami
                </h2>
                
                {/* Description */}
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        <span className="text-gray-800">
                            Komunitas Mahasiswa Teknologi Informasi dan Komunikasi UGM (
                        </span>
                        <span className="text-kmtk-secondary font-semibold">
                            KOMATIK UGM
                        </span>
                        <span className="text-gray-800">
                            ) adalah komunitas mahasiswa yang bergerak di bidang teknologi informasi dan komunikasi. 
                            Berdiri sejak tahun 
                        </span>
                        <span className="font-bold text-gray-800">
                        &nbsp;2015
                        </span>
                        <span className="text-gray-800">
                            , komunitas ini telah berkembang menjadi salah satu komunitas teknologi terbesar di UGM. 
                            Pada tanggal  
                        </span>
                        <span className="font-bold text-gray-800">
                        &nbsp;8 Maret 2018
                        </span>
                        <span className="text-gray-800">
                            , KOMATIK UGM secara resmi menjadi Unit Kegiatan Mahasiswa (UKM) di bawah naungan 
                            Direktorat Kemahasiswaan UGM.
                        </span>
                    </p>
                </div>
                
                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-6 w-full max-w-lg">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-kmtk-secondary mb-0.5">
                            2015
                        </div>
                        <div className="text-gray-700 text-xs font-medium">
                            Berdiri Sejak
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-kmtk-secondary mb-0.5">
                            2500+
                        </div>
                        <div className="text-gray-700 text-xs font-medium">
                            Total Member
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-kmtk-secondary mb-0.5">
                            8
                        </div>
                        <div className="text-gray-700 text-xs font-medium">
                            Divisi
                        </div>
                    </div>
                </div>
                
                {/* Call to Action Button */}
                <div className="text-center">
                    <Button 
                        variant="secondary" 
                        size="sm"
                        className="px-4 py-2 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        Selengkapnya
                    </Button>
                </div>
            </div>
        </section>

            {/* Robot head graphic - Background */}
            <div className="absolute bottom-20 -left-8 w-42 h-42  z-0  relative">
                <UiImage src="/assets/home/robot_tentangkami.png" alt="Robot Tentang Kami" fill className="object-contain object-bottom w-full h-full " />
            </div>
            

        </div>
    );
}
