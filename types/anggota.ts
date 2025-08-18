import { Timestamp } from "firebase/firestore";

export interface PengurusMember {
    id: string;
  name: string;
  email: string;
  phone: string;
  student_id: string;
  photo_url: string;
  photo_filename?: string;
  bio: string;
  period: string;
  position: string;
  category: 'ph' | 'manajerial' | 'teknis';
  groupName: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}