import type { Metadata, Viewport } from 'next';
import { Inter, Amiri } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CBT MTs Assibyan — Asesmen Sumatif Akhir Semester',
  description:
    'Sistem Computer Based Test (CBT) Madrasah Tsanawiyah Assibyan dengan Proctoring 3-Lapis dan Integrasi Rekap Nilai Google Spreadsheet',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2457D6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${amiri.variable}`}>
      <body className="min-h-screen bg-[#F5F7FB] text-[#172033] antialiased selection:bg-[#EAF0FF] selection:text-[#2457D6]">
        {children}
      </body>
    </html>
  );
}
