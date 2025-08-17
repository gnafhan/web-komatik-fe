import React from "react";

const FormPage = () => {
  const score = 8;
  const total = 10;

  return (
    <div className="min-h-screen flex items-center justify-center text-center font-sans bg-[linear-gradient(117deg,_#0C2A5E_-13.2%,_#081936_45.72%,_#030F22_111.75%)] p-4">
      <div className="w-full max-w-lg md:max-w-4xl p-8 md:p-12 rounded-[60px] border-[5px] border-white/50 bg-[linear-gradient(117deg,_rgba(255,255,255,0.40)_-1.37%,_rgba(79,77,77,0.06)_113.39%)] shadow-[0_36px_49px_-15px_#040A2D,0_1px_24px_-1px_rgba(0,0,0,0.10)] backdrop-blur-[25px]">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] uppercase ">
            QUIZ SELESAI!
          </h1>

          <img
            src="/assets/home/robot_tentangkami.png"
            alt="Robot Tentang Kami"
            className="mx-auto my-6 w-36 h-36 object-contain"
          />

          <p className="text-slate-200/80 text-base md:text-lg">Kerja Bagus!</p>

          <div className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
            {score}
            <span className="opacity-80">/{total}</span>
          </div>

          <button
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-2.5 text-white font-semibold shadow-[0_8px_24px_-10px_rgba(220,38,38,0.8)] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Selesai
          </button>
        </div>
      </div>
  );
};

export default FormPage;
