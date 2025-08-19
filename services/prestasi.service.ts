import { PrestasiData, Prestasi } from '@/types/prestasi';

function getDefaultData(): PrestasiData {
  return {
    prestasi: [
      {
        id: '1',
        title: 'Juara 1 Kompetisi OWWI Cyber Security Capture The Flag (Sekolah Tinggi Teknologi Adisutjipto (STTA) Yogyakarta - 11 April 2019)',
        team_name: 'PNG',
        members: ['Tim PNG'],
        image: '/assets/prestasi/dummy.png',
        year: '2019',
        category: 'Cyber Security'
      },
      {
        id: '2',
        title: 'Juara 2 Kompetisi OWWI Cyber Security Capture The Flag (Sekolah Tinggi Teknologi Adisutjipto (STTA) Yogyakarta - 11 April 2019)',
        team_name: 'Mbuh',
        members: ['Tim Mbuh'],
        image: '/assets/prestasi/dummy.png',
        year: '2019',
        category: 'Cyber Security'
      },
      {
        id: '3',
        title: 'Juara 1 Gemastik XVI - Keamanan Siber',
        team_name: 'apanii',
        members: ['Tim apanii'],
        image: '/assets/prestasi/dummy.png',
        year: '2023',
        category: 'Keamanan Siber'
      },
      {
        id: '4',
        title: 'Juara 2 Gemastik XVII - Piranti Cerdas, Sistem Benam & IoT',
        team_name: 'GAMAPALA',
        members: ['Tim GAMAPALA'],
        image: '/assets/prestasi/dummy.png',
        year: '2024',
        category: 'IoT'
      },
      {
        id: '5',
        title: 'Juara 3 Gemastik XVII - Pemrograman',
        team_name: 'GMAC',
        members: ['Tim GMAC'],
        image: '/assets/prestasi/dummy.png',
        year: '2024',
        category: 'Pemrograman'
      }
    ],
    year_tabs: ['2024', '2023', '2021', '2020', '2019']
  };
}

async function getDataFromFirebase(): Promise<PrestasiData> {
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
    const collectionRef = db.collection('prestasi');
    const querySnapshot = await collectionRef.get();
    
    if (querySnapshot.empty) {
      console.warn('Prestasi collection is empty, returning default data');
      return getDefaultData();
    }
    
    const prestasi: Prestasi[] = [];
    const yearsSet = new Set<string>();
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Convert Firebase Timestamps to ISO strings if they exist
      if (data.created_at && typeof data.created_at === 'object' && 'toDate' in data.created_at) {
        data.created_at = data.created_at.toDate().toISOString();
      }
      if (data.updated_at && typeof data.updated_at === 'object' && 'toDate' in data.updated_at) {
        data.updated_at = data.updated_at.toDate().toISOString();
      }
      
      // Handle members array - ensure it's always an array
      let members = data.members || [];
      if (typeof members === 'string') {
        members = [members];
      } else if (!Array.isArray(members)) {
        members = [];
      }
      
      const prestasiItem: Prestasi = {
        id: doc.id,
        title: data.title || '',
        team_name: data.team_name || '',
        members: members,
        image: data.image || '/assets/prestasi/dummy.png',
        year: data.year || '',
        category: data.category || '',
        created_at: data.created_at,
        updated_at: data.updated_at
      };
      
      prestasi.push(prestasiItem);
      
      // Collect unique years
      if (prestasiItem.year) {
        yearsSet.add(prestasiItem.year);
      }
    });
    
    // Sort years in descending order
    const yearTabs = Array.from(yearsSet).sort((a, b) => parseInt(b) - parseInt(a));
    
    return {
      prestasi: prestasi,
      year_tabs: yearTabs,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching from Firebase:', error);
    return getDefaultData();
  }
}

export async function getPrestasiData(): Promise<PrestasiData> {
  try {
    if (typeof window === 'undefined') {
      return await getDataFromFirebase();
    } else {
      const response = await fetch('/api/prestasi', {
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
      
      const data = await response.json() as PrestasiData;
      return data;
    }
  } catch (error) {
    console.error('Error fetching prestasi data:', error);
    console.warn('Falling back to default data due to error');
    return getDefaultData();
  }
}
