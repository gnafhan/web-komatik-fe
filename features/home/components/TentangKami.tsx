import { Button } from "@/components/ui/button";
import { UiImage } from "@/components/ui/image";
import { NumberTicker } from "@/components/ui/number-ticker";
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
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 30, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -top-12 right-0 w-68 h-68 opacity-80 z-0"
                style={{ willChange: "transform, opacity" }}
            >
                <motion.div
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform" }}
                    className="w-full h-full"
                >
                    <UiImage src="/assets/home/bg_side_tentang_kami_right.png" alt="Tentang Kami Section" fill className="object-contain object-right w-full h-full " />
                </motion.div>
            </motion.div>
            
            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-2 py-8 flex flex-col items-center justify-center min-h-screen">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 26, delay: 0.25 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center"
                    style={{ willChange: "transform, opacity" }}
                >
                    Tentang Kami
                </motion.h2>
                
                {/* Description */}
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 70, damping: 28, delay: 0.45 }}
                        viewport={{ once: true }}
                        className="text-base md:text-lg text-gray-700 leading-relaxed"
                        style={{ willChange: "transform, opacity" }}
                    >
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
                            &nbsp;<NumberTicker value={2015} useGrouping={false} className="inherit" />
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
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 70, damping: 28, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                        style={{ willChange: "transform, opacity" }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-kmtk-secondary mb-0.5">
                            <NumberTicker value={2015} useGrouping={false} className="inherit" />
                        </div>
                        <div className="text-gray-700 text-xs font-medium">
                            Berdiri Sejak
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 70, damping: 28, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                        style={{ willChange: "opacity" }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-kmtk-secondary mb-0.5">
                            <NumberTicker value={2500} useGrouping={false} className="inherit" />+
                        </div>
                        <div className="text-gray-700 text-xs font-medium">
                            Total Member
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 70, damping: 28, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="text-center"
                        style={{ willChange: "transform, opacity" }}
                    >
                        <div className="text-3xl md:text-4xl font-bold text-kmtk-secondary mb-0.5">
                            <NumberTicker value={8} className="inherit" />
                        </div>
                        <div className="text-gray-700 text-xs font-medium">
                            Divisi
                        </div>
                    </motion.div>
                </div>
                
                {/* Call to Action Button */}
                <div className="text-center">
                    <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Button
                            variant="secondary"
                            className="px-4 cursor-pointer py-3 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Selengkapnya
                        </Button>
                    </motion.div>
                </div>
            </div>
            {/* Robot head graphic - Background */}
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 26, delay: 0.9 }}
                viewport={{ once: true }}
                className="  left-0 z-[100] w-32 h-32 sm:w-42 sm:h-42 -bottom-20  absolute"
                style={{ willChange: "transform, opacity" }}
            >
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform" }}
                    className="w-full h-full"
                >
                    <UiImage src="/assets/home/robot_tentangkami4x.png" alt="Robot Tentang Kami" fill className="object-contain object-bottom-left w-full h-full z-100" />
                </motion.div>
            </motion.div>
        </section>

            
            

        </>
    );
}
