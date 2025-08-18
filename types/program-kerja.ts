export interface ProgramKerja {
  id?: string;
  nama: string;
  deskripsi: string;
  image: string;
  category?: string;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ProgramKerjaData {
  program_kerja: ProgramKerja[];
  created_at?: string | null;
  updated_at?: string | null;
}
