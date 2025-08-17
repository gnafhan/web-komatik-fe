"use client";
import React, { useState } from 'react';


const QuestionsPage = () => {
    const question = "Apa yang dimaksud dengan machine learning dalam bidang kecerdasan buatan?";
    const options = [
        "Sistem yang dapat belajar dari data tanpa diprogram secara eksplisit",
        "Algoritma untuk mempercepat koneksi internet",
        "Perangkat keras khusus untuk mengolah grafis",
        "Metode untuk menyimpan data di cloud"
    ];
    const currentQuestion = 1;
    const totalQuestions = 10;
    const progressPercentage = (currentQuestion / totalQuestions) * 100;
    const [selectedOption, setSelectedOption] = useState<number | null>(null);


    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-white p-6 md:p-8" role="main" style={{ backgroundImage: "url('/assets/quiz/background.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="w-full max-w-4xl">
                <div className="mb-6">
                    <p className="text-center text-sm font-semibold text-gray-300 mb-2">
                        Soal {currentQuestion} dari {totalQuestions}
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
                    {question}
                </h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedOption(index)}
                            className={`
                                text-left p-5 rounded-lg border transition-all duration-200 ease-in-out
                                bg-[rgba(255,255,255,0.30)] border-radius-[8px]
                                ${selectedOption === index
                                    ? 'bg-white text-[#0F172A] font-semibold border-white ring-2 ring-white' // Gaya saat dipilih
                                    : 'bg-[#1E293B]/60 border-[#334155] hover:bg-[#334155]' // Gaya default
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
                        className="rounded-lg bg-red-600 px-12 py-3 text-lg font-semibold text-white transition hover:bg-red-700"
                        disabled={selectedOption === null}
                        onClick={() => {
                            if (selectedOption !== null) {
                                window.location.href = '/quiz/result';
                            }
                        }}
                    >
                        Lanjut
                    </button>
                </div>
            </div>
        </main>
    );
};

export default QuestionsPage;