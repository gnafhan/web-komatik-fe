'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const divisions = [
  { src: '/assets/divisi/ux-gama.png', alt: 'UX GAMA' },
  { src: '/assets/divisi/srd.png', alt: 'SRD' },
  { src: '/assets/divisi/as-gama.png', alt: 'AS GAMA' },
  { src: '/assets/divisi/iot-gama.png', alt: 'IOT GAMA' },
  { src: '/assets/divisi/gam-lab.png', alt: 'GAM LAB' },
  { src: '/assets/divisi/cp.png', alt: 'CP' },
  { src: '/assets/divisi/dmai.png', alt: 'DMAI' },
  { src: '/assets/divisi/animasi.png', alt: 'Animasi' },
];

function RobotIntro() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const router = useRouter();
  const text = "Halo, kenalin aku Brion 👋 Aku yang akan memandu kamu memainkan game ini...";
  const characters = Array.from(text);

  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        router.push('/quiz/form');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationComplete, router]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-[#0F1B3A] text-white p-8"
      style={{
        backgroundImage: "url('/assets/quiz/background.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative isolate w-full max-w-5xl p-4 overflow-visible">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 z-20">
              <motion.div
                animate={{ y: ["-10%", "10%", "-10%"] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Image
                  src="/assets/home/robot_tentangkami.png"
                  alt="Brion Robot"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </motion.div>
            </div>
            
            <div
              className="relative z-10 flex min-h-[200px] flex-col items-center justify-center p-6 md:p-8"
              style={{
                borderRadius: '24px',
                border: '5px solid rgba(255, 255, 255, 0.50)',
                background: 'linear-gradient(117deg, rgba(255, 255, 255, 0.40) -1.37%, rgba(79, 77, 77, 0.06) 113.39%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <motion.p
                className="text-white text-2xl md:text-3xl font-medium leading-relaxed text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                onAnimationComplete={() => setAnimationComplete(true)}
              >
                {characters.map((char, index) => (
                  <motion.span key={index} variants={childVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


export default function QuizPage() {
  const [showIntro, setShowIntro] = useState(false);

  if (showIntro) {
    return <RobotIntro />;
  }

  return (
    <main
      className="relative overflow-hidden flex min-h-screen flex-col items-center justify-center bg-[#0F1B3A] text-white p-8"
      style={{
        backgroundImage: "url('/assets/quiz/background.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Ambient animated orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-500/30 blur-3xl"
          animate={{ x: [0, 40, -20, 0], y: [0, 20, -10, 0], opacity: [0.4, 0.6, 0.5, 0.4] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"
          animate={{ x: [0, -30, 10, 0], y: [0, -15, 25, 0], opacity: [0.35, 0.55, 0.45, 0.35] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          MINI QUIZ
        </motion.h1>
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-red-600"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          KOMATIK
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cari tahu divisi yang cocok untukmu dan uji pengetahuanmu seputar IT!
        </motion.p>
      </div>

      <div className="relative z-10 my-8 grid grid-cols-4 sm:grid-cols-8 gap-3 p-4">
        {divisions.map((division, index) => (
          <motion.div
            key={index}
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-[rgba(230,235,254,0.30)] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              duration: 0.6,
              delay: 0.1 + index * 0.05,
              y: { duration: 2 + (index % 4) * 0.2, repeat: Infinity, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={division.src}
              alt={division.alt}
              width={40}
              height={40}
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
            />
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={() => setShowIntro(true)}
        className="relative z-10 rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-red-600/20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, boxShadow: ['0 0 0 0 rgba(220,38,38,0.35)', '0 0 0 16px rgba(220,38,38,0)'] }}
        transition={{ duration: 0.6, delay: 0.3, boxShadow: { duration: 1.8, repeat: Infinity, ease: 'easeOut' } }}
        whileHover={{ scale: 1.04, backgroundColor: '#b91c1c' }}
        whileTap={{ scale: 0.98 }}
      >
        Mainkan Quiz →
      </motion.button>
    </main>
  );
}