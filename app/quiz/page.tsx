import Image from 'next/image';
import Link from 'next/link';

const divisions = [
  { src: '/assets/divisi/ux-gama.png', alt: 'UX GAMA' },
  { src: '/assets/divisi/srd.png', alt: 'SRD' },
  { src: '/assets/divisi/as-gama.png', alt: 'AS GAMA' },
  { src: '/assets/divisi/iot-gama.png', alt: 'IOT GAMA' },
  { src: '/assets/divisi/gam-lab.png', alt: 'GAM LAB' },
  { src: '/assets/divisi/cp.png', alt: 'CP' },
  { src: '/assets/divisi/dmai.png', alt: 'DMAI' },
  { src: '/assets/divisi/animasi.png', alt: 'Animasi' },
];

export default function QuizPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0F1B3A] text-white p-8" style={{ backgroundImage: "url('/assets/quiz/background.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">MINI QUIZ</h1>
        <h2 className="text-5xl md:text-6xl font-bold text-red-600">KOMATIK</h2>
        <p className="mt-4 text-lg md:text-xl max-w-md mx-auto">
          Cari tahu divisi yang cocok untukmu dan uji pengetahuanmu seputar IT!
        </p>
      </div>

<div className="my-8 grid grid-cols-4 sm:grid-cols-8 gap-3 p-4">
  {divisions.map((division, index) => (
    <div
      key={index}
      className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-[rgba(230,235,254,0.30)] flex items-center justify-center"
    >
      <Image
        src={division.src}
        alt={division.alt}
        width={40}
        height={40}
        className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
      />
    </div>
  ))}
</div>



      <Link href="/quiz/form">
        <button className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-red-700">
          Mainkan Quiz &rarr;
        </button>
      </Link>
    </main>
  );
}