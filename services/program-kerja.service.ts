import { ProgramKerjaData, ProgramKerja } from '@/types/program-kerja';

function getDefaultData(): ProgramKerjaData {
  return {
    program_kerja: [
      {
        id: '1',
        nama: 'Learning Session',
        deskripsi: 'Sesi pembelajaran untuk mengembangkan kemampuan teknis mahasiswa dalam berbagai bidang teknologi informasi',
        image: '/assets/home/gemastik.jpg',
        category: 'education'
      },
      {
        id: '2',
        nama: 'Liga KOMATIK',
        deskripsi: 'Kompetisi internal untuk mempersiapkan mahasiswa menghadapi lomba-lomba teknologi tingkat nasional',
        image: '/assets/home/gemastik.jpg',
        category: 'competition'
      },
      {
        id: '3',
        nama: 'Pendampingan GEMASTIK',
        deskripsi: 'Program pendampingan intensif untuk persiapan mengikuti Pagelaran Mahasiswa Nasional bidang TIK (GEMASTIK)',
        image: '/assets/home/gemastik.jpg',
        category: 'mentoring'
      }
    ]
  };
}

async function getDataFromFirebase(): Promise<ProgramKerjaData> {
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

    const db = admin.firestore();
    const collectionRef = db.collection('program-kerja');
    const querySnapshot = await collectionRef.get();
    
    if (querySnapshot.empty) {
      console.warn('Program Kerja collection is empty, returning default data');
      return getDefaultData();
    }
    
    const programKerja: ProgramKerja[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Convert Firebase Timestamps to ISO strings if they exist
      if (data.created_at && typeof data.created_at === 'object' && 'toDate' in data.created_at) {
        data.created_at = data.created_at.toDate().toISOString();
      }
      if (data.updated_at && typeof data.updated_at === 'object' && 'toDate' in data.updated_at) {
        data.updated_at = data.updated_at.toDate().toISOString();
      }
      
      programKerja.push({
        id: doc.id,
        nama: data.nama || '',
        deskripsi: data.deskripsi || '',
        image: data.image || '/assets/home/gemastik.jpg',
        category: data.category || 'general',
        created_at: data.created_at,
        updated_at: data.updated_at
      });
    });
    
    return {
      program_kerja: programKerja,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching from Firebase:', error);
    return getDefaultData();
  }
}

export async function getProgramKerjaData(): Promise<ProgramKerjaData> {
  try {
    if (typeof window === 'undefined') {
      return await getDataFromFirebase();
    } else {
      const response = await fetch('/api/program-kerja', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      });
      
      if (!response.ok) {
        console.warn('API request failed, falling back to default data');
        return getDefaultData();
      }
      
      const data = await response.json() as ProgramKerjaData;
      return data;
    }
  } catch (error) {
    console.error('Error fetching program kerja data:', error);
    console.warn('Falling back to default data due to error');
    return getDefaultData();
  }
}
