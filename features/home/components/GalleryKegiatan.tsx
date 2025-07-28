"use client";
import { UiImage } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";


const galleryImages = [
  { className: "col-span-2 row-span-2", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-2 row-span-2", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-[3/2]" },
];

export default function GalleryKegiatan() {
  const backgroundRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const createBackgroundPattern = () => {
      if (!backgroundRef.current) return;

      const container = backgroundRef.current;
      // Get the actual section height and width
      const section = container.closest('section');
      const containerWidth = section?.offsetWidth || window.innerWidth;
      const containerHeight = (section?.offsetHeight || window.innerHeight) + 200; // Add buffer
      
      // Clear existing background elements
      container.innerHTML = '';
      
      // Pattern tile dimensions
      const patternWidth = 54;
      const patternHeight = 68;
      
      // Calculate tiles needed to cover the entire section with extra rows
      const cols = Math.ceil(containerWidth / patternWidth) + 2;
      const rows = Math.ceil(containerHeight / patternHeight) + 4; // Increased buffer
      
      // Create pattern
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const offsetCol = row % 2 === 0 ? col : col - 0.5;
          const isLeftPattern = (Math.floor(row) + Math.floor(col)) % 2 === 0;
          const bgImage = isLeftPattern 
            ? '/assets/Gallery/bg-1-left.png' 
            : '/assets/Gallery/bg-2-right.png';
          
          const bgElement = document.createElement('div');
          bgElement.className = 'absolute';
          bgElement.style.left = `${offsetCol * patternWidth}px`;
          bgElement.style.top = `${row * patternHeight * 0.75}px`;
          bgElement.style.width = `${patternWidth}px`;
          bgElement.style.height = `${patternHeight}px`;
          bgElement.style.backgroundImage = `url(${bgImage})`;
          bgElement.style.backgroundSize = 'contain';
          bgElement.style.backgroundPosition = 'center';
          bgElement.style.backgroundRepeat = 'no-repeat';
          bgElement.style.opacity = '70%';
          
          container.appendChild(bgElement);
        }
      }
    };

    // Create initial pattern
    createBackgroundPattern();

    // Recreate pattern on window resize
    const handleResize = () => {
      createBackgroundPattern();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', createBackgroundPattern);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', createBackgroundPattern);
    };
  }, []);

  return (
    <section 
      className="relative w-full min-h-screen py-16 md:py-24 overflow-hidden bg-gray-50"
    >
      {/* Background Pattern - Covers entire section */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
      />
      
           {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Gallery Kegiatan
          </h2>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white border-4 border-white",
                image.className,
                image.aspectRatio
              )}
            >
              {/* Inner image container with border */}
              <div className="w-full h-full rounded-lg overflow-hidden">
                {/* Placeholder image */}
                <div className="w-full h-full bg-gradient-to-br flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )};