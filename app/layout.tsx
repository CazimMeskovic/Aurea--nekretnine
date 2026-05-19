import '../src/globals.css';
import { Inter } from 'next/font/google';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Košenje i održavanje zelenih površina Pecanin Gradiška',
  description:
    'Brzo, pouzdano i kvalitetno održavanje dvorišta, parkova i poslovnih prostora. Kontaktirajte nas za ponudu!',

  openGraph: {
    type: 'website',
    locale: 'bs_BA',
    url: 'https://kosenjepecanin.com/',
    siteName: 'Košenje i održavanje zelenih površina Pecanin',
    title: 'Košenje i održavanje zelenih površina Pecanin Gradiška',
    description:
      'Brzo, pouzdano i kvalitetno održavanje dvorišta, parkova i poslovnih prostora.',
    images: [
      {
        url: '/trlog.png',
        width: 1200,
        height: 630,
        alt: 'Košenje i održavanje zelenih površina Pecanin',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Košenje i održavanje zelenih površina Pecanin Gradiška',
    description:
      'Brzo, pouzdano i kvalitetno održavanje dvorišta, parkova i poslovnih prostora.',
    images: ['/trlog.png'],
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
