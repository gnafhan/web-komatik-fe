"use client";
import { useState } from "react";
import { pengurusCategories, pengurusPeriods } from "@/data/pengurus-data";
import PengurusCard from "./PengurusCard";

interface PengurusMember {
  id: number;
  position: string;
  name: string;
  image: string;
}

interface PengurusGroup {
  groupName: string;
  members: PengurusMember[];
}

interface PengurusSectionProps {
  data: any;
}

export default function PengurusSection({ data }: PengurusSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<"ph" | "manajerial" | "teknis">("ph");
  const [selectedPeriod, setSelectedPeriod] = useState<"2024/2025" | "2023/2024">("2024/2025");

  const periodExists = Object.keys(data).includes(selectedPeriod);
  const categoryExists = periodExists &&
    data[selectedPeriod as keyof typeof data] &&
    selectedCategory in data[selectedPeriod as keyof typeof data];

  const currentPengurusData = categoryExists
    ? data[selectedPeriod as keyof typeof data][selectedCategory] as PengurusGroup[]
    : [] as PengurusGroup[];
  
  // Dropdown
  const Dropdown = () => {
    return (
      <div className="relative">
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value as "2024/2025" | "2023/2024")}
          className="border border-red-600 font-bold rounded-md px-4 py-2 bg-white text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none pr-10"
        >
          {pengurusPeriods.map((period) => (
            <option key={period.year} value={period.year}>
              {period.year}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-red-600">
          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-16 px-4 bg-white relative">
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          {/* Year Selection*/}
          <div className="flex items-center justify-center w-full mb-6 lg:justify-start lg:w-auto lg:order-2 lg:mb-0">
            <Dropdown />
          </div>
          
          {/* Category Tabs */}
          <div className="flex gap-6 mb-6 lg:order-1 lg:mb-0">
            {pengurusCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as "ph" | "manajerial" | "teknis")}
                className={`text-lg lg:text-xl font-semibold transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'text-red-600 border-b-2 border-red-600 pb-1'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Pengurus Groups */}
        <div className="space-y-16">
          {!periodExists ? (
            <div className="flex flex-col items-center justify-center py-16">
              <svg 
                className="w-16 h-16 text-gray-400 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-center mb-2">Data Tidak Tersedia</h3>
              <p className="text-gray-600 text-center">Data pengurus untuk periode {selectedPeriod} belum tersedia.</p>
            </div>
          ) : currentPengurusData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <svg 
                className="w-16 h-16 text-gray-400 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-center mb-2">Data Kategori Tidak Tersedia</h3>
              <p className="text-gray-600 text-center">Data untuk kategori {selectedCategory} pada periode {selectedPeriod} belum tersedia.</p>
            </div>
          ) : (
            currentPengurusData.map((group, idx) => (
              <div key={idx} className="mb-8">
                {selectedCategory !== "ph" && (
                  <h3 className="text-2xl font-bold text-center mb-8">{group.groupName}</h3>
                )}
                <div className="w-full max-w-5xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-8 mb-20">
                    {group.members.map((person, personIndex) => (
                      <div key={person.id} className="flex-shrink-0">
                        <PengurusCard
                          image={person.image}
                          position={person.position}
                          name={person.name}
                          index={personIndex}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
