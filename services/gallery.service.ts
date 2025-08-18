import { GalleryData, Gallery } from '@/types/gallery';

function getDefaultData(): GalleryData {
  const defaultGallery: Gallery[] = [];
  
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

async function getDataFromFirebase(): Promise<GalleryData> {
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
    const collectionRef = db.collection('galeri');
    const querySnapshot = await collectionRef.get();
    
    if (querySnapshot.empty) {
      console.warn('Galeri collection is empty, returning default data');
      return getDefaultData();
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
    
    return {
      gallery: gallery,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching from Firebase:', error);
    return getDefaultData();
  }
}

export async function getGalleryData(): Promise<GalleryData> {
  try {
    if (typeof window === 'undefined') {
      return await getDataFromFirebase();
    } else {
      const response = await fetch('/api/gallery', {
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
      
      const data = await response.json() as GalleryData;
      return data;
    }
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    console.warn('Falling back to default data due to error');
    return getDefaultData();
  }
}
