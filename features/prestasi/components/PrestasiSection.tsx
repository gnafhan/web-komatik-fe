"use client";
import { useState } from "react";;
import PrestasiCard from "@/components/ui/PrestasiCard";
import { prestasiData, yearTabs } from "@/data/prestasi-data";



export default function PrestasiSection() {

  const [selectedYear, setSelectedYear] = useState(2025);
  
  // Filter Tahun
  const filteredPrestasi = prestasiData.filter(prestasi => prestasi.year === selectedYear);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div className="w-full py-16 px-4 bg-white relative">
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-2 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prestasi Kami
            </h2>
            {/* Year Tabs */}
            <div className="flex gap-6">
              {yearTabs.map((tab) => (
                <button
                  key={tab.year}
                  onClick={() => handleYearChange(tab.year)}
                  className={`text-lg lg:text-xl font-semibold transition-colors duration-200 ${
                    selectedYear === tab.year
                      ? 'text-red-600 border-b-2 border-red-600 pb-1'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

        </div>
        <div className="w-full border-t border-gray-200 my-6 relative"/>
        {/* Carousel */}
        <div className="relative">
          {filteredPrestasi.length > 0 ? (
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {filteredPrestasi.map((prestasi) => (
                        <div className="w-full" key={prestasi.id}>
                            <PrestasiCard
                              title={prestasi.title}
                              team={prestasi.team}
                              members={prestasi.members}
                              image={prestasi.image}
                              // category={prestasi.category}
                            />
                        </div>
                  ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Belum ada prestasi untuk tahun {selectedYear}
              </p>
            </div>
          )}
        </div>


      </div>
    </div>
  );
}