"use client";

import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection = ({ title, description }: HeroSectionProps) => {
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
          <h1 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-out-cubic"
          > 
            {title}
          </h1>
          <p 
            className="text-sm md:text-base text-gray-300 leading-relaxed"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-out-cubic"
          > 
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};