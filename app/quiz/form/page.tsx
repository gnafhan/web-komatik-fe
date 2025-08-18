"use client";

import React, { useState } from "react"; 
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Values = { nama: string; nim: string; email: string };
type Touched = { nama: boolean; nim: boolean; email: boolean };

function validate(values: Values) {
  const errs: Partial<Values> = {};
  const namaOK = /^[A-Za-zÀ-ÖØ-öø-ÿ\s.'-]{3,}$/.test(values.nama.trim());
  const nimOK = /^[A-Za-z0-9!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]{8,15}$/.test(values.nim.trim());

  if (!values.nama.trim()) errs.nama = "Nama tidak boleh kosong.";
  else if (!namaOK) errs.nama = "Nama minimal 3 karakter, hanya huruf/spasi.";

  if (!values.nim.trim()) errs.nim = "NIM tidak boleh kosong.";
  else if (!/^.+$/.test(values.nim.trim())) errs.nim = "NIM hanya boleh berisi angka, huruf, atau simbol.";

  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
  
  if (!values.email.trim()) errs.email = "Email tidak boleh kosong.";
  else if (!emailOK) errs.email = "Format email tidak valid.";
  return errs;
}

const FormPage = () => {
  const router = useRouter();
  const [values, setValues] = useState<Values>({ nama: "", nim: "", email: "" });
  const [touched, setTouched] = useState<Touched>({ nama: false, nim: false, email: false });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;
  const firstName = values.nama.trim().split(' ')[0];
  
  const fullText = `Oke, ${firstName}! Aku mau tau kamu tipenya kayak gimana. Nanti dari jawabanmu, aku bisa tebak kamu cocok bergabung di divisi teknis mana di KOMATIK...`;

  const characters = Array.from(fullText);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-[url('/assets/quiz/background.webp')] bg-cover bg-center p-4">
      
      {!isFormSubmitted ? (
        <div className="w-full max-w-lg md:max-w-4xl p-8 md-p-12 space-y-8 rounded-[60px] border-[5px] border-white/50 bg-[linear-gradient(117deg,_rgba(255,255,255,0.40)_-1.37%,_rgba(79,77,77,0.06)_113.39%)] shadow-[0_36px_49px_-15px_#040A2D,0_1px_24px_-1px_rgba(0,0,0,0.10)] backdrop-blur-[25px] relative">
          <div className="absolute -top-14 -left-14 z-20">
            <motion.div animate={{ y: ["-10%", "10%", "-10%"] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}>
              <Image src="/assets/home/robot_tentangkami.png" alt="Brion Robot" width={128} height={128} />
            </motion.div>
          </div>
          <h1 className="text-center text-4xl md:text-5xl font-bold text-white tracking-widest">ISI DATA</h1>
          <form noValidate className="space-y-6" onSubmit={(e) => { e.preventDefault(); setTouched({ nama: true, nim: true, email: true }); if (isValid) { setIsFormSubmitted(true); }}}>
            <div>
              <label htmlFor="nama" className="block mb-2 text-sm font-medium text-white">Nama</label>
              <input type="text" id="nama" placeholder="Masukkan nama lengkap" value={values.nama} onChange={(e) => setValues((v) => ({ ...v, nama: e.target.value }))} onBlur={() => setTouched((t) => ({ ...t, nama: true }))} className={`w-full p-3 bg-white rounded-xl outline-none transition-shadow duration-300 ${touched.nama && errors.nama ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-blue-400"}`} />
              {touched.nama && errors.nama && <p className="mt-1 text-sm text-red-300">{errors.nama}</p>}
            </div>
            <div>
              <label htmlFor="nim" className="block mb-2 text-sm font-medium text-white">NIM</label>
              <input type="text" id="nim" placeholder="Masukkan NIM" value={values.nim} onChange={(e) => setValues((v) => ({ ...v, nim: e.target.value.slice(0, 15) }))} onBlur={() => setTouched((t) => ({ ...t, nim: true }))} className={`w-full p-3 bg-white rounded-xl outline-none transition-shadow duration-300 ${touched.nim && errors.nim ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-blue-400"}`} />
              {touched.nim && errors.nim && <p className="mt-1 text-sm text-red-300">{errors.nim}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
              <input type="email" id="email" placeholder="Masukkan email" value={values.email} onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))} onBlur={() => setTouched((t) => ({ ...t, email: true }))} className={`w-full p-3 bg-white rounded-xl outline-none transition-shadow duration-300 ${touched.email && errors.email ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-blue-400"}`} />
              {touched.email && errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
            </div>
            <div className="pt-4 flex justify-center">
              <button type="submit" className={`rounded-lg px-8 py-3 text-lg font-semibold text-white transition ${isValid ? "bg-red-600 hover:bg-red-700" : "bg-red-600/60 cursor-not-allowed"}`} aria-disabled={!isValid}>
                Mainkan Quiz &rarr;
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative isolate w-full max-w-5xl p-4 flex flex-col items-center">
            <div className="relative w-full max-w-2xl">
                <div className="absolute -top-18 -left-18 z-20">
                    <motion.div animate={{ y: ["-10%", "10%", "-10%"] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}>
                        <Image src="/assets/home/robot_tentangkami.png" alt="Brion Robot" width={128} height={128} />
                    </motion.div>
                </div>
                <div className="relative z-10 flex min-h-[200px] flex-col justify-center p-8 md:p-10" style={{ borderRadius: '24px', border: '5px solid rgba(255, 255, 255, 0.50)', background: 'linear-gradient(117deg, rgba(255, 255, 255, 0.40) -1.37%, rgba(79, 77, 77, 0.06) 113.39%)', backdropFilter: 'blur(10px)'}}>
                    <motion.p
                      className="text-white text-xl md:text-2xl font-medium leading-relaxed text-left"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      onAnimationComplete={() => console.log('Animation Complete')}
                    >
                      {characters.map((char, index) => (
                        <motion.span key={index} variants={childVariants}>
                          {char}
                        </motion.span>
                      ))}
                    </motion.p>
                </div>
            </div>
            <div className="mt-8">
                <button onClick={() => router.push('/quiz/question')} className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-red-700">
                    Mulai Kuis →
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default FormPage;
