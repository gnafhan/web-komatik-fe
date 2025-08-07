export const ApaItuKomatik = () => {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              Apa itu KOMATIK?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-red-600"></div>
            </h2>
          </div>

          {/* Description */}
          <div className="text-base md:text-lg text-gray-700 space-y-6">
            <p>
              Komunitas Mahasiswa Teknologi Informasi dan Komunikasi UGM (
              <span className="text-red-600 font-semibold">KOMATIK UGM</span>
              ) adalah komunitas yang berperan sebagai wadah dari mahasiswa UGM dalam pengembangan diri di
              bidang TIK serta mendukung dan memfasilitasi mahasiswa UGM dalam ketertarikan mengikuti
              lomba IT. <span className="text-red-600 font-semibold">KOMATIK UGM</span> merupakan komunitas lomba yang berada di bawah naungan
              Subdirektorat Kreativitas Mahasiswa UGM. KOMATIK UGM berdiri <span className="font-semibold">sejak tahun 2015</span> dan
              disahkan pada <span className="font-semibold">8 Maret 2018</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};