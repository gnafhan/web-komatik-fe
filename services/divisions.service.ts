import { DivisionsData, Division } from '@/types/divisions';

function getDefaultData(): DivisionsData {
  return {
    divisions: [
      {
        id: '1',
        name: 'Animasi',
        description: 'Divisi yang berfokus pada pembuatan konten animasi dan motion graphics',
        image: '/assets/divisi/animasi.png'
      },
      {
        id: '2',
        name: 'Competitive Programming',
        description: 'Divisi yang berfokus pada algoritma dan competitive programming',
        image: '/assets/divisi/cp.png'
      },
      {
        id: '3',
        name: 'Data Mining and AI',
        description: 'Divisi yang berfokus pada data science, machine learning, dan artificial intelligence',
        image: '/assets/divisi/dmai.png'
      },
      {
        id: '4',
        name: 'Game Lab',
        description: 'Divisi yang berfokus pada pengembangan game dan game design',
        image: '/assets/divisi/gam-lab.png'
      },
      {
        id: '5',
        name: 'Internet of Things',
        description: 'Divisi yang berfokus pada pengembangan IoT dan embedded systems',
        image: '/assets/divisi/iot-gama.png'
      },
      {
        id: '6',
        name: 'Software Research Development',
        description: 'Divisi yang berfokus pada pengembangan software dan aplikasi',
        image: '/assets/divisi/srd.png'
      },
      {
        id: '7',
        name: 'UX GAMA',
        description: 'Divisi yang berfokus pada user interface dan user experience design',
        image: '/assets/divisi/ux-gama.png'
      },
      {
        id: '8',
        name: 'ASGama',
        description: 'Divisi yang berfokus pada pengembangan website dan aplikasi web',
        image: '/assets/divisi/as-gama.png'
      }
    ]
  };
}

async function getDataFromFirebase(): Promise<DivisionsData> {
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
    const collectionRef = db.collection('divisions');
    const querySnapshot = await collectionRef.get();
    
    if (querySnapshot.empty) {
      console.warn('Divisions collection is empty, returning default data');
      return getDefaultData();
    }
    
    const divisions: Division[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Convert Firebase Timestamps to ISO strings if they exist
      if (data.created_at && typeof data.created_at === 'object' && 'toDate' in data.created_at) {
        data.created_at = data.created_at.toDate().toISOString();
      }
      if (data.updated_at && typeof data.updated_at === 'object' && 'toDate' in data.updated_at) {
        data.updated_at = data.updated_at.toDate().toISOString();
      }
      
      divisions.push({
        id: doc.id,
        name: data.name || '',
        description: data.description || '',
        image: data.image || '/assets/divisi/default.png',
        created_at: data.created_at,
        updated_at: data.updated_at
      });
    });
    
    return {
      divisions: divisions,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching from Firebase:', error);
    return getDefaultData();
  }
}

export async function getDivisionsData(): Promise<DivisionsData> {
  try {
    if (typeof window === 'undefined') {
      return await getDataFromFirebase();
    } else {
      const response = await fetch('/api/divisions', {
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
      
      const data = await response.json() as DivisionsData;
      return data;
    }
  } catch (error) {
    console.error('Error fetching divisions data:', error);
    console.warn('Falling back to default data due to error');
    return getDefaultData();
  }
}
