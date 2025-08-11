// Kategori Pengurus
export const pengurusCategories = [
  { id: "ph", label: "PH", active: true },
  { id: "manajerial", label: "Manajerial", active: false },
  { id: "teknis", label: "Teknis", active: false },
];

// Tahun Pengurus
export const pengurusPeriods = [
  { year: "2024/2025", active: true },
  { year: "2023/2024", active: false },
];

// Data pengurus
export const pengurusData = {
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
};
