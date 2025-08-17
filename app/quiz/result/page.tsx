"use client";

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

type Division = 'CP' | 'CyberSec' | 'Networking' | 'SRD' | 'IoT' | 'GaMLAB' | 'DMAI' | 'Animasi' | 'UX';

const divisionDetails: Record<Division, { name: string; icon: string; narrative: string }> = {
    CP: { name: 'Competitive Programming', icon: '/assets/divisi/cp.png', narrative: "Wah, kamu ternyata doyan tantangan logika ya! Cocok banget ikut Competitive Programming bareng aku!" },
    CyberSec: { name: 'Cyber Security', icon: '/assets/divisi/as-gama.png', narrative: "Kamu perhatian banget soal keamanan. Kayaknya seru kalau bareng Cyber Security!" },
    Networking: { name: 'Networking', icon: '/assets/divisi/iot-gama.png', narrative: "Kamu tipe orang yang pengen semua koneksi lancar jaya. Divisi Networking pas buatmu!" },
    SRD: { name: 'Software Research Development', icon: '/assets/divisi/srd.png', narrative: "Kamu suka bikin hal baru jalan dengan lancar. Cocok masuk Software Research Development!" },
    IoT: { name: 'IoT', icon: '/assets/divisi/iot-gama.png', narrative: "Kamu doyan ngoprek alat biar bisa otomatis. Dunia IoT nungguin kamu!" },
    GaMLAB: { name: 'GaM-LAB', icon: '/assets/divisi/gam-lab.png', narrative: "Kamu fun banget! Cocok bikin game seru bareng GaM-LAB." },
    DMAI: { name: 'Data Mining & AI', icon: '/assets/divisi/dmai.png', narrative: "Kamu penasaran banget sama pola data. Divisi Data Mining & AI cocok banget buatmu!" },
    Animasi: { name: 'Animasi', icon: '/assets/divisi/animasi.png', narrative: "Kamu imajinatif banget, suka bikin sesuatu jadi hidup. Animasi pas buatmu!" },
    UX: { name: 'UX', icon: '/assets/divisi/ux-gama.png', narrative: "Kamu peduli banget sama kenyamanan orang lain. UX GAMA bakal seneng punya kamu!" },
};

const priorityOrder: Division[] = ['CP', 'DMAI', 'SRD', 'IoT', 'CyberSec', 'Networking', 'GaMLAB', 'Animasi', 'UX'];

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

const QuizResult = () => {
    const searchParams = useSearchParams();
    const [recommendations, setRecommendations] = useState<Recommendation | null>(null);

    useEffect(() => {
        const scoresStr = searchParams.get('scores');
        const mainPointsStr = searchParams.get('mainPoints');

        if (scoresStr && mainPointsStr) {
            const scores = JSON.parse(decodeURIComponent(scoresStr));
            const mainPoints = JSON.parse(decodeURIComponent(mainPointsStr));

            const sortedDivisions = Object.keys(scores).sort((a, b) => {
                const scoreA = scores[a];
                const scoreB = scores[b];

                if (scoreA !== scoreB) {
                    return scoreB - scoreA;
                }

                const mainPointsA = mainPoints[a];
                const mainPointsB = mainPoints[b];

                if (mainPointsA !== mainPointsB) {
                    return mainPointsB - mainPointsA;
                }

                return priorityOrder.indexOf(a as Division) - priorityOrder.indexOf(b as Division);
            }) as Division[];

            const mainDivisionKey = sortedDivisions[0]; 
            
            if (!mainDivisionKey) return;

            const mainRec = {
                name: divisionDetails[mainDivisionKey].name,
                icon: divisionDetails[mainDivisionKey].icon,
                description: divisionDetails[mainDivisionKey].narrative,
            };

            const otherRecs = sortedDivisions.slice(1, 3).map(divisionKey => ({
                name: divisionDetails[divisionKey].name,
                icon: divisionDetails[divisionKey].icon,
            }));

            setRecommendations({ main: mainRec, other: otherRecs });
        }
    }, [searchParams]);

    if (!recommendations) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center text-white p-6 md:p-8" style={{ backgroundImage: "url('/assets/quiz/background.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <p className="text-2xl">Menganalisa hasil kuis...</p>
            </main>
        );
    }

    return (
        <main
            className="relative min-h-screen w-full overflow-hidden"
            style={{
                background: 'linear-gradient(117deg, #0C2A5E -13.2%, #081936 45.72%, #030F22 111.75%)',
            }}
        >
            <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16 text-white">
                <div className="w-full max-w-4xl">
                    <h1 className="mb-8 text-center text-4xl font-bold">Analisa Hasil Kuis</h1>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-semibold">Rekomendasi Brion</h2>
                        <div
                            className="rounded-3xl border-[5px] border-white/50 p-8 shadow-lg backdrop-blur-md"
                            style={{
                                background: 'linear-gradient(117deg, rgba(255, 255, 255, 0.40) -1.37%, rgba(79, 77, 77, 0.06) 113.39%)',
                            }}
                        >
                            <p className="mb-6 text-center text-lg">{recommendations.main.description}</p>
                            <div className="mb-6 flex items-center justify-center gap-4 rounded-xl bg-white/90 p-6 text-gray-800">
                                <Image src={recommendations.main.icon} alt={recommendations.main.name} width={60} height={60} />
                                <span className="text-2xl font-bold text-red-600">{recommendations.main.name}</span>
                            </div>
                            <div className="text-right">
                                <Button className="gap-2 bg-red-600 text-white hover:bg-red-700">
                                    <Download size={18} />
                                    Unduh Hasil
                                </Button>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-semibold">Rekomendasi Lain</h2>
                        <div
                            className="rounded-3xl border-[5px] border-white/50 p-8 shadow-lg backdrop-blur-md"
                            style={{
                                background: 'linear-gradient(117deg, rgba(255, 255, 255, 0.40) -1.37%, rgba(79, 77, 77, 0.06) 113.39%)',
                            }}
                        >
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {recommendations.other.map((rec) => (
                                    <div
                                        key={rec.name}
                                        className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/90 p-6 text-center text-gray-800"
                                    >
                                        <Image src={rec.icon} alt={rec.name} width={80} height={80} />
                                        <h3 className="text-lg font-semibold">{rec.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default function QuizResultPage() {
    return (
        <Suspense fallback={<main className="flex min-h-screen flex-col items-center justify-center text-white p-6 md:p-8" style={{ backgroundImage: "url('/assets/quiz/background.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}><p className="text-2xl">Memuat hasil...</p></main>}>
            <QuizResult />
        </Suspense>
    );
}