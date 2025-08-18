import { PengurusMember } from "@/types/anggota";
import admin, { ServiceAccount } from "firebase-admin";

type RawPengurus = {
  id: string;
  name: string;
  position: string;
  groupName: string;
  category: string;
  period: string;
  photo_url?: string;
};

const serviceAccount: ServiceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
};

const databaseURL = `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;

export function getFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL,
      storageBucket,
    });
  }
  return admin;
}

const firebaseAdmin = getFirebaseAdmin();

const db = firebaseAdmin.firestore();

function getDefaultData() {
    return {
          "2024/2025": {
            ph: [
              {
                groupName: "Ketua",
                members: [
                  {
                    id: 1,
                    position: "Ketua",
                    name: "Muhammad Ernastyo Guevara",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Wakil Ketua",
                members: [
                  {
                    id: 2,
                    position: "Wakil Ketua 1",
                    name: "Faiz",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 3,
                    position: "Wakil Ketua 2",
                    name: "Nafa",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Kegiatan",
                members: [
                  {
                    id: 4,
                    position: "Ketua Kegiatan",
                    name: "Halim",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 5,
                    position: "Wakil Ketua Kegiatan",
                    name: "Lintang",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Sekretaris & Bendahara",
                members: [
                  {
                    id: 6,
                    position: "Sekretaris 1",
                    name: "Zhaza",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 7,
                    position: "Sekretaris 2",
                    name: "Lintang",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 8,
                    position: "Bendahara 1",
                    name: "Fariz",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              }
            ],
            manajerial: [
              {
                groupName: "Media dan Informasi",
                members: [
                  {
                    id: 1,
                    position: "Kadiv Medinfo",
                    name: "Robbi",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 2,
                    position: "Wakadiv Medinfo 1",
                    name: "Reza",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 3,
                    position: "Wakadiv Medinfo 2",
                    name: "Mul",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Hubungan Masyarakat",
                members: [
                  {
                    id: 4,
                    position: "Kadiv Humas",
                    name: "Nino",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 5,
                    position: "Wakadiv Humas 1",
                    name: "Fagan",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 6,
                    position: "Wakadiv Humas 2",
                    name: "Govan",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Kesekretariatan",
                members: [
                  {
                    id: 7,
                    position: "Kadiv Kesekretariatan",
                    name: "Garzetta",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 8,
                    position: "Wakadiv Kesekretariatan",
                    name: "Keefani",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              }
            ],
            teknis: [
              {
                groupName: "Aliansi Siber",
                members: [
                  {
                    id: 1,
                    position: "Kadiv ASGama",
                    name: "Ivan",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 2,
                    position: "Wakadiv ASGama 1",
                    name: "Manasye",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 3,
                    position: "Wakadiv ASGama 2",
                    name: "Rezqi",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Software Research and Development",
                members: [
                  {
                    id: 4,
                    position: "Kadiv SRD",
                    name: "Nathan",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 5,
                    position: "Wakadiv SRD 1",
                    name: "Irfan",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 6,
                    position: "Wakadiv SRD 2",
                    name: "Zuhdi",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Internet of Things",
                members: [
                  {
                    id: 7,
                    position: "Kadiv IoT Gama",
                    name: "Vytis",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 8,
                    position: "Wakadiv IoT Gama 1",
                    name: "Arya",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 9,
                    position: "Wakadiv IoT Gama 2",
                    name: "Ali",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Game Development",
                members: [
                  {
                    id: 10,
                    position: "Kadiv GAMLAB",
                    name: "Deandra",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 11,
                    position: "Wakadiv GAMLAB 1",
                    name: "Rofi",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 12,
                    position: "Wakadiv GAMLAB 2",
                    name: "Salman",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "User Experience",
                members: [
                  {
                    id: 13,
                    position: "Kadiv UX Gama",
                    name: "Luthfi",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 14,
                    position: "Wakadiv UX Gama 1",
                    name: "Ken Bima",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 15,
                    position: "Wakadiv UX Gama 2",
                    name: "Daffa Maulana Danendra",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Data Mining and Artificial Intelligence",
                members: [
                  {
                    id: 16,
                    position: "Kadiv DMAI",
                    name: "Dwi Anggara",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 17,
                    position: "Wakadiv DMAI 1",
                    name: "Rifky Setiawan",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 18,
                    position: "Wakadiv DMAI 2",
                    name: "Adam",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Animasi",
                members: [
                  {
                    id: 19,
                    position: "Kadiv Animasi",
                    name: "Azka",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 20,
                    position: "Wakadiv Animasi",
                    name: "Irene",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              },
              {
                groupName: "Competitive Programming",
                members: [
                  {
                    id: 21,
                    position: "Kadiv CP",
                    name: "Arsyad",
                    image: "/assets/pengurus/placeholder.svg"
                  },
                  {
                    id: 22,
                    position: "Wakadiv CP",
                    name: "Dimal",
                    image: "/assets/pengurus/placeholder.svg"
                  }
                ]
              }
            ]
          }
        
    }
}

function transformPengurus(rawData: RawPengurus[]) {
  const result: any = {};

  rawData.forEach((item, index) => {
    const { period, category, groupName } = item;

    if (!result[period]) {
      result[period] = { ph: [], manajerial: [], teknis: [] };
    }

    let group = result[period][category].find(
      (g: any) => g.groupName === groupName
    );

    if (!group) {
      group = { groupName, members: [] };
      result[period][category].push(group);
    }

    group.members.push({
      id: index + 1,
      position: item.position,
      name: item.name,
      image: item.photo_url || "/assets/pengurus/placeholder.svg",
    });
  });
  return result;
}

export async function getAnggotaData() {
  try {
    const membersRef = db.collection("members");
    const snapshot = await membersRef.orderBy("created_at", "desc").get();
    if (snapshot.empty) {
      console.warn("No members found, returning empty data");
      return getDefaultData();
    }
    let members = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        created_at: data.created_at?.toDate?.().toISOString() || null,
        updated_at: data.updated_at?.toDate?.().toISOString() || null,
      } as PengurusMember;
    });
    const finalData  = transformPengurus(members as unknown as RawPengurus[]);
    return finalData
  } catch (error) {
    console.error("Error fetching anggota data:", error);
    return [];
  }
}
