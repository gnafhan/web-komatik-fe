export interface Division {
  id?: string;
  name: string;
  description: string;
  image?: string;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface DivisionsData {
  divisions: Division[];
  created_at?: string | null;
  updated_at?: string | null;
}
