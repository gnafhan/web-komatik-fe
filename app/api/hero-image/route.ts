import { NextResponse } from 'next/server';
import { HeroImageData, HeroImage } from '@/types/hero-image';

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

function getDefaultData(): HeroImageData {
  const defaultHeroImages: HeroImage[] = [];
  
  // Use existing images from public assets instead of non-existent hero images
  const fallbackImages = [
    '/assets/home/gemastik.jpg',
    '/assets/home/bg_side.png',
    '/assets/home/robot_tentangkami.png',
    '/assets/home/mascot-prestasi.png',
    '/assets/home/bg_side_tentangkami_left.png'
  ];
  
  for (let i = 0; i < 5; i++) {
    defaultHeroImages.push({
      id: (i + 1).toString(),
      image: fallbackImages[i] || '/assets/home/gemastik.jpg',
      position: i + 1
    });
  }

  return {
    heroImages: defaultHeroImages.sort((a, b) => a.position - b.position)
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
    const collectionRef = db.collection('hero-image');
    const querySnapshot = await collectionRef.get();
    
    console.log('Firebase query result:', querySnapshot.size, 'documents found');
    
    if (querySnapshot.empty) {
      console.warn('Hero-image collection is empty, returning default data');
      return NextResponse.json(getDefaultData());
    }
    
    const heroImages: HeroImage[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log('Firebase document data:', doc.id, data);
      
      if (data.created_at && typeof data.created_at === 'object' && 'toDate' in data.created_at) {
        data.created_at = data.created_at.toDate().toISOString();
      }
      if (data.updated_at && typeof data.updated_at === 'object' && 'toDate' in data.updated_at) {
        data.updated_at = data.updated_at.toDate().toISOString();
      }
      
      heroImages.push({
        id: doc.id,
        image: data.image || '',
        position: data.position || 0,
        created_at: data.created_at,
        updated_at: data.updated_at
      });
    });
    
    console.log('Processed hero images:', heroImages);
    
    heroImages.sort((a, b) => a.position - b.position);
    
    const defaultData = getDefaultData();
    if (heroImages.length < 5) {
      const existingPositions = heroImages.map(item => item.position);
      
      for (let i = 1; i <= 5; i++) {
        if (!existingPositions.includes(i)) {
          const defaultItem = defaultData.heroImages.find(item => item.position === i);
          if (defaultItem) {
            heroImages.push(defaultItem);
          }
        }
      }
      
      heroImages.sort((a, b) => a.position - b.position);
    }
    
    const result: HeroImageData = {
      heroImages: heroImages,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching hero image data:', error);
    console.warn('Falling back to default data due to error');
    return NextResponse.json(getDefaultData());
  }
}
