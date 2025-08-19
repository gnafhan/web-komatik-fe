export interface Prestasi {
  id: string;
  title: string;
  team_name: string;
  members: string[];
  image: string;
  year: string;
  category: string;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface PrestasiData {
  prestasi: Prestasi[];
  year_tabs: string[];
  created_at?: string | null;
  updated_at?: string | null;
}
