"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const questionsData = [
    {
        id: 1,
        question: "Kalau lagi gabut, kamu lebih suka ngapain?",
        options: [
            "Main puzzle/teka-teki biar otak mikir",
            "Coret-coret gambar atau desain biar seru",
            "Bongkar pasang barang atau coba utak-atik alat di rumah",
            "Ngulik data/angka atau kepo kenapa sesuatu bisa terjadi",
        ],
    },
    {
        id: 2,
        question: "Kamu tipe orang yang paling heboh pas…?",
        options: [
            "Dapet soal sulit terus berhasil nemuin jawaban",
            "Bikin sesuatu keliatan rapi, estetik, atau nyaman dipakai",
            "Nemu cara biar barang yang tadinya mati bisa hidup lagi",
            "Bisa ngerti pola atau rahasia tersembunyi dari kumpulan data",
        ],
    },
    {
        id: 3,
        question: "Kalau diajak kerja kelompok, biasanya kamu jadi yang…?",
        options: [
            "Nyari solusi cepet kalau ada masalah",
            "Ngatur biar hasilnya enak dilihat orang lain",
            "Suka praktek langsung biar cepet kelar",
            "Rajin analisis, bandingin, nyatet detail",
        ],
    },
    {
        id: 4,
        question: "Kalau ada masalah jaringan atau hp lemot, kamu…?",
        options: [
            "Sabar terus coba utak-atik sendiri sampai jalan",
            "Lebih mikirin gimana biar aman dari hal aneh/virus",
            "Cari tau kenapa sinyalnya aneh, coba benerin jalurnya",
            "Males ribet, tapi suka mantau angkanya",
        ],
    },
    {
        id: 5,
        question: "Dari semua ini, yang paling bikin kamu semangat?",
        options: [
            "Main game bareng teman",
            "Lihat karya visual yang keren banget",
            "Liat alat bisa gerak otomatis kayak sulap",
            "Ngerasain aplikasi/website yang gampang banget dipakai",
        ],
    },
];

type Division = 'CP' | 'CyberSec' | 'Networking' | 'SRD' | 'IoT' | 'GaMLAB' | 'DMAI' | 'Animasi' | 'UX';

type Scores = Record<Division, number>;

type ScoringMap = {
    [questionIndex: number]: {
        [optionIndex: number]: Partial<Scores>;
    };
};

const scoringMap: ScoringMap = {
    0: { // Q1
        0: { CP: 2, CyberSec: 1 },
        1: { UX: 2, Animasi: 1 },
        2: { IoT: 2, Networking: 1 },
        3: { DMAI: 2, SRD: 1 },
    },
    1: { // Q2
        0: { CP: 2, DMAI: 1 },
        1: { UX: 2, GaMLAB: 1 },
        2: { IoT: 2, Networking: 1 },
        3: { DMAI: 2, SRD: 1 },
    },
    2: { // Q3
        0: { CP: 2, SRD: 1 },
        1: { UX: 2, Animasi: 1 },
        2: { IoT: 2, Networking: 1 },
        3: { DMAI: 2, CP: 1 },
    },
    3: { // Q4
        0: { SRD: 2, IoT: 1 },
        1: { CyberSec: 2, SRD: 1 },
        2: { Networking: 2, IoT: 1 },
        3: { DMAI: 2, SRD: 1 },
    },
    4: { // Q5
        0: { GaMLAB: 2, CP: 1 },
        1: { Animasi: 2, UX: 1 },
        2: { IoT: 2, Networking: 1 },
        3: { UX: 2, SRD: 1 },
    },
};

const initialScores: Scores = {
    CP: 0,
    CyberSec: 0,
    Networking: 0,
    SRD: 0,
    IoT: 0,
    GaMLAB: 0,
    DMAI: 0,
    Animasi: 0,
    UX: 0,
};

const QuestionsPage = () => {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const totalQuestions = questionsData.length;
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [scores, setScores] = useState<Scores>(initialScores);
    const [mainPoints, setMainPoints] = useState<Scores>(initialScores);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        if (quizCompleted) {
            const scoresQuery = encodeURIComponent(JSON.stringify(scores));
            const mainPointsQuery = encodeURIComponent(JSON.stringify(mainPoints));
            router.push(`/quiz/result?scores=${scoresQuery}&mainPoints=${mainPointsQuery}`);
        }
    }, [quizCompleted, scores, mainPoints, router]);

    const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

    const handleNextQuestion = () => {
        if (selectedOption !== null) {
            const questionScores = scoringMap[currentQuestion][selectedOption];
            
            setScores(prevScores => {
                const newScores = { ...prevScores };
                for (const division in questionScores) {
                    const divisionKey = division as Division;
                    newScores[divisionKey] += questionScores[divisionKey]!;
                }
                return newScores;
            });

            setMainPoints(prevMainPoints => {
                const newMainPoints = { ...prevMainPoints };
                for (const division in questionScores) {
                    const divisionKey = division as Division;
                    if (questionScores[divisionKey] === 2) {
                        newMainPoints[divisionKey] += 1;
                    }
                }
                return newMainPoints;
            });

            if (currentQuestion < totalQuestions - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
            } else {
                setQuizCompleted(true);
            }
        }
    };

    if (quizCompleted) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center text-white p-6 md:p-8" style={{ backgroundImage: "url('/assets/quiz/background.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <p className="text-2xl">Menghitung hasil...</p>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-white p-6 md:p-8" role="main" style={{ backgroundImage: "url('/assets/quiz/background.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="w-full max-w-4xl">
                <div className="mb-6">
                    <p className="text-center text-sm font-semibold text-gray-300 mb-2">
                        Soal {currentQuestion + 1} dari {totalQuestions}
                    </p>
                    <div className="w-full bg-white rounded-full h-2">
                        <div
                            className="bg-red-600 h-2 rounded-full progress-bar"
                            style={{ width: `${progressPercentage}%` }}
                            aria-valuenow={progressPercentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            role="progressbar"
                        ></div>
                    </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-semibold text-center my-10">
                    {questionsData[currentQuestion].question}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {questionsData[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedOption(index)}
                            className={`
                                text-left p-5 rounded-lg border transition-all duration-200 ease-in-out
                                bg-[rgba(255,255,255,0.30)] border-radius-[8px]
                                ${selectedOption === index
                                    ? 'bg-white text-[#0F172A] font-semibold border-white ring-2 ring-white'
                                    : 'bg-[#1E293B]/60 border-[#334155] hover:bg-[#334155]'
                                }
                            `}
                            aria-pressed={selectedOption === index}
                            aria-label={`Option ${index + 1}: ${option}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button
                        className="rounded-lg bg-red-600 px-12 py-3 text-lg font-semibold text-white transition hover:bg-red-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
                        disabled={selectedOption === null}
                        onClick={handleNextQuestion}
                    >
                        Lanjut
                    </button>
                </div>
            </div>
        </main>
    );
};

export default QuestionsPage;