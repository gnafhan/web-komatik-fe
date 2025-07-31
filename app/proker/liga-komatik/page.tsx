import { ProkerHero } from "@/components/ui/ProkerHero";

export default function LigaKomatikPage() {
  const ligaKomatikSteps = [
    {
      title: "Pembukaan Pendaftaran Liga KOMATIK",
      description: "Pendaftaran terbuka bagi seluruh mahasiswa UGM yang ingin mengikuti GEMASTIK.",
    },
    {
      title: "Workshop Pengembangan Ide",
      description: "Pembekalan awal untuk menggali potensi ide yang relevan dengan cabang lomba GEMASTIK.",
    },
    {
      title: "Mentoring Brainstorm Ide",
      description: "Sesi diskusi dan pendampingan untuk memperdalam dan mematangkan ide peserta.",
    },
    {
      title: "Pelatihan Programming & Cyber Security",
      description: "Pemberian lengkap materi dan simulasi kompetisi pemrograman dan keamanan siber.",
    },
    {
      title: "Workshop Penulisan Proposal",
      description: "Workshop ini berupa pemberian materi mengenai cara penulisan proposal lomba yang benar.",
    },
    {
      title: "Pengumpulan Proposal Liga KOMATIK",
      description: "Peserta mengumpulkan proposal sebagai bentuk kesiapan awal untuk mengikuti seleksi.",
    },
    {
      title: "Seleksi Internal Programming & Cyber Security",
      description: "Menyeleksi peserta terbaik dari pemrograman dan keamanan siber untuk mewakili UGM.",
    },
    {
      title: "Pengumuman Liga KOMATIK",
      description: "Pengumuman peserta yang telah berhasil lanjut ke tahap seleksi utama, yaitu Liga KOMATIK.",
    },
  ];

  const pascaLigaSteps = [
    {
      title: "Pengumpulan Proposal",
      description: "Diperuntukkan untuk cabang lomba GEMASTIK selain Pemrograman dan Keamanan Siber.",
    },
    {
      title: "Review Proposal",
      description: "Proposal akan dinilai oleh dosen-dosen ahli yang memberikan masukan terhadap isi dan kualitas karya.",
    },
    {
      title: "Revisi Proposal",
      description: "Peserta melakukan perbaikan proposal sesuai masukan dari dosen sebelumnya untuk meningkatkan kualitas karyanya.",
    },
    {
      title: "Unggah Berkas ke GEMASTIK",
      description: "Peserta yang lolos dan karyanya disetujui akan mewakili UGM dan mengunggah berkas ke sistem GEMASTIK Kemdikbud.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <ProkerHero
          title="Program Kerja"
          description="Program kerja KOMATIK bertujuan untuk membina anggota dan menyiapkan kontingen UGM menuju GEMASTIK"
          backgroundImage="/assets/proker/background.svg"
        />

        <section className="py-8 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#081936] mb-4 md:mb-6">
                Apa itu Liga KOMATIK?
              </h2>
              <div className="w-12 md:w-16 h-0.5 bg-red-600 mx-auto mb-6 md:mb-8"></div>
            </div>
            
            <div className="bg-white rounded-2xl">
              <p
                className="text-gray-700"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  textAlign: 'left'
                }}
              >
                <span className="font-bold text-[#D80000]">Liga KOMATIK</span> adalah program seleksi internal resmi Universitas Gadjah Mada untuk 
                menentukan kontingen yang akan mewakili UGM di ajang GEMASTIK. Program ini terbuka 
                bagi seluruh mahasiswa UGM dari berbagai fakultas dan program studi. Untuk dapat mengikuti GEMASTIK, setiap calon peserta wajib mengikuti seluruh 
                rangkaian kegiatan Liga KOMATIK sebagai tahap penyaringan dan pembinaan.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4" style={{background: 'linear-gradient(113.67deg, #0C2A5E -10.22%, #081936 62.39%, #030F22 107.98%)'}}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Liga KOMATIK</h2>
              <div className="w-16 md:w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            </div>
            <p
              className="text-white/80 mb-8 md:mb-16 text-sm md:text-base"
              style={{
                opacity: 1,
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '20px',
                letterSpacing: '0%',
                textAlign: 'left'
              }}
            >
              Tahap ini merupakan tahap pembinaan awal bagi peserta sebelum memasuki seleksi utama. Pada tahap ini, peserta mengikuti berbagai kegiatan untuk mengembangkan ide, memperkuat keterampilan teknis, dan menyiapkan proposal lomba GEMASTIK. Rangkaian Kegiatan Liga KOMATIK, yaitu :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {ligaKomatikSteps.map((step, index) => (
                <div key={index} className="rounded-lg p-4 md:p-6 flex gap-4 md:gap-6 items-center" style={{background: '#E6EBFE4D'}}>
                  <div className="bg-white/20 text-white text-lg md:text-2xl font-bold rounded-md w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-white/70 text-xs md:text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p
              className="text-white/80 mt-8 md:mt-12 text-sm md:text-base"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '20px',
                letterSpacing: '0%',
                textAlign: 'left'
              }}
            >
              Di tahap ini, peserta akan mendapat pembekalan materi dan pendampingan dari mentor profesional serta alumni GEMASTIK. Hanya peserta yang lolos di tahap ini yang dapat lanjut ke tahap Pasca-Liga KOMATIK.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4" style={{backgroundImage: 'url(/assets/proker/background2.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-[#081936] mb-4">Pasca-Liga KOMATIK</h2>
              <div className="w-16 md:w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p
                className="text-gray-600 text-sm md:text-base"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  textAlign: 'left'
                }}
              >
                Tahap ini merupakan seleksi akhir sekaligus proses penyempurnaan karya sebelum dikirimkan sebagai perwakilan resmi UGM di ajang GEMASTIK. Rangkaian Kegiatan Pasca-Liga KOMATIK, yaitu :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {pascaLigaSteps.map((step, index) => (
                <div key={index} className="rounded-lg p-4 md:p-6 flex gap-4 md:gap-6 items-center" style={{background: '#F1F4FB', boxShadow: '0px 0px 8px 0px #00000040'}}>
                  <div className="text-black text-base md:text-lg font-bold rounded-md w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center" style={{background: '#CDD7FE80'}}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-[#081936] font-bold text-lg md:text-xl mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p
              className="text-gray-600 mt-8 md:mt-12 text-sm md:text-base"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '20px',
                letterSpacing: '0%',
                textAlign: 'left'
              }}
            >
              Tahap ini menjadi penentuan akhir sebelum peserta resmi didaftarkan sebagai kontingen UGM ke GEMASTIK nasional.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}