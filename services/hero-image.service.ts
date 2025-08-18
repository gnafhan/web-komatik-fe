import { HeroImageData, HeroImage } from '@/types/hero-image';

function getDefaultData(): HeroImageData {
  const defaultHeroImages: HeroImage[] = [];
  
  for (let i = 1; i <= 5; i++) {
    defaultHeroImages.push({
      id: i.toString(),
      image: `/assets/home/hero-${i}.jpg`,
      position: i
    });
  }

  return {
    heroImages: defaultHeroImages.sort((a, b) => a.position - b.position)
  };
}

async function getDataFromFirebase(): Promise<HeroImageData> {
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
    const collectionRef = db.collection('hero-image');
    const querySnapshot = await collectionRef.get();
    
    if (querySnapshot.empty) {
      console.warn('Hero-image collection is empty, returning default data');
      return getDefaultData();
    }
    
    const heroImages: HeroImage[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
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
    
    return result;
  } catch (error) {
    console.error('Error fetching hero image data:', error);
    console.warn('Falling back to default data due to error');
    return getDefaultData();
  }
}

export default async function getHeroImageData(): Promise<HeroImageData> {
  try {
    return await getDataFromFirebase();
  } catch (error) {
    console.error('Hero image service error:', error);
    return getDefaultData();
  }
}
