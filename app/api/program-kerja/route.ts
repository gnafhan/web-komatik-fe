import { NextResponse } from 'next/server';
import { ProgramKerjaData, ProgramKerja } from '@/types/program-kerja';

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

export async function GET() {
  try {
    const admin = await getFirebaseAdmin();
    
    if (!admin) {
      console.warn('Firebase Admin not available, returning default data');
      return NextResponse.json(getDefaultData());
    }

    const db = admin.firestore();
    const collectionRef = db.collection('program-kerja');
    const querySnapshot = await collectionRef.get();
    
    if (querySnapshot.empty) {
      console.warn('Program Kerja collection is empty, returning default data');
      return NextResponse.json(getDefaultData());
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
    
    const result: ProgramKerjaData = {
      program_kerja: programKerja,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching program kerja data:', error);
    console.warn('Falling back to default data due to error');
    return NextResponse.json(getDefaultData());
  }
}
