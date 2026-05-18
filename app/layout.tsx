import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import CursorGlow from '@/components/effects/CursorGlow';
import LoadingScreen from '@/components/effects/LoadingScreen';
import PageTransition from '@/components/effects/PageTransition';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const display = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Glide Education — We Shape Your Future',
  description:
    'Expert guidance for admissions to top universities in India and overseas. Online, distance and vocational programs across Engineering, Medical, Management, Law, Education and Pharmacy.',
  keywords: [
    'Glide Education',
    'admissions',
    'online education',
    'distance education',
    'vocational courses',
    'university admissions',
    'B.Tech',
    'MBBS',
    'MBA',
    'MCA',
    'LLB',
    'B.Pharm',
  ],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-ice text-ink antialiased">
        <LoadingScreen />
        <CursorGlow />
        <div className="pointer-events-none fixed inset-0 -z-10 noise-texture" />
        <Navbar />
        <PageTransition>
          <main className="relative">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
