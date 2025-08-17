"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { UiImage } from "@/components/ui/image";
import PrestasiCard from "@/components/ui/PrestasiCard";
import { prestasiData, yearTabs } from "@/data/prestasi-data";
import * as motion from "motion/react-client"

interface Prestasi {
  id: number;
  title: string;
  team: string;
  members: string;
  image: string;
  year: number;
  category: string;
}

export default function PrestasiKami() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2025);
  
  // Filter Tahun
  const filteredPrestasi = prestasiData.filter(prestasi => prestasi.year === selectedYear);

  const updateButtons = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    
    updateButtons(api);
    api.on("select", () => updateButtons(api));
    
    return () => {
      api.off("select", () => updateButtons(api));
    };
  }, [api, updateButtons]);

  const handlePrevious = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div className="w-full py-16 px-4 bg-white relative">
      
      <div className="relative max-w-7xl mx-auto overflow-x-hidden">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <motion.h2 
            initial={{opacity: 0, translateX: -100}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 0.8, delay: 0.35}} 
            viewport={{once: true}}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prestasi Kami
            </motion.h2>
            {/* Year Tabs */}
            <motion.div
            initial={{opacity: 0, translateX: -100}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1, delay: 1}} 
            viewport={{once: true}} 
            className="flex gap-6">
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
            </motion.div>
          </div>

        </div>
        <div className="w-full border-t border-gray-200 my-6 relative">
            {/* Mascot */}
            <div className="absolute -right-5 animate-bounce -bottom-4 z-10 w-20 h-20 lg:w-28 lg:h-28">
                <img
                src="/assets/home/mascot-prestasi.png"
                alt="Mascot"
                className="object-contain w-full h-full drop-shadow-lg"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
            </div>
        </div>
        {/* Carousel */}
        <div className="relative">
          {filteredPrestasi.length > 0 ? (
            <>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  skipSnaps: false,
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {filteredPrestasi.map((prestasi) => (
                    <CarouselItem 
                      key={prestasi.id} 
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <PrestasiCard
                        title={prestasi.title}
                        team={prestasi.team}
                        members={prestasi.members}
                        image={prestasi.image}
                        // category={prestasi.category}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex justify-center mt-8 gap-3">
                <button
                  onClick={handlePrevious}
                  disabled={!canScrollPrev}
                  className={`p-3 rounded-full border-2 transition-all duration-200 ${
                    canScrollPrev
                      ? 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                      : 'border-gray-300 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={!canScrollNext}
                  className={`p-3 rounded-full border-2 transition-all duration-200 ${
                    canScrollNext
                      ? 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                      : 'border-gray-300 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </>
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