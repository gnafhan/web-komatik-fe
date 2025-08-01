"use client";

import React, { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createBackgroundPattern = () => {
      if (!backgroundRef.current) return;

      const container = backgroundRef.current;
      const section = container.closest('div');
      const containerWidth = section?.offsetWidth || window.innerWidth;
      const containerHeight = (section?.offsetHeight || window.innerHeight) + 200;
      
      container.innerHTML = '';
      
      // Adjust pattern dimensions to prevent overlap
      const patternWidth = 54;
      const patternHeight = 68;
      const horizontalSpacing = patternWidth * 1; // No horizontal overlap
      const verticalSpacing = patternHeight * 1.1; // Slight vertical overlap for seamless look
      
      const cols = Math.ceil(containerWidth / horizontalSpacing) + 1;
      const rows = Math.ceil(containerHeight / verticalSpacing) + 4;
      
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          // Adjust offset calculation to prevent overlap
          const offsetCol = row % 2 === 0 ? col : col + 0.5; // Changed from col - 0.5 to col + 0.5
          const isLeftPattern = (Math.floor(row) + Math.floor(col)) % 2 === 0;
          const bgImage = isLeftPattern 
            ? '/assets/Gallery/bg-1-left.png' 
            : '/assets/Gallery/bg-2-right.png';
          
          const bgElement = document.createElement('div');
          bgElement.className = 'absolute';
          bgElement.style.left = `${offsetCol * horizontalSpacing}px`; // Use horizontalSpacing
          bgElement.style.top = `${row * verticalSpacing}px`; // Use verticalSpacing
          bgElement.style.width = `${patternWidth}px`;
          bgElement.style.height = `${patternHeight}px`;
          bgElement.style.backgroundImage = `url(${bgImage})`;
          bgElement.style.backgroundSize = 'contain';
          bgElement.style.backgroundPosition = 'center';
          bgElement.style.backgroundRepeat = 'no-repeat';
          bgElement.style.opacity = '10%';
          
          container.appendChild(bgElement);
        }
      }
    };

    createBackgroundPattern();

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
    <div className="relative w-full min-h-[200px] flex items-center" 
         style={{
           background: 'linear-gradient(101.19deg, #041128 5.44%, #081936 65.42%, #213D6F 102.82%)'
         }}>
      {/* Background Pattern */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl ml-[8%]"> {/* Added margin-left */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tentang Kami
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            KOMATIK UGM hadir untuk membina, memfasilitasi, dan <br />
            mendorong mahasiswa UGM berprestasi di bidang TIK.
          </p>
        </div>
      </div>
    </div>
  );
};