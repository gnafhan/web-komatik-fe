"use client";
import React from 'react';
import { UiImage } from "@/components/ui/image";

export default function HeroSection() {
  return (
    <div className="w-full text-white py-12 md:py-20 relative">
      <div className="absolute inset-0 w-full h-full">
        <UiImage
          src="/assets/pengurus/bg-pengurus.webp"
          alt="Pengurus Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kepengurusan Kami</h1>
          <p className="text-lg md:text-xl opacity-80 max-w-3xl">
            Kegiatan tahunan yang rutin diselenggarakan KOMATIK 
            guna memfasilitasi mahasiswa dalam mempersiapkan lomba
          </p>
        </div>
      </div>
    </div>
  );
}
