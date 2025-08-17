'use client'

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ProkerHero } from '@/components/ui/ProkerHero';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Reveal({
  children,
  delay = 0,
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

export default function PendampinganGemastikPage() {
  const competitionBranches = [
    { title: 'Kompetisi I', line1: 'Pemrograman', line2: '(Programming)' },
    { title: 'Kompetisi II', line1: 'Keamanan Siber', line2: '(Cyber Security)' },
    { title: 'Kompetisi III', line1: 'Penambangan Data', line2: '(Data Mining)' },
    { title: 'Kompetisi IV', line1: 'Desain Pengalaman', line2: 'Pengguna (UX Design)' },
    { title: 'Kompetisi V', line1: 'Animasi', line2: '(Animation)' },
    { title: 'Kompetisi VI', line1: 'Kota Cerdas', line2: '(Smart City)' },
    { title: 'Kompetisi VII', line1: 'Karya Tulis Ilmiah TIK', line2: '(ICT Scientific Paper)' },
    { title: 'Kompetisi VIII', line1: 'Pengembangan Perangkat', line2: 'Lunak' },
    { title: 'Kompetisi IX', line1: 'Piranti Cerdas, Sistem', line2: 'Benam & IoT' },
    { title: 'Kompetisi X', line1: 'Pengembangan Aplikasi', line2: 'Permainan' },
    { title: 'Kompetisi XI', line1: 'Pengembangan Bisnis', line2: 'TIK' },
  ];

  const generalRequirements = [
    <>Perguruan Tinggi peserta adalah perguruan tinggi di lingkungan Kementerian Pendidikan Tinggi, Sains, dan Teknologi yang terdaftar pada laman PDDIKTI (<a href="https://pddikti.kemdikti.go.id/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-words">https://pddikti.kemdikti.go.id/</a>)</>,
    <>Peserta adalah mahasiswa aktif jenjang program sarjana dan diploma yang terdaftar pada perguruan tinggi dan pada laman PDDIKTI (<a href="https://pddikti.kemdikti.go.id/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-words">https://pddikti.kemdikti.go.id/</a>) pada saat dilakukan pendaftaran tim peserta hingga pelaksanaan babak final dan pengumuman pemenang.</>,
    'Setiap 1 (satu) tim peserta terdiri dari maksimum 3 (tiga) orang mahasiswa (satu orang ketua dan dua orang anggota).',
    'Setiap Perguruan Tinggi dibatasi mengirimkan paling banyak 10 (sepuluh) tim untuk setiap cabang kompetisi pada babak penyisihan berdasarkan seleksi internal perguruan tinggi dan paling banyak 3 (tiga) tim sebagai finalis berdasarkan penilaian dewan juri pada babak penyisihan.',
    'Peserta bukan merupakan salah satu personel tim yang telah memperoleh medali emas pada cabang kompetisi yang sama di GEMASTIK tahun-tahun sebelumnya.',
    'Penulisan nama mahasiswa peserta wajib menggunakan nama lengkap tanpa disingkat sesuai dengan yang terdaftar pada laman PDDIKTI.',
    'Peserta wajib mengikuti seluruh jadwal dan aturan ketentuan kompetisi sesuai buku pedoman dan/atau pengumuman resmi yang diterbitkan oleh panitia penyelenggara.',
    'Untuk kompetisi berbasis karya kreasi atau inovasi, konten karya yang diikutsertakan tidak diperkenankan mengandung unsur SARA (suku, agama, ras, dan antar golongan), radikalisme, asusila, dan plagiarisme.',
    'Konten karya yang pernah memenangkan kejuaraan pada kompetisi tingkat nasional atau internasional dapat diikutsertakan dalam GEMASTIK apabila terdapat bobot pengembangan minimal 50% (lima puluh persen). Pernyataan yang memuat penjelasan perbedaan antara keduanya, yang bila dikuantifikasikan lebih dari 50%).',
    'Jika konten karya yang diajukan ke kompetisi GEMASTIK atau kompetisi internasional lainnya pada saat yang sama sampai pada babak final, maka peserta wajib memilih salah satu kompetisi saja dan wajib menginformasikan ke panitia penyelenggara GEMASTIK. Pelanggaran terhadap ketentuan ini akan menyebabkan sanksi berupa diskualifikasi.',
    <>Tim finalis kompetisi IV s.d. X wajib mengunggah laporan akhir dan makalah 4-5 halaman menggunakan template IEEE yang dapat diunduh dari menu Download pada tautan <a href="https://gemastik18.telkomuniversity.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-words">https://gemastik18.telkomuniversity.ac.id</a> dan dilengkapi hasil uji periksa similaritas (Turnitin, iThenticate, lainnya), maksimal dengan indeks similaritas 25%. </>,
    'Karya para finalis kompetisi IV s.d. XI telah didaftarkan dalam bentuk surat pencatatan ciptaan dari DJKI Kemkum RI. Para finalis kompetisi IV s.d. XI bertanggung jawab penuh atas konsekuensi originalitas dan hak cipta hasil karyanya. Pelanggaran terhadap ketentuan ini akan menyebabkan sanksi berupa diskualifikasi.',
    'Tim peserta yang dinyatakan lolos babak penyisihan diwajibkan mengumpulkan video profil 60 detik (profil tim untuk kompetisi IIII, dan profil karya untuk kompetisi IV-XI) dengan mendaftarkan link YouTube pada aplikasi pendaftaran ulang untuk konfirmasi keikutsertaan pada babak final. Pada saat dibacakan pengumuman pemenang dalam upacara penutupan akan ditayangkan video profil dari tim finalis yang dinyatakan sebagai juara 1, juara 2, juara 3, dan juara harapan.',
  ];

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <ProkerHero
          title="Program Kerja"
          description="Program kerja KOMATIK bertujuan untuk membina anggota dan menyiapkan kontingen UGM menuju GEMASTIK"
          backgroundImage="/assets/proker/background.svg"
        />
      </motion.div>

      <section className="py-8 md:py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <div className="text-center mb-8 md:mb-12">
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#081936] mb-2 md:mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              >
                Apa itu GEMASTIK?
              </motion.h2>
              <motion.div
                className="w-12 md:w-16 h-0.5 bg-red-600 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
                style={{ transformOrigin: 'left center' }}
              />
            </div>

            <motion.div
              className="bg-white rounded-xl md:rounded-2xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <motion.p
                className="text-gray-700 leading-relaxed text-justify text-sm md:text-base lg:text-lg break-words"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.05 }}
              >
                <span className="font-bold text-[#D80000]">GEMASTIK</span> atau Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi Tahun 2025 dilaksanakan oleh Direktorat Pembelajaran dan Kemahasiswaan (Dit. Belmawa), Direktorat Jenderal Pendidikan Tinggi (Ditjen Dikti), Kementerian Pendidikan Tinggi, Sains, dan Teknologi (Kemendiktisaintek). Program ini ditujukan untuk meningkatkan kompetensi mahasiswa Indonesia, sehingga mampu mengambil peran sebagai agen perubahan dalam memajukan TIK dan pemanfaatannya, baik ketika masih dalam masa studi maupun kelak sesudah lulus studi. Pada tahun ini GEMASTIK digelar untuk ke-18 kalinya dengan tema "Pengembangan TIK untuk Mendukung Kemandirian Bangsa". Kemandirian bangsa yang dimaksud bisa meliputi dan tidak terbatas pada bidang: swasembada pangan, energi, air, ekonomi kreatif, ekonomi hijau dan ekonomi biru.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed text-justify mt-3 md:mt-4 text-sm md:text-base lg:text-lg break-words"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.12 }}
              >
                Kegiatan kompetisi dalam <span className="font-bold text-[#D80000]">GEMASTIK XVIII</span> dilaksanakan dalam 2 (dua) babak kompetisi untuk semua cabang kompetisi, yaitu <span className="font-bold text-[#D80000]">Babak Penyisihan</span> dan <span className="font-bold text-[#D80000]">Babak Final</span>. Babak Penyisihan wajib diikuti oleh seluruh tim peserta pada setiap cabang kompetisi. Babak Final diikuti oleh para peserta yang dinyatakan lolos pada pengumuman Babak Penyisihan sebagai tim finalis masing-masing cabang kompetisi. Babak Penyisihan dilaksanakan secara daring penuh, dan Babak Final dilaksanakan secara kombinasi luring dan daring dengan penyelenggaraan sesuai yang dijelaskan pada penjelasan umum dan aturan pelaksanaan masing-masing cabang kompetisi.
              </motion.p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section
        className="py-8 md:py-12 lg:py-16 px-4"
        style={{ background: 'linear-gradient(113.67deg, #0C2A5E -10.22%, #081936 62.39%, #030F22 107.98%)' }}
      >
        <div className="container mx-auto max-w-[55vw]">
          <div className="text-center mb-8 md:mb-12">
            <Reveal>
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              >
                Cabang Lomba
              </motion.h2>
              <motion.div
                className="w-12 md:w-16 h-0.5 bg-red-600 mx-auto mb-6 md:mb-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
                style={{ transformOrigin: 'left center' }}
              />
              <motion.p
                className="text-white text-sm md:text-base lg:text-lg px-4 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              >
                GEMASTIK XVIII menggelar 11 cabang kompetisi dalam bidang TIK (Teknologi Informasi dan Komunikasi), baik dengan format pertandingan maupun kompetisi karya, yaitu meliputi:
              </motion.p>
            </Reveal>
          </div>

          <Reveal>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full max-w-6xl mx-auto"
            >
              <div className="flex flex-wrap justify-center -m-2 lg:-m-3">
                {competitionBranches.map((branch, index) => (
                  <div key={index} className="w-1/2 lg:w-1/3 p-2 lg:p-3">
                    <motion.div
                      variants={item}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className="p-4 md:p-6 rounded-lg text-white flex flex-col text-left min-w-0 h-full"
                      style={{ backgroundColor: '#E6EBFE4D' }}
                    >
                      <h3 className="text-lg md:text-xl font-bold mb-2 break-words">{branch.title}</h3>
                      <div className="w-full h-px bg-gray-500 my-2" />
                      <p className="text-sm md:text-base break-words">
                        {branch.line1}
                        {branch.line2 && <br />}
                        {branch.line2}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-12 lg:py-16 px-4" style={{ backgroundImage: "url('/assets/proker/background2.svg')" }}>
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <div className="text-center mb-8 md:mb-12">
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#081936] mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              >
                Persyaratan Umum
              </motion.h2>
              <motion.div
                className="w-12 md:w-16 h-0.5 bg-red-600 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
                style={{ transformOrigin: 'left center' }}
              />
            </div>

            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              {generalRequirements.map((req, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -3 }}
                  className="flex items-start p-3 md:p-4 rounded-lg shadow gap-2 md:gap-3 mb-3 md:mb-4"
                  style={{ background: '#F1F4FB' }}
                >
                  <motion.div
                    className="flex-shrink-0 font-bold text-[#081936] text-center text-sm md:text-base min-w-[40px] w-[40px] h-[40px] md:min-w-[50px] md:w-[50px] md:h-[50px] leading-[40px] md:leading-[50px] rounded-[8px] md:rounded-[10px]"
                    style={{ background: '#CDD7FE80' }}
                    initial={{ rotate: -6 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                  >
                    {index + 1}
                  </motion.div>
                  <p className="text-gray-700 text-sm md:text-base lg:text-lg break-words flex-1 min-w-0">{req}</p>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
