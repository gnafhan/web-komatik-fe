"use client";
import { UiImage } from "@/components/ui/image";
import ProgramKerjaCard from "@/components/ui/ProgramKerjaCard";
import { programKerjaData } from "@/data/program-kerja-data";
import * as motion from "motion/react-client"

export default function ProgramKerja() {
  return (
    <div className="w-full py-16 px-4 bg-[#D60000] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ scale: [1, 1.01, 1], opacity: [1, 0.98, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        <UiImage
          src="/assets/program-kerja/program-kerja-bg.png"
          alt="Program Kerja Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>

      {/* Ambient orbs */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, 20, -10, 0], y: [0, 14, -8, 0], opacity: [0.2, 0.35, 0.28, 0.2] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/10 blur-3xl"
        animate={{ x: [0, -18, 10, 0], y: [0, -12, 20, 0], opacity: [0.2, 0.3, 0.26, 0.2] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 26, delay: 0.2 }} 
          viewport={{once: true}}
          className="text-3xl lg:text-4xl font-bold text-white mb-4"
          style={{ willChange: "transform, opacity" }}>
            Program Kerja
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 28, delay: 0.35 }}
          viewport={{once: true}} 
          className="text-white/90 text-base lg:text-lg max-w-2xl"
          style={{ willChange: "transform, opacity" }}>
            Kegiatan tahunan yang rutin diselenggarakan KOMATIK guna memfasilitasi mahasiswa dalam mempersiapkan lomba
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programKerjaData.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 75, damping: 24, delay: 0.1 + index * 0.08 }}
              viewport={{ once: true }}
              className="w-full"
              style={{ willChange: "transform, opacity" }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: (index % 5) * 0.2 }}
                whileHover={{ scale: 1.02 }}
                style={{ willChange: "transform" }}
              >
                <ProgramKerjaCard
                  title={program.title}
                  description={program.description}
                  image={program.image}
                  category={program.category}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
