export interface HeroImage {
  id: string;
  image: string;
  position: number;
  created_at?: string;
  updated_at?: string;
}

export interface HeroImageData {
  heroImages: HeroImage[];
  created_at?: string;
  updated_at?: string;
}
