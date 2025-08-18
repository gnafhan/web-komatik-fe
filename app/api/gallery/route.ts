import { NextResponse } from 'next/server';
import { GalleryData, Gallery } from '@/types/gallery';

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

function getDefaultData(): GalleryData {
  const defaultGallery: Gallery[] = [];
  
  // Generate 14 default gallery items
  for (let i = 1; i <= 14; i++) {
    defaultGallery.push({
      id: i.toString(),
      image: `/assets/Gallery/gallery-${i}.jpg`,
      position: i
    });
  }

  return {
    gallery: defaultGallery.sort((a, b) => a.position - b.position)
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
    const collectionRef = db.collection('galeri');
    const querySnapshot = await collectionRef.get();
    
    if (querySnapshot.empty) {
      console.warn('Galeri collection is empty, returning default data');
      return NextResponse.json(getDefaultData());
    }
    
    const gallery: Gallery[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Convert Firebase Timestamps to ISO strings if they exist
      if (data.created_at && typeof data.created_at === 'object' && 'toDate' in data.created_at) {
        data.created_at = data.created_at.toDate().toISOString();
      }
      if (data.updated_at && typeof data.updated_at === 'object' && 'toDate' in data.updated_at) {
        data.updated_at = data.updated_at.toDate().toISOString();
      }
      
      gallery.push({
        id: doc.id,
        image: data.image || '',
        position: data.position || 0,
        created_at: data.created_at,
        updated_at: data.updated_at
      });
    });
    
    // Sort by position
    gallery.sort((a, b) => a.position - b.position);
    
    const defaultData = getDefaultData();
    if (gallery.length < 14) {
      const existingPositions = gallery.map(item => item.position);
      
      for (let i = 1; i <= 14; i++) {
        if (!existingPositions.includes(i)) {
          const defaultItem = defaultData.gallery.find(item => item.position === i);
          if (defaultItem) {
            gallery.push(defaultItem);
          }
        }
      }
      
      gallery.sort((a, b) => a.position - b.position);
    }
    
    const result: GalleryData = {
      gallery: gallery,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    console.warn('Falling back to default data due to error');
    return NextResponse.json(getDefaultData());
  }
}
