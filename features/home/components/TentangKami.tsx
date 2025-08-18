import { Button } from "@/components/ui/button";
import { UiImage } from "@/components/ui/image";
import * as motion from "motion/react-client"

export default function TentangKami() {
    return (
        <>
        <section className="relative w-full z-20 min-h-screen bg-gray-100 overflow-visible">
            {/* Background Elements */}
            {/* Subtle gradient from bottom-left */}
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 
            bg-gradient-to-tr from-red-100 to-transparent opacity-35 z-0"></div>

            {/* Background Pattern - Top Right */}
            <div className="absolute -top-12 right-0 w-68 h-68 opacity-80 z-0">
                <UiImage src="/assets/home/bg_side_tentang_kami_right.png" alt="Tentang Kami Section" fill className="object-contain object-right w-full h-full " />
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-2 py-8 flex flex-col items-center justify-center min-h-screen">
                {/* Title */}
                <motion.h2 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{
                    duration: 1.5,
                    delay:0.3  
                }}
                viewport={{once: true}}
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                    Tentang Kami
                </motion.h2>
                
                {/* Description */}
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <motion.p 
                    whileInView={{opacity: 1, translateY: 0}}
                    initial={{opacity: 0, translateY: 100}}
                    transition={{
                        duration: 1.2,
                        delay:0.5  
                    }}
                    viewport={{once: true}}
                    className="text-base md:text-lg text-gray-700 leading-relaxed">
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
                    </motion.p>
                </div>
                
                {/* Statistics */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-0 mb-6 w-full max-w-lg">
                    <motion.div 
                    initial={{opacity: 0, translateX: -100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.5, delay: 1.2}}
                    viewport={{once: true}}
                    className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-kmtk-secondary mb-0.5">
                            2015
                        </div>
                        <div className="text-gray-700 text-xs font-medium">
                            Berdiri Sejak
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{
                        duration: 1.5,
                        delay:1  
                    }}
                    viewport={{once: true}}
                    className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-kmtk-secondary mb-0.5">
                            2500+
                        </div>
                        <div className="text-gray-700 text-xs font-medium">
                            Total Member
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0, translateX: 100}}
                    whileInView={{opacity: 1, translateX: 0}}
                    transition={{duration: 1.5, delay: 1.2}}
                    viewport={{once: true}}
                    className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-kmtk-secondary mb-0.5">
                            8
                        </div>
                        <div className="text-gray-700 text-xs font-medium">
                            Divisi
                        </div>
                    </motion.div>
                </div>
                
                {/* Call to Action Button */}
                <div className="text-center">
                    <Button 
                        variant="secondary" 
                        className="px-4 cursor-pointer py-3 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        Selengkapnya
                    </Button>
                </div>
            </div>
            {/* Robot head graphic - Background */}
            <motion.div 
            initial={{opacity: 0, translateX: -100}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1, delay: 1.2}}
            viewport={{once: true}}
            className="  left-0 z-[100] w-32 h-32 sm:w-42 sm:h-42 -bottom-20  absolute">
                <UiImage src="/assets/home/robot_tentangkami4x.png" alt="Robot Tentang Kami" fill className="object-contain object-bottom-left w-full h-full z-100" />
            </motion.div>
        </section>

            
            

        </>
    );
}
