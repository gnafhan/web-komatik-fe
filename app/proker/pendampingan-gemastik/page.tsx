import { ProkerHero } from "@/components/ui/ProkerHero";

export default function PendampinganGemastikPage() {
  const competitionBranches = [
    {
      title: "Kompetisi I",
      line1: "Pemrograman",
      line2: "(Programming)",
    },
    {
      title: "Kompetisi II",
      line1: "Keamanan Siber",
      line2: "(Cyber Security)",
    },
    {
      title: "Kompetisi III",
      line1: "Penambangan Data",
      line2: "(Data Mining)",
    },
    {
      title: "Kompetisi IV",
      line1: "Desain Pengalaman",
      line2: "Pengguna (UX Design)",
    },
    {
      title: "Kompetisi V",
      line1: "Animasi",
      line2: "(Animation)",
    },
    {
      title: "Kompetisi VI",
      line1: "Kota Cerdas",
      line2: "(Smart City)",
    },
    {
      title: "Kompetisi VII",
      line1: "Karya Tulis Ilmiah TIK",
      line2: "(ICT Scientific Paper)",
    },
    {
      title: "Kompetisi VIII",
      line1: "Pengembangan Perangkat",
      line2: "Lunak",
    },
    {
      title: "Kompetisi IX",
      line1: "Piranti Cerdas, Sistem",
      line2: "Benam & IoT",
    },
    {
      title: "Kompetisi X",
      line1: "Pengembangan Aplikasi",
      line2: "Permainan",
    },
    {
      title: "Kompetisi XI",
      line1: "Pengembangan Bisnis",
      line2: "TIK",
    },
  ];

  const firstNineBranches = competitionBranches.slice(0, 9);
  const lastTwoBranches = competitionBranches.slice(9);

  const generalRequirements = [
    <>Perguruan Tinggi peserta adalah perguruan tinggi di lingkungan Kementerian Pendidikan Tinggi, Sains, dan Teknologi yang terdaftar pada laman PDDIKTI (<a href="https://pddikti.kemdikti.go.id/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://pddikti.kemdikti.go.id/</a>)</>,
    <>Peserta adalah mahasiswa aktif jenjang program sarjana dan diploma yang terdaftar pada perguruan tinggi dan pada laman PDDIKTI (<a href="https://pddikti.kemdikti.go.id/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://pddikti.kemdikti.go.id/</a>) pada saat dilakukan pendaftaran tim peserta hingga pelaksanaan babak final dan pengumuman pemenang.</>,
    "Setiap 1 (satu) tim peserta terdiri dari maksimum 3 (tiga) orang mahasiswa (satu orang ketua dan dua orang anggota).",
    "Setiap Perguruan Tinggi dibatasi mengirimkan paling banyak 10 (sepuluh) tim untuk setiap cabang kompetisi pada babak penyisihan berdasarkan seleksi internal perguruan tinggi dan paling banyak 3 (tiga) tim sebagai finalis berdasarkan penilaian dewan juri pada babak penyisihan.",
    "Peserta bukan merupakan salah satu personel tim yang telah memperoleh medali emas pada cabang kompetisi yang sama di GEMASTIK tahun-tahun sebelumnya.",
    "Penulisan nama mahasiswa peserta wajib menggunakan nama lengkap tanpa disingkat sesuai dengan yang terdaftar pada laman PDDIKTI.",
    "Peserta wajib mengikuti seluruh jadwal dan aturan ketentuan kompetisi sesuai buku pedoman dan/atau pengumuman resmi yang diterbitkan oleh panitia penyelenggara.",
    "Untuk kompetisi berbasis karya kreasi atau inovasi, konten karya yang diikutsertakan tidak diperkenankan mengandung unsur SARA (suku, agama, ras, dan antar golongan), radikalisme, asusila, dan plagiarisme.",
    "Konten karya yang pernah memenangkan kejuaraan pada kompetisi tingkat nasional atau internasional dapat diikutsertakan dalam GEMASTIK apabila terdapat bobot pengembangan minimal 50% (lima puluh persen). Pernyataan yang memuat penjelasan perbedaan antara keduanya, yang bila dikuantifikasikan lebih dari 50%).",
    "Jika konten karya yang diajukan ke kompetisi GEMASTIK atau kompetisi internasional lainnya pada saat yang sama sampai pada babak final, maka peserta wajib memilih salah satu kompetisi saja dan wajib menginformasikan ke panitia penyelenggara GEMASTIK. Pelanggaran terhadap ketentuan ini akan menyebabkan sanksi berupa diskualifikasi.",
    <>Tim finalis kompetisi IV s.d. X wajib mengunggah laporan akhir dan makalah 4-5 halaman menggunakan template IEEE yang dapat diunduh dari menu Download pada tautan <a href="https://gemastik18.telkomuniversity.ac.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://gemastik18.telkomuniversity.ac.id</a> dan dilengkapi hasil uji periksa similaritas (Turnitin, iThenticate, lainnya), maksimal dengan indeks similaritas 25%.</>,
    "Karya para finalis kompetisi IV s.d. XI telah didaftarkan dalam bentuk surat pencatatan ciptaan dari DJKI Kemkum RI. Para finalis kompetisi IV s.d. XI bertanggung jawab penuh atas konsekuensi originalitas dan hak cipta hasil karyanya. Pelanggaran terhadap ketentuan ini akan menyebabkan sanksi berupa diskualifikasi.",
    "Tim peserta yang dinyatakan lolos babak penyisihan diwajibkan mengumpulkan video profil 60 detik (profil tim untuk kompetisi IIII, dan profil karya untuk kompetisi IV-XI) dengan mendaftarkan link YouTube pada aplikasi pendaftaran ulang untuk konfirmasi keikutsertaan pada babak final. Pada saat dibacakan pengumuman pemenang dalam upacara penutupan akan ditayangkan video profil dari tim finalis yang dinyatakan sebagai juara 1, juara 2, juara 3, dan juara harapan.",
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProkerHero
        title="Program Kerja"
        description="Program kerja KOMATIK bertujuan untuk membina anggota dan menyiapkan kontingen UGM menuju GEMASTIK"
        backgroundImage="/assets/proker/background.svg"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#081936] mb-6">
              Apa itu GEMASTIK?
            </h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white rounded-2xl">
            <p className="text-gray-700 leading-relaxed text-justify">
              <span className="font-bold text-[#D80000]">GEMASTIK</span> atau Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi Tahun 2025 dilaksanakan oleh Direktorat Pembelajaran dan Kemahasiswaan (Dit. Belmawa), Direktorat Jenderal Pendidikan Tinggi (Ditjen Dikti), Kementerian Pendidikan Tinggi, Sains, dan Teknologi (Kemendiktisaintek). Program ini ditujukan untuk meningkatkan kompetensi mahasiswa Indonesia, sehingga mampu mengambil peran sebagai agen perubahan dalam memajukan TIK dan pemanfaatannya, baik ketika masih dalam masa studi maupun kelak sesudah lulus studi. Pada tahun ini GEMASTIK digelar untuk ke-18 kalinya dengan tema "Pengembangan TIK untuk Mendukung Kemandirian Bangsa". Kemandirian bangsa yang dimaksud bisa meliputi dan tidak terbatas pada bidang: swasembada pangan, energi, air, ekonomi kreatif, ekonomi hijau dan ekonomi biru.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify mt-4">
              Kegiatan kompetisi dalam <span className="font-bold text-[#D80000]">GEMASTIK XVIII</span> dilaksanakan dalam 2 (dua) babak kompetisi untuk semua cabang kompetisi, yaitu <span className="font-bold text-[#D80000]">Babak Penyisihan</span> dan <span className="font-bold text-[#D80000]">Babak Final</span>. Babak Penyisihan wajib diikuti oleh seluruh tim peserta pada setiap cabang kompetisi. Babak Final diikuti oleh para peserta yang dinyatakan lolos pada pengumuman Babak Penyisihan sebagai tim finalis masing-masing cabang kompetisi. Babak Penyisihan dilaksanakan secara daring penuh, dan Babak Final dilaksanakan secara kombinasi luring dan daring dengan penyelenggaraan sesuai yang dijelaskan pada penjelasan umum dan aturan pelaksanaan masing-masing cabang kompetisi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{background: 'linear-gradient(113.67deg, #0C2A5E -10.22%, #081936 62.39%, #030F22 107.98%)'}}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Cabang Lomba
            </h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mb-8"></div>
            <p className="text-white max-w-3xl mx-auto">
              GEMASTIK XVIII menggelar 11 cabang kompetisi dalam bidang TIK (Teknologi Informasi dan Komunikasi), baik dengan format pertandingan maupun kompetisi karya, yaitu meliputi:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firstNineBranches.map((branch, index) => (
              <div key={index} className="p-6 rounded-lg text-white flex flex-col text-left" style={{backgroundColor: '#E6EBFE4D'}}>
                <h3 className="text-xl font-bold mb-2">{branch.title}</h3>
                <div className="w-full h-px bg-gray-500 my-2"></div>
                <p>
                  {branch.line1}
                  {branch.line2 && <br />}
                  {branch.line2}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-8">
            {lastTwoBranches.map((branch, index) => (
              <div key={index} className="p-6 rounded-lg text-white flex flex-col text-left lg:w-[32%] md:w-[48%] w-full" style={{backgroundColor: '#E6EBFE4D'}}>
                <h3 className="text-xl font-bold mb-2">{branch.title}</h3>
                <div className="w-full h-px bg-gray-500 my-2"></div>
                <p>
                  {branch.line1}
                  {branch.line2 && <br />}
                  {branch.line2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundImage: "url('/assets/proker/background2.svg')" }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#081936] mb-6">
              Persyaratan Umum
            </h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mb-8"></div>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {generalRequirements.map((req, index) => (
              <div key={index} className="flex items-center p-4 rounded-lg shadow" style={{background: '#F1F4FB'}}>
                <div className="flex-shrink-0 font-bold text-[#081936] text-center" style={{background: '#CDD7FE80', width: '50px', height: '50px', lineHeight: '50px', borderRadius: '10px', marginRight: '8px', opacity: 1}}>
                  {index + 1}
                </div>
                <p className="text-gray-700">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}