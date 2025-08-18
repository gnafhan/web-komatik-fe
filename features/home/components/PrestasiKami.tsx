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
  const [selectedYear, setSelectedYear] = useState(2024);
  
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
    <div className="w-full py-16 px-4 bg-white relative overflow-hidden">
      {/* Ambient background orbs for subtle motion */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"
        animate={{ x: [0, 20, -10, 0], y: [0, 14, -8, 0], opacity: [0.25, 0.4, 0.3, 0.25] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ x: [0, -18, 10, 0], y: [0, -12, 20, 0], opacity: [0.25, 0.35, 0.3, 0.25] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      
      <div className="relative max-w-7xl mx-auto overflow-x-hidden">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 26, delay: 0.2 }} 
            viewport={{once: true}}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={{ willChange: "transform, opacity" }}>
              Prestasi Kami
            </motion.h2>
            {/* Year Tabs */}
            <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 26, delay: 0.4 }} 
            viewport={{once: true}} 
            className="flex gap-6"
            style={{ willChange: "transform, opacity" }}>
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
            <motion.div className="absolute -right-5 -bottom-4 z-10 w-20 h-20 lg:w-28 lg:h-28"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
            >
                <img
                src="/assets/home/mascot-prestasi.png"
                alt="Mascot"
                className="object-contain w-full h-full drop-shadow-lg"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
            </motion.div>
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
                  {filteredPrestasi.map((prestasi, index) => (
                    <CarouselItem 
                      key={prestasi.id} 
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 75, damping: 24, delay: 0.1 + index * 0.06 }}
                        viewport={{ once: true }}
                        style={{ willChange: "transform, opacity" }}
                      >
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 6 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: (index % 4) * 0.2 }}
                          style={{ willChange: "transform" }}
                        >
                          <PrestasiCard
                            title={prestasi.title}
                            team={prestasi.team}
                            members={prestasi.members}
                            image={prestasi.image}
                          />
                        </motion.div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex justify-center mt-8 gap-3">
                <motion.button
                  onClick={handlePrevious}
                  disabled={!canScrollPrev}
                  aria-label="Sebelumnya"
                  className={`p-3 rounded-full border-2 transition-all duration-200 ${
                    canScrollPrev
                      ? 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                      : 'border-gray-300 text-gray-300 cursor-not-allowed'
                  }`}
                  whileTap={{ scale: 0.96 }}
                  whileHover={canScrollPrev ? { scale: 1.05 } : {}}
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" focusable="false" />
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  disabled={!canScrollNext}
                  aria-label="Berikutnya"
                  className={`p-3 rounded-full border-2 transition-all duration-200 ${
                    canScrollNext
                      ? 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                      : 'border-gray-300 text-gray-300 cursor-not-allowed'
                  }`}
                  whileTap={{ scale: 0.96 }}
                  whileHover={canScrollNext ? { scale: 1.05 } : {}}
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" focusable="false" />
                </motion.button>
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