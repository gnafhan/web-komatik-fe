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
      className="flex min-h-screen flex-col items-center justify-center bg-[#0F1B3A] text-white p-8"
      style={{
        backgroundImage: "url('/assets/quiz/background.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">MINI QUIZ</h1>
        <h2 className="text-5xl md:text-6xl font-bold text-red-600">KOMATIK</h2>
        <p className="mt-4 text-lg md:text-xl max-w-md mx-auto">
          Cari tahu divisi yang cocok untukmu dan uji pengetahuanmu seputar IT!
        </p>
      </div>

      <div className="my-8 grid grid-cols-4 sm:grid-cols-8 gap-3 p-4">
        {divisions.map((division, index) => (
          <div
            key={index}
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-[rgba(230,235,254,0.30)] flex items-center justify-center"
          >
            <Image
              src={division.src}
              alt={division.alt}
              width={40}
              height={40}
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowIntro(true)}
        className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-red-700"
      >
        Mainkan Quiz →
      </button>
    </main>
  );
}