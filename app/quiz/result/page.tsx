"use client";

import NextImage from "next/image";
import { useQuizContext } from "../quizContext";
import { useEffect, useState, Suspense, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { toPng } from "html-to-image";


type Division =
  | "CP"
  | "CyberSec"
  | "Networking"
  | "SRD"
  | "IoT"
  | "GaMLAB"
  | "DMAI"
  | "Animasi"
  | "UX";

const divisionDetails: Record<
  Division,
  { name: string; icon: string; narrative: string }
> = {
  CP: {
    name: "Competitive Programming",
    icon: "/assets/divisi/cp.png",
    narrative:
      "Wah, kamu ternyata doyan tantangan logika ya! Cocok banget ikut Competitive Programming bareng aku!",
  },
  CyberSec: {
    name: "Cyber Security",
    icon: "/assets/divisi/as-gama.png",
    narrative:
      "Kamu perhatian banget soal keamanan. Kayaknya seru kalau bareng Cyber Security!",
  },
  Networking: {
    name: "Networking",
    icon: "/assets/divisi/as-gama.png",
    narrative:
      "Kamu tipe orang yang pengen semua koneksi lancar jaya. Divisi Networking pas buatmu!",
  },
  SRD: {
    name: "Software Research Development",
    icon: "/assets/divisi/srd.png",
    narrative:
      "Kamu suka bikin hal baru jalan dengan lancar. Cocok masuk Software Research Development!",
  },
  IoT: {
    name: "IoT",
    icon: "/assets/divisi/iot-gama.png",
    narrative:
      "Kamu doyan ngoprek alat biar bisa otomatis. Dunia IoT nungguin kamu!",
  },
  GaMLAB: {
    name: "GaM-LAB",
    icon: "/assets/divisi/gam-lab.png",
    narrative:
      "Kamu fun banget! Cocok bikin game seru bareng GaM-LAB.",
  },
  DMAI: {
    name: "Data Mining & AI",
    icon: "/assets/divisi/dmai.png",
    narrative:
      "Kamu penasaran banget sama pola data. Divisi Data Mining & AI cocok banget buatmu!",
  },
  Animasi: {
    name: "Animasi",
    icon: "/assets/divisi/animasi.png",
    narrative:
      "Kamu imajinatif banget, suka bikin sesuatu jadi hidup. Animasi pas buatmu!",
  },
  UX: {
    name: "UXGama",
    icon: "/assets/divisi/ux-gama.png",
    narrative:
      "Kamu peduli banget sama kenyamanan orang lain. UX GAMA bakal seneng punya kamu!",
  },
};

const priorityOrder: Division[] = [
  "CP",
  "DMAI",
  "SRD",
  "IoT",
  "CyberSec",
  "Networking",
  "GaMLAB",
  "Animasi",
  "UX",
];

interface Recommendation {
  main: {
    name: string;
    icon: string;
    description: string;
  };
  other: {
    name: string;
    icon: string;
  }[];
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Gagal memuat gambar: ${src}`));
    img.src = src;
  });
}

async function ensureAssetsReady(root: HTMLElement) {
  const tasks: Promise<void>[] = [];

  const imgs = Array.from(root.querySelectorAll("img"));
  for (const el of imgs) {
    const src = el.getAttribute("src");
    if (!src) continue;
    const isLoaded =
      el.complete && (el as HTMLImageElement).naturalWidth > 0;
    if (!isLoaded) tasks.push(preloadImage(src));
  }

  const allEls = Array.from(root.querySelectorAll<HTMLElement>("*"));
  for (const el of allEls) {
    const bg = getComputedStyle(el).backgroundImage; 
    const match = bg && bg.match(/url\((['"]?)(.*?)\1\)/);
    if (match && match[2]) {
      const url = match[2];
      tasks.push(preloadImage(url));
    }
  }


  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  await Promise.all(tasks);
}


type AnyDivRef =
  | React.RefObject<HTMLDivElement>
  | React.MutableRefObject<HTMLDivElement | null>;

function ExportStory({
  data,
  exportRef,
}: {
  data: Recommendation;
  exportRef: AnyDivRef;
}) {
  return (
    <div
      ref={exportRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        opacity: 0,           
        pointerEvents: "none",
        backgroundColor: "#030F22",
      }}
      className="font-sans text-white"
    >
      <div className="w-[1080px] h-[1920px] relative">
        <div
          className="absolute w-[1080px] h-[1920px] top-0 left-0"
          style={{
            backgroundImage: "url('/assets/quiz/bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <img
          src="/assets/home/robot_tentangkami.png"
          alt="Brion"
          className="absolute w-[213px] h-[255px] top-[408px] left-12"
          style={{ aspectRatio: "0.85", zIndex: 10 }}
        />

        <div className="absolute top-[469px] left-[290px] font-bold text-white text-[46px] leading-[56px] whitespace-nowrap">
          Rekomendasi Brion
        </div>

        <div 
          className="absolute w-[820px] h-[546px] top-[548px] left-[130px] rounded-[48px]"
          style={{
            border: "none",
            background: "linear-gradient(130deg, rgba(255,255,255,0.4) 0%, rgba(79,77,77,0.06) 100%)",
          }}
        >
          <div 
            className="absolute inset-0 rounded-[48px] pointer-events-none"
            style={{
              padding: "5px",
              background: "linear-gradient(117deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 39%, rgba(255,255,255,0) 64%, rgba(255,255,255,0.5) 95%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              zIndex: 1,
            }}
          />
        </div>

        <p className="absolute w-[612px] top-[647px] left-[234px] font-normal text-[#f7f7f7] text-[28px] text-center leading-[38px]">
          <span className="font-normal">
            {data.main.description.split(data.main.name)[0]}
          </span>
          <span className="font-bold">
            {data.main.name}
          </span>
          <span className="font-normal">
            {data.main.description.split(data.main.name)[1]}
          </span>
        </p>

        <div 
          className="absolute w-[552px] h-[118px] top-[853px] left-[264px] bg-white rounded-2xl flex items-center justify-center gap-4"
          style={{
            border: "none",
          }}
        >
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              padding: "5px",
              background: "linear-gradient(117deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 39%, rgba(255,255,255,0) 64%, rgba(255,255,255,0.5) 95%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              zIndex: 1,
            }}
          />
          
          <img 
            src={data.main.icon} 
            alt={data.main.name} 
            className="w-[63px] h-14"
            style={{ aspectRatio: "1.12" }}
          />
          <div className="font-semibold text-[#d80000] text-[24px] text-center leading-[32px]">
            {data.main.name}
          </div>
        </div>

        <div className="absolute top-[1157px] left-96 font-bold text-white text-[44px] leading-[52px] whitespace-nowrap">
          Rekomendasi Lain
        </div>

        <div className="absolute w-[820px] h-[290px] top-[1232px] left-[130px] rounded-3xl"
          style={{
            border: "none",
            background: "linear-gradient(130deg, rgba(255,255,255,0.4) 0%, rgba(79,77,77,0.06) 100%)",
          }}
        >
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              padding: "5px",
              background: "linear-gradient(117deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 39%, rgba(255,255,255,0) 64%, rgba(255,255,255,0.5) 95%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              zIndex: 1,
            }}
          />
        </div>

        {data.other.map((item, index) => (
          <div key={item.name}>
            {/* Card background */}
            <div className="absolute w-[374px] h-[242px] bg-white rounded-xl flex flex-col items-center justify-center gap-4 p-6"
              style={{
                top: "1256px",
                left: index === 0 ? "154px" : "552px",
              }}
            >
              {/* Card icon - centered */}
              <img 
                src={item.icon} 
                alt={item.name}
                className="w-[95px] h-[92px]"
                style={{ aspectRatio: index === 0 ? "1.05" : "1.03" }}
              />
              
              {/* Card text - centered */}
              <p className="font-semibold text-black text-[22px] leading-[30px] text-center">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





function QuizResult() {
  const { scores, mainPoints } = useQuizContext();
  const [recommendations, setRecommendations] =
    useState<Recommendation | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const pageRef = useRef<HTMLElement | null>(null);
  const exportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sortedDivisions = Object.keys(scores).sort((a, b) => {
      const scoreA = scores[a];
      const scoreB = scores[b];
      if (scoreA !== scoreB) return scoreB - scoreA;

      const mainPointsA = mainPoints[a];
      const mainPointsB = mainPoints[b];
      if (mainPointsA !== mainPointsB) return mainPointsB - mainPointsA;

      return (
        priorityOrder.indexOf(a as Division) -
        priorityOrder.indexOf(b as Division)
      );
    }) as Division[];

    const mainDivisionKey = sortedDivisions[0];
    if (!mainDivisionKey) return;

    const mainRec = {
      name: divisionDetails[mainDivisionKey].name,
      icon: divisionDetails[mainDivisionKey].icon,
      description: divisionDetails[mainDivisionKey].narrative,
    };

    const otherRecs = sortedDivisions.slice(1, 3).map((divisionKey) => ({
      name: divisionDetails[divisionKey].name,
      icon: divisionDetails[divisionKey].icon,
    }));

    setRecommendations({ main: mainRec, other: otherRecs });
  }, [scores, mainPoints]);

const handleDownloadImage = useCallback(async () => {
  if (!exportRef.current) return;
  
  setIsDownloading(true);
  try {
    await ensureAssetsReady(exportRef.current);

    const dataUrl = await toPng(exportRef.current, {
      cacheBust: true,
      pixelRatio: 2,
      width: 1080,
      height: 1920,
      backgroundColor: "#030F22",
      imagePlaceholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBh4yG2mEAAAAASUVORK5CYII=",
      style: {
        opacity: "1",
        transform: "none",
      },
    });

    const a = document.createElement("a");
    a.download = "hasil-rekomendasi-brion-1080x1920.png";
    a.href = dataUrl;
    a.click();
  } catch (e) {
    console.error("Gagal membuat gambar:", e);
  } finally {
    setIsDownloading(false);
  }
}, []);


  if (!recommendations) {
    return (
      <main
        className="flex min-h-screen flex-col items-center justify-center text-white p-6 md:p-8"
        style={{
          backgroundImage: "url('/assets/quiz/background.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="text-2xl">Menganalisa hasil kuis...</p>
      </main>
    );
  }

  return (
    <>
      <ExportStory data={recommendations} exportRef={exportRef} />

      <main
        ref={pageRef}
        className="relative min-h-screen w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(117deg, #0C2A5E -13.2%, #081936 45.72%, #030F22 111.75%)",
        }}
      >
        <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16 text-white">
          <div className="w-full max-w-4xl">
            <h1 className="mb-8 text-center text-4xl font-bold">
              Analisa Hasil Kuis
            </h1>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Rekomendasi Brion</h2>
              <div
                className="rounded-3xl border-[5px] border-white/50 p-8 shadow-lg backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(117deg, rgba(255, 255, 255, 0.40) -1.37%, rgba(79, 77, 77, 0.06) 113.39%)",
                }}
              >
                <p className="mb-6 text-center text-lg">
                  {recommendations.main.description}
                </p>
                <div className="mb-6 flex items-center justify-center gap-4 rounded-xl bg-white/90 p-6 text-gray-800">
                  <NextImage
                    src={recommendations.main.icon}
                    alt={recommendations.main.name}
                    width={60}
                    height={60}
                  />
                  <span className="text-2xl font-bold text-red-600">
                    {recommendations.main.name}
                  </span>
                </div>
                <div className="text-right">
                  <Button
                    onClick={handleDownloadImage}
                    disabled={isDownloading}
                    className="gap-2 bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDownloading ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Download size={18} />
                    )}
                    {isDownloading ? "Mengunduh..." : "Unduh Hasil"}
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Rekomendasi Lain</h2>
              <div
                className="rounded-3xl border-[5px] border-white/50 p-8 shadow-lg backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(117deg, rgba(255, 255, 255, 0.40) -1.37%, rgba(79, 77, 77, 0.06) 113.39%)",
                }}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {recommendations.other.map((rec) => (
                    <div
                      key={rec.name}
                      className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/90 p-6 text-center text-gray-800"
                    >
                      <NextImage
                        src={rec.icon}
                        alt={rec.name}
                        width={80}
                        height={80}
                      />
                      <h3 className="text-lg font-semibold">{rec.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}


export default function QuizResultPage() {
  return (
    <Suspense
      fallback={
        <main
          className="flex min-h-screen flex-col items-center justify-center text-white p-6 md:p-8"
          style={{
            backgroundImage: "url('/assets/quiz/background.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="text-2xl">Memuat hasil...</p>
        </main>
      }
    >
      <QuizResult />
    </Suspense>
  );
}
