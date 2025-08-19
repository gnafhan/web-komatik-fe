"use client";

import React, { useState } from "react"; 
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Values = { nama: string };
type Touched = { nama: boolean };

function validate(values: Values) {
  const errs: Partial<Values> = {};
  const namaOK = /^[A-Za-zÀ-ÖØ-öø-ÿ\s.'-]{3,}$/.test(values.nama.trim());

  if (!values.nama.trim()) errs.nama = "Nama tidak boleh kosong.";
  else if (!namaOK) errs.nama = "Nama minimal 3 karakter, hanya huruf/spasi.";

  return errs;
}

const FormPage = () => {
  const router = useRouter();
  const [values, setValues] = useState<Values>({ nama: "" });
  const [touched, setTouched] = useState<Touched>({ nama: false });

  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;
  
  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-[url('/assets/quiz/background.webp')] bg-cover bg-center p-4">
      
      <div className="w-full max-w-lg md:max-w-4xl p-8 md-p-12 space-y-8 rounded-[60px] border-[5px] border-white/50 bg-[linear-gradient(117deg,_rgba(255,255,255,0.40)_-1.37%,_rgba(79,77,77,0.06)_113.39%)] shadow-[0_36px_49px_-15px_#040A2D,0_1px_24px_-1px_rgba(0,0,0,0.10)] backdrop-blur-[25px] relative">
        <div className="absolute -top-14 -left-14 z-20">
          <motion.div animate={{ y: ["-10%", "10%", "-10%"] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}>
            <Image src="/assets/home/robot_tentangkami.png" alt="Brion Robot" width={128} height={128} />
          </motion.div>
        </div>
        <h1 className="text-center text-4xl md:text-5xl font-bold text-white tracking-widest">ISI DATA</h1>
        <form noValidate className="space-y-6" onSubmit={(e) => { e.preventDefault(); setTouched({ nama: true }); if (isValid) { router.push('/quiz/question'); }}}>
          <div>
            <label htmlFor="nama" className="block mb-2 text-sm font-medium text-white">Nama</label>
            <input type="text" id="nama" placeholder="Masukkan nama lengkap" value={values.nama} onChange={(e) => setValues((v) => ({ ...v, nama: e.target.value }))} onBlur={() => setTouched((t) => ({ ...t, nama: true }))} className={`w-full p-3 bg-white rounded-xl outline-none transition-shadow duration-300 ${touched.nama && errors.nama ? "ring-2 ring-red-500" : "focus:ring-2 focus:ring-blue-400"}`} />
            {touched.nama && errors.nama && <p className="mt-1 text-sm text-red-300">{errors.nama}</p>}
          </div>
          <div className="pt-4 flex justify-center">
            <button type="submit" className={`rounded-lg px-8 py-3 text-lg font-semibold text-white transition ${isValid ? "bg-red-600 hover:bg-red-700" : "bg-red-600/60 cursor-not-allowed"}`} aria-disabled={!isValid}>
              Mainkan Quiz &rarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
