'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, type Variants } from 'framer-motion';
import { ProkerHero } from '@/components/ui/ProkerHero';


const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Reveal({
  children,
  delay = 0,
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

export default function LearningSessionPage() {
  const divisions = [
    { name: 'UX GAMA', logo: '/assets/divisi/ux-gama.png' },
    { name: 'SRD', logo: '/assets/divisi/srd.png' },
    { name: 'ASGama', logo: '/assets/divisi/as-gama.png' },
    { name: 'IoT GAMA', logo: '/assets/divisi/iot-gama.png' },
    { name: 'GAM-LAB', logo: '/assets/divisi/gam-lab.png' },
    { name: 'Competitive Programming', logo: '/assets/divisi/cp.png' },
    { name: 'DMAI', logo: '/assets/divisi/dmai.png' },
    { name: 'Animasi', logo: '/assets/divisi/animasi.png' },
  ];

  const DivisionCard = ({ name, logo }: { name: string; logo: string }) => (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-6 border border-white/20 transition-all duration-300 flex items-center justify-center w-full md:w-[300px] h-[80px] md:h-[100px]"
      style={{ backgroundColor: '#E6EBFE4D' }}
    >
      <div className="flex items-center gap-2 md:gap-4">
        <motion.div
          initial={{ opacity: 0, rotate: -6 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
        >
          <Image
            src={logo}
            alt={`${name} logo`}
            width={50}
            height={50}
            className="object-contain w-[32px] h-[32px] md:w-[50px] md:h-[50px] flex-shrink-0"
          />
        </motion.div>
        <motion.p
          className="text-white font-semibold text-xs md:text-base leading-tight text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.05 }}
        >
          {name}
        </motion.p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <ProkerHero
            title="Program Kerja"
            description="Program kerja KOMATIK bertujuan untuk membina anggota dan menyiapkan kontingen UGM menuju GEMASTIK"
            backgroundImage="/assets/proker/background.svg"
          />
        </motion.div>

        <section className="py-8 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center mb-8 md:mb-12">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-[#081936] mb-2 md:mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                >
                  Apa itu Learning Session?
                </motion.h2>
                <motion.div
                  className="w-12 md:w-16 h-0.5 bg-red-600 mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
                  style={{ transformOrigin: 'left center' }}
                />
              </div>

              <motion.div
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
              >
                <motion.p
                  className="text-gray-700 leading-relaxed text-justify text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.05 }}
                >
                  <span className="font-bold text-[#D80000]">Learning Session</span> adalah salah satu program kerja utama KOMATIK yang berfokus pada pembinaan internal untuk menghadapi ajang nasional GEMASTIK. Kegiatan ini dirancang sebagai wadah belajar bersama seluruh anggota KOMATIK tanpa batasan divisi, dengan menghadirkan mentor-mentor berprestasi dan kompeten di bidangnya masing-masing. Learning Session bersifat wajib bagi semua anggota KOMATIK dan menjadi bagian penting dalam upaya peningkatan kapasitas, wawasan, dan keterampilan teknis.
                </motion.p>
              </motion.div>
            </Reveal>
          </div>
        </section>

        <section
          className="py-8 md:py-16 px-4"
          style={{
            background:
              'linear-gradient(0deg, #081936, #081936), linear-gradient(113.67deg, #0C2A5E -10.22%, #081936 62.39%, #030F22 107.98%)',
          }}
        >
          <div className="container mx-auto max-w-4xl">
            <Reveal>
              <div className="mb-8 md:mb-12">
                <motion.p
                  className="text-white text-base md:text-lg mb-6 md:mb-8 text-left"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                >
                  Materi dalam Learning Session dibina langsung oleh divisi-divisi teknis KOMATIK, yaitu:
                </motion.p>
              </div>
            </Reveal>
          </div>

          <div className="container mx-auto max-w-5xl">
            <Reveal>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 gap-3 md:flex md:flex-wrap justify-center md:gap-6"
              >
                {divisions.map((division) => (
                  <DivisionCard key={division.name} {...division} />
                ))}
              </motion.div>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
