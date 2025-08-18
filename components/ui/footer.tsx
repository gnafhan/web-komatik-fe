"use client";

import { Instagram, PhoneCall, PhoneCallIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KOMATIK UGM - Komunitas Mahasiswa TIK UGM",
  description: "KOMATIK UGM adalah komunitas mahasiswa TIK UGM yang bertujuan untuk membantu mahasiswa TIK UGM dalam mengembangkan diri dan membantu mahasiswa TIK UGM dalam mengembangkan diri",
};

export function Footer() {
  return (
    <footer className="w-full mt-16 font-sans ">
      {/* Top Section */}
      <div className="bg-white px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-7xl mx-auto">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#D60000] mb-4 font-sans">Kontak Kami</h2>
          <p className="text-base md:text-lg text-black font-sans sm: max-w-sm">
            Untuk informasi lebih lanjut mengenai <span className="font-bold">KOMATIK UGM</span>, jangan ragu untuk menghubungi kami!
          </p>
        </div>
        {/* Right: Contact Icons */}
        <div className="flex flex-row gap-8 items-center justify-center sm:justify-end">
          {/* Email */}
          <a
            href="mailto:komatik@ugm.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Kirim email ke KOMATIK UGM"
            title="Kirim email ke KOMATIK UGM"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D60000] group-hover:bg-[#D60000]/10 transition-colors">
              <svg width="32" height="32" fill="none" stroke="#D60000" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            </span>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Hubungi KOMATIK UGM via WhatsApp"
            title="Hubungi KOMATIK UGM via WhatsApp"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D60000] group-hover:bg-[#D60000]/10 transition-colors">
              <PhoneCall className="w-6 h-6 text-[#D60000]" aria-hidden="true" />
            </span>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/komatikugm"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Kunjungi Instagram KOMATIK UGM"
            title="Kunjungi Instagram KOMATIK UGM"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D60000] group-hover:bg-[#D60000]/10 transition-colors">
                <Instagram className="w-6 h-6 text-[#D60000]" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-[#071633] py-8 px-6 flex flex-col md:flex-row items-center md:justify-between gap-6">
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-3">
          <img src="/logo/logo_and_text_white.webp" alt="Komunitas Mahasiswa TIK UGM" className="h-10 w-auto" />
        </div>
        {/* Right: Credit */}
        <div className="text-white text-base font-sans text-center md:text-right">
          Designed and Developed by <span className=" font-bold">KOMATIK UGM</span>
        </div>
      </div>
    </footer>
  );
}
