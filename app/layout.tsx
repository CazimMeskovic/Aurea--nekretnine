import '../src/globals.css';
import { Inter } from 'next/font/google';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Premium nekretnine i luksuzni stanovi | AUTRA Nekretnine',
  description: 'Profesionalna prezentacija, prodaja i najam stanova, kuća, vila i poslovnih prostora. Diskretan, siguran i elegantan pristup za privatne i poslovne klijente.',

  openGraph: {
    type: 'website',
    locale: 'bs_BA',
    url: 'https://autra-nekretnine.ba/', // Zamijeni sa stvarnom domenom ako bude drugačija
    siteName: 'AUTRA Nekretnine',
    title: 'Premium nekretnine i luksuzni stanovi | AUTRA Nekretnine',
    description: 'Profesionalna prezentacija, prodaja i najam stanova, kuća, vila i poslovnih prostora u BiH.',
    images: [
      {
        url: '/og-image.png', // Tvoja OpenGraph slika u public mapi (npr. logo ili slika vile)
        width: 1200,
        height: 630,
        alt: 'AUTRA Premium Nekretnine',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Premium nekretnine i luksuzni stanovi | AUTRA Nekretnine',
    description: 'Profesionalna prezentacija, prodaja i najam stanova, kuća, vila i poslovnih prostora.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        <Header />
        
        <main className="flex-1 flex flex-col ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
