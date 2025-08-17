"use client";
import Image from "next/image";

interface PengurusCardProps {
  image: string;
  position: string;
  name: string;
}

export default function PengurusCard({ image, position, name }: PengurusCardProps) {
  return (
    <div className="flex flex-col items-center w-[252px]">
      <div className="w-[252px] h-[220px] bg-[#0A1A40] rounded-lg mb-3 overflow-hidden">
        <img 
          src={image} 
          alt={`${position} - ${name}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center w-full">
        <h3 className="text-red-600 font-semibold">{position}</h3>
        <p className="text-lg font-medium">{name}</p>
      </div>
    </div>
  );
}
