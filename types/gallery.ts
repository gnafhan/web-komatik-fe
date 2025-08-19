export interface Gallery {
  id: string;
  image: string;
  position: number;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface GalleryData {
  gallery: Gallery[];
  created_at?: string | null;
  updated_at?: string | null;
}
