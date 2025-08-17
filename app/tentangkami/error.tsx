'use client';

import { BlurHeader } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <BlurHeader />
      
      <div className="relative w-full min-h-[120px] flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="/assets/TentangKami/bg-TentangKami.png" 
            alt="Tentang Kami Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl ml-[8%]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Tentang Kami
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Terjadi kesalahan saat memuat halaman
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                Oops! Terjadi Kesalahan
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Maaf, terjadi kesalahan saat memuat konten halaman Tentang Kami.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Error: {error.message}
              </p>
              <button
                onClick={reset}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}