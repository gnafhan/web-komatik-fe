import React from "react";
import HeroSection from "@/features/pengurus/components/HeroSection";
import PengurusSection from "@/features/pengurus/components/PengurusSection";
import { getAnggotaData } from "@/services/anggota";


export default async function Pengurus() {
  const data = await getAnggotaData();

  return (
    <div className="w-full font-sans overflow-x-hidden">
      <HeroSection />
      <PengurusSection data={data} />
    </div>
  );
}
