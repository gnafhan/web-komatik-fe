import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
  description: "KOMATIK UGM adalah komunitas mahasiswa TIK UGM yang bertujuan untuk membantu mahasiswa TIK UGM dalam mengembangkan diri dan membantu mahasiswa TIK UGM dalam mengembangkan diri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="KOMATIK UGM adalah komunitas mahasiswa TIK UGM yang bertujuan untuk membantu mahasiswa TIK UGM dalam mengembangkan diri dan membantu mahasiswa TIK UGM dalam mengembangkan diri" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
