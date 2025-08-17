import Link from 'next/link';
import React from "react";

const divisions = [
  { nama: "UX GAMA" },
  { nama: "SRD" },
  { nama: "AS GAMA" },
  { nama: "IOT GAMA" },
  { nama: "GAM LAB" },
  { nama: "CP" },
  { nama: "DMAI" },
  { nama: "Animasi" },
];

const FormPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-[linear-gradient(117deg,_#0C2A5E_-13.2%,_#081936_45.72%,_#030F22_111.75%)] p-4">
      <div className="w-full max-w-lg md:max-w-4xl p-8 md:p-12 space-y-8 rounded-[60px] border-[5px] border-white/50 bg-[linear-gradient(117deg,_rgba(255,255,255,0.40)_-1.37%,_rgba(79,77,77,0.06)_113.39%)] shadow-[0_36px_49px_-15px_#040A2D,0_1px_24px_-1px_rgba(0,0,0,0.10)] backdrop-blur-[25px]">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-white tracking-widest">
          ISI DATA
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="nama"
              className="block mb-2 text-sm font-medium text-white"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              placeholder="Masukkan nama lengkap"
              className="w-full p-3 bg-white border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="nim"
              className="block mb-2 text-sm font-medium text-white"
            >
              NIM
            </label>
            <input
              type="text"
              id="nim"
              placeholder="Masukkan NIM"
              className="w-full p-3 bg-white border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="divisi"
              className="block mb-2 text-sm font-medium text-white"
            >
              Minat divisi
            </label>
            <select
              id="divisi"
              defaultValue=""
              className="w-full p-3 bg-white border-none rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-300"
            >
              <option value="" disabled>
                Pilih divisi...
              </option>
              {divisions.map((division, index) => (
                <option key={index} value={division.nama}>
                  {division.nama}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-7 flex items-center px-4 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="pt-4 flex justify-center">
              <Link href="/quiz/question">
                <button className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-red-700">
                  Mainkan Quiz &rarr;
                </button>
              </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
