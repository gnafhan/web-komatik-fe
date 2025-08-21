"use client";
import Image from "next/image";

interface PengurusCardProps {
  image: string;
  position: string;
  name: string;
  index?: number;
}

export default function PengurusCard({ image, position, name, index = 0 }: PengurusCardProps) {
  return (
    <div 
      className="flex flex-col items-center w-[252px]"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={100 + (index * 100)}
      data-aos-easing="ease-out-cubic"
    >
      <div 
        className="w-[252px] h-[220px] bg-[#0A1A40] rounded-lg mb-3 overflow-hidden"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay={200 + (index * 100)}
      >
        <img 
          src={image} 
          alt={`${position} - ${name}`} 
          className="w-full h-full object-contain"
        />
      </div>
      <div 
        className="text-center w-full"
        data-aos="fade-in"
        data-aos-duration="400"
        data-aos-delay={300 + (index * 100)}
      >
        <h3 className="text-red-600 font-semibold">{position}</h3>
        <p className="text-lg font-medium">{name}</p>
      </div>
    </div>
  );
}
