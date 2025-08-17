import type { Metadata, Viewport } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import AosInit from "@/components/AosInit";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KOMATIK UGM - Komunitas Mahasiswa TIK UGM",
  description: "KOMATIK UGM adalah komunitas mahasiswa TIK UGM yang membina dan memfasilitasi mahasiswa untuk mengembangkan diri lewat divisi teknis, program kerja, dan lomba.",
  keywords: ["KOMATIK", "UGM", "TIK", "komunitas", "mahasiswa", "teknologi", "informasi", "komputer"],
  authors: [{ name: "KOMATIK UGM" }],
  creator: "KOMATIK UGM",
  publisher: "KOMATIK UGM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KOMATIK UGM - Komunitas Mahasiswa TIK UGM",
    description: "KOMATIK UGM adalah komunitas mahasiswa TIK UGM yang membina dan memfasilitasi mahasiswa untuk mengembangkan diri lewat divisi teknis, program kerja, dan lomba.",
    url: "https://www.komatikugm.com/",
    siteName: "KOMATIK UGM",
    images: [
      {
        url: "/assets/home/gemastik.jpg",
        width: 1200,
        height: 630,
        alt: "KOMATIK UGM",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOMATIK UGM - Komunitas Mahasiswa TIK UGM",
    description: "KOMATIK UGM adalah komunitas mahasiswa TIK UGM yang membina dan memfasilitasi mahasiswa untuk mengembangkan diri lewat divisi teknis, program kerja, dan lomba.",
    images: ["/assets/home/gemastik.jpg"],
  },
  alternates: {
    canonical: "https://www.komatikugm.com/",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Allow user zoom for accessibility
  minimumScale: 1,
  maximumScale: 10,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
      >
        <AosInit />
        {children}
      </body>
    </html>
  );
}
