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
                          name: "Muhammad Ernestiyo Guevara",
                          image: "/assets/pengurus/Ernest.png"
                      }
                  ]
              },
              {
                  groupName: "Wakil Ketua",
                  members: [
                      {
                          id: 2,
                          position: "Wakil Ketua 1",
                          name: "Salman Faiz Hidayat",
                          image: "/assets/pengurus/FaizWakil.png"
                      },
                      {
                          id: 3,
                          position: "Wakil Ketua 2",
                          name: "Nadzira Azhani Farahiya",
                          image: "/assets/pengurus/Nafa.png"
                      }
                  ]
              },
              {
                  groupName: "Kegiatan",
                  members: [
                      {
                          id: 4,
                          position: "Ketua Kegiatan",
                          name: "Abdul Halim Edi Rahmansyah",
                          image: "/assets/pengurus/Halim.png"
                      },
                      {
                          id: 5,
                          position: "Wakil Ketua Kegiatan",
                          name: "Dyah Lintang Izza Salma",
                          image: "/assets/pengurus/DyahLintang.png"
                      }
                  ]
              },
              {
                  groupName: "Sekretaris & Bendahara",
                  members: [
                      {
                          id: 6,
                          position: "Sekretaris 1",
                          name: "Zhazha Nurani",
                          image: "/assets/pengurus/Zhazha.png"
                      },
                      {
                          id: 7,
                          position: "Sekretaris 2",
                          name: "Dias Lintang Prabowo",
                          image: "/assets/pengurus/lintang.png"
                      },
                      {
                          id: 8,
                          position: "Bendahara 1",
                          name: "Muhammad Fariz",
                          image: "/assets/pengurus/Fariz.png"
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
                          name: "Muhamad Robbi Firmansyah",
                          image: "/assets/pengurus/Robbi.png"
                      },
                      {
                          id: 2,
                          position: "Wakadiv Medinfo 1",
                          name: "Reza Luthfi Akbar",
                          image: "/assets/pengurus/Reza.png"
                      },
                      {
                          id: 3,
                          position: "Wakadiv Medinfo 2",
                          name: "Mulia Christian Gomgom P Simanjuntak",
                          image: "/assets/pengurus/Mul.png"
                      }
                  ]
              },
              {
                  groupName: "Hubungan Masyarakat",
                  members: [
                      {
                          id: 4,
                          position: "Kadiv Humas",
                          name: "Nino Auliya Nahara",
                          image: "/assets/pengurus/Nino.png"
                      },
                      {
                          id: 5,
                          position: "Wakadiv Humas 1",
                          name: "M. Mustafa Fagan",
                          image: "/assets/pengurus/Fagan.png"
                      },
                      {
                          id: 6,
                          position: "Wakadiv Humas 2",
                          name: "Govan Dwi Aditya",
                          image: "/assets/pengurus/Govan.png"
                      }
                  ]
              },
              {
                  groupName: "Kesekretariatan",
                  members: [
                      {
                          id: 7,
                          position: "Kadiv Kesekretariatan",
                          name: "Rr. Garzetta Aleyda Harimurti",
                          image: "/assets/pengurus/Zetta KSK 1.png"
                      },
                      {
                          id: 8,
                          position: "Wakadiv Kesekretariatan",
                          name: "Keefani Mentari Ingprairie",
                          image: "/assets/pengurus/Keefani KSK 1.png"
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
                          name: "Ivan Adito Arba Putra",
                          image: "/assets/pengurus/Ivan ASGama 1.png"
                      },
                      {
                          id: 2,
                          position: "Wakadiv ASGama 1",
                          name: "I Putu Herjuna Manasye Suarthana",
                          image: "/assets/pengurus/Nasye ASGama 1.png"
                      },
                      {
                          id: 3,
                          position: "Wakadiv ASGama 2",
                          name: "Satria Rezqi Maulana",
                          image: "/assets/pengurus/Rezqi ASGama 1.png"
                      }
                  ]
              },
              {
                  groupName: "Software Research and Development",
                  members: [
                      {
                          id: 4,
                          position: "Kadiv SRD",
                          name: "Ghifari Nafhan Muhammad Zhafarizza",
                          image: "/assets/pengurus/Nafhan SRD 1.png"
                      },
                      {
                          id: 5,
                          position: "Wakadiv SRD 1",
                          name: "Muhammad Irfan Valerian",
                          image: "/assets/pengurus/Irfan SRD 1.png"
                      },
                      {
                          id: 6,
                          position: "Wakadiv SRD 2",
                          name: "Zuhdi Ardi",
                          image: "/assets/pengurus/Zuhdi SRD 1.png"
                      }
                  ]
              },
              {
                  groupName: "Internet of Things",
                  members: [
                      {
                          id: 7,
                          position: "Kadiv IoT Gama",
                          name: "Ali Ar Ramadhani",
                          image: "/assets/pengurus/ALI.png"
                      },
                      {
                          id: 8,
                          position: "Wakadiv IoT Gama 1",
                          name: "Arya Ghilman Winarto",
                          image: "/assets/pengurus/Arya.png"
                      }
                  ]
              },
              {
                  groupName: "Game Development",
                  members: [
                      {
                          id: 10,
                          position: "Kadiv GAMLAB",
                          name: "Deandra Santoso",
                          image: "/assets/pengurus/Dea GaM-LAB 1.png"
                      },
                      {
                          id: 11,
                          position: "Wakadiv GAMLAB 1",
                          name: "Poernomo Maulana Rofif Aqilla",
                          image: "/assets/pengurus/Rofi.png"
                      },
                      {
                          id: 12,
                          position: "Wakadiv GAMLAB 2",
                          name: "Naufal Salman Mulyadi",
                          image: "/assets/pengurus/Salman GaM-LAB 1.png"
                      }
                  ]
              },
              {
                  groupName: "User Experience",
                  members: [
                      {
                          id: 13,
                          position: "Kadiv UX Gama",
                          name: "Ahmad Luthfi Abdillah",
                          image: "/assets/pengurus/Luthfi.png"
                      },
                      {
                          id: 14,
                          position: "Wakadiv UX Gama 1",
                          name: "Ken Bima Satria Gandasasmita",
                          image: "/assets/pengurus/Ken.png"
                      },
                      {
                          id: 15,
                          position: "Wakadiv UX Gama 2",
                          name: "Daffa Maulana Danendra",
                          image: "/assets/pengurus/Dafa.png"
                      }
                  ]
              },
              {
                  groupName: "Data Mining and Artificial Intelligence",
                  members: [
                      {
                          id: 16,
                          position: "Kadiv DMAI",
                          name: "Dwi Anggara Najwan Sugama",
                          image: "/assets/pengurus/Dwi.png"
                      },
                      {
                          id: 17,
                          position: "Wakadiv DMAI 1",
                          name: "Rifky Setiawan",
                          image: "/assets/pengurus/Rifky.png"
                      },
                      {
                          id: 18,
                          position: "Wakadiv DMAI 2",
                          name: "Adam Maulana Haq",
                          image: "/assets/pengurus/Adam.png"
                      }
                  ]
              },
              {
                  groupName: "Animasi",
                  members: [
                      {
                          id: 19,
                          position: "Kadiv Animasi",
                          name: "Novia Azka Salsabila",
                          image: "/assets/pengurus/Azka Animasi 1.png"
                      },
                      {
                          id: 20,
                          position: "Wakadiv Animasi",
                          name: "Irene Talitha Tyas Raharjo",
                          image: "/assets/pengurus/Irene Animasi 1.png"
                      }
                  ]
              },
              {
                  groupName: "Competitive Programming",
                  members: [
                      {
                          id: 21,
                          position: "Kadiv CP",
                          name: "Kamaluddin Arsyad Fadllillah",
                          image: "/assets/pengurus/Arsyad.png"
                      },
                      {
                          id: 22,
                          position: "Wakadiv CP",
                          name: "Dimal Karim Ahmad",
                          image: "/assets/pengurus/Dimal.png"
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
  if (process.env.NEXT_PUBLIC_IS_PRESTASI_FROM_SERVER === "false" || !process.env.NEXT_PUBLIC_IS_PRESTASI_FROM_SERVER) {
  return getDefaultData();
  }
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
