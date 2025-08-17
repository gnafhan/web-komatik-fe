import { NextResponse } from 'next/server';
import { TentangKamiData } from '@/types/tentang-kami';

async function getFirebaseAdmin() {
  try {
    const admin = await import('firebase-admin');
    
    if (!admin.apps.length) {
      const serviceAccount = {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n')
      };

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
      });
    }

    return admin;
  } catch (error) {
    console.error('Failed to initialize Firebase Admin:', error);
    return null;
  }
}

function getDefaultData(): TentangKamiData {
  return {
    hero_title: 'Tentang Kami',
    hero_description: 'KOMATIK UGM hadir untuk membina, memfasilitasi, dan mendorong mahasiswa UGM berprestasi di bidang TIK.',
    about_title: 'Apa itu KOMATIK?',
    about_description: 'Komunitas Mahasiswa Teknologi Informasi dan Komunikasi UGM (KOMATIK UGM) adalah komunitas yang berperan sebagai wadah dari mahasiswa UGM dalam pengembangan diri di bidang TIK serta mendukung dan memfasilitasi mahasiswa UGM dalam ketertarikan mengikuti lomba IT. KOMATIK UGM merupakan komunitas lomba yang berada di bawah naungan Subdirektorat Kreativitas Mahasiswa UGM. KOMATIK UGM berdiri sejak tahun 2015 dan disahkan pada 8 Maret 2018.',
    objectives_title: 'Tujuan KOMATIK',
    objectives_description: 'KOMATIK UGM memiliki beberapa tujuan yang menjadi dasar dari seluruh aktivitas dan program yang dijalankan, antara lain:',
    objectives: [
      'Menjadi wadah berkumpul mahasiswa yang minat terhadap Teknologi Informasi dan Komunikasi',
      'Mengembangkan kreativitas dan kemampuan mahasiswa dalam bidang Teknologi Informasi dan Komunikasi',
      'Memotivasi mahasiswa untuk berperan dalam mengembangkan dunia Teknologi Informasi dan Komunikasi',
      'Memberikan kontribusi terhadap UGM dalam bentuk riset dan pencapaian'
    ],
    video_title: 'Video Profile',
    video_url: 'https://www.youtube.com/embed/lelkP0nqxzc'
  };
}

export async function GET() {
  try {
    const admin = await getFirebaseAdmin();
    
    if (!admin) {
      console.warn('Firebase Admin not available, returning default data');
      return NextResponse.json(getDefaultData());
    }

    const db = admin.firestore();
    const docRef = db.collection('tentang-kami').doc('main');
    const docSnap = await docRef.get();
    
    if (!docSnap.exists) {
      console.warn('Tentang Kami document not found, returning default data');
      return NextResponse.json(getDefaultData());
    }
    
    const data = docSnap.data() as TentangKamiData;
    
    // Handle objectives array - extract value from objects if needed
    if (data && data.objectives && Array.isArray(data.objectives)) {
      data.objectives = data.objectives.map((objective: any) => {
        // If objective is an object with a 'value' property, extract it
        if (typeof objective === 'object' && objective.value) {
          return objective.value;
        }
        // If it's already a string, return as is
        return objective;
      });
    }
    
    // Handle legacy format with individual objective fields
    if (data && !data.objectives && (data as any).objective_1) {
      const objectives: string[] = [];
      if ((data as any).objective_1) {
        const obj1 = (data as any).objective_1;
        objectives.push(typeof obj1 === 'object' && obj1.value ? obj1.value : obj1);
      }
      if ((data as any).objective_2) {
        const obj2 = (data as any).objective_2;
        objectives.push(typeof obj2 === 'object' && obj2.value ? obj2.value : obj2);
      }
      if ((data as any).objective_3) {
        const obj3 = (data as any).objective_3;
        objectives.push(typeof obj3 === 'object' && obj3.value ? obj3.value : obj3);
      }
      if ((data as any).objective_4) {
        const obj4 = (data as any).objective_4;
        objectives.push(typeof obj4 === 'object' && obj4.value ? obj4.value : obj4);
      }
      
      data.objectives = objectives;
    }
    
    // Convert Firebase Timestamps to ISO strings if they exist
    if (data.created_at && typeof data.created_at === 'object' && 'toDate' in data.created_at) {
      data.created_at = (data.created_at as any).toDate().toISOString();
    }
    if (data.updated_at && typeof data.updated_at === 'object' && 'toDate' in data.updated_at) {
      data.updated_at = (data.updated_at as any).toDate().toISOString();
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching tentang kami data:', error);
    console.warn('Falling back to default data due to error');
    return NextResponse.json(getDefaultData());
  }
}