"use client";

import React from 'react';

export const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[120px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/assets/TentangKami/bg-TentangKami.png" 
          alt="Tentang Kami Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16"> 
        <div className="max-w-4xl ml-[8%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"> 
            Tentang Kami
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed"> 
            KOMATIK UGM hadir untuk membina, memfasilitasi, dan <br />
            mendorong mahasiswa UGM berprestasi di bidang TIK.
          </p>
        </div>
      </div>
    </div>
  );
};