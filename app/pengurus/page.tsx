import React from "react";
import HeroSection from "@/features/pengurus/components/HeroSection";
import PengurusSection from "@/features/pengurus/components/PengurusSection";

export default function Pengurus() {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <HeroSection />
      <PengurusSection />
    </div>
  );
}
