import React from 'react';
import Link from 'next/link';

interface Nekretnina {
  id: number;
  tagovi: string;
  naslov: string;
  opis: string;
  cijena: string;
  znacajke: string[];
  href: string;
}

export default function SekcijaTri() {
  // Podaci izvučeni izravno sa slike
  const nekretnine: Nekretnina[] = [
    {
      id: 1,
      tagovi: 'PRODAJA • LUKSUZ',
      naslov: 'Moderna vila sa drvenim enterijerom',
      opis: 'Prostran dnevni boravak, prirodni materijali i mirna lokacija.',
      cijena: '€ 420.000',
      znacajke: ['320m²', '6 soba', 'Garaža'],
      href: '/nekretnine/moderna-vila',
    },
    {
      id: 2,
      tagovi: 'NAJAM • CENTAR',
      naslov: 'Elegantan apartman u centru grada',
      opis: 'Topla siva, bijela i zlatna estetika za premium ponudu.',
      cijena: '€ 1.200 / mj.',
      znacajke: ['92m²', '3 sobe', 'Balkon'],
      href: '/nekretnine/elegantan-apartman',
    },
    {
      id: 3,
      tagovi: 'INVESTICIJA • NOVO',
      naslov: 'Poslovni prostor za prestižan brend',
      opis: 'Odlična vidljivost, veliki izlog i mogućnost prilagodbe.',
      cijena: 'Po dogovoru', // Prilagođeno jer je odrezano na slici
      znacajke: ['150m²', 'Lokal', 'Parking'],
      href: '/nekretnine/poslovni-prostor',
    },
  ];

  return (
    <section className="w-full bg-[#fcf9f4] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ZAGLAVLJE SEKCIJE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-12 md:mb-16">
          <div className="md:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a] leading-tight font-normal">
              Istaknuta<br /> ponuda
            </h2>
          </div>
          <div className="md:col-span-2 md:pt-2">
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Slike su trenutno elegantni placeholderi. Kasnije samo zamijeniš
              ovaj dio svojim fotografijama.
            </p>
          </div>
        </div>

        {/* GRID KARTICA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nekretnine.map((artikal) => (
            <Link
              key={artikal.id}
              href={artikal.href}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_25px_-5px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full border border-black/[0.01]"
            >
              {/* ZLATNI ZAMUĆENI PLACEHOLDER ZA SLIKU */}
              <div 
                className="w-full h-64 sm:h-72 relative flex items-center justify-center p-6 select-none overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #c5a46e 0%, #a3824d 100%)',
                }}
              >
                {/* CSS prugasti sloj koji imitira šablon sa slike */}
                <div 
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)'
                  }}
                />
                
                {/* Tekst na placeholderu */}
                <span className="relative z-10 text-white/80 text-xs font-medium tracking-widest uppercase bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  Ovdje ubaci sliku
                </span>
              </div>

              {/* SADRŽAJ KARTICE */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                <div className="flex flex-col gap-3">
                  {/* Tagovi */}
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a46e] font-semibold">
                    {artikal.tagovi}
                  </span>

                  {/* Naslov nekretnine */}
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1a1a1a] font-normal leading-snug group-hover:text-[#c5a46e] transition-colors duration-300">
                    {artikal.naslov}
                  </h3>

                  {/* Opis */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-2">
                    {artikal.opis}
                  </p>
                </div>

                {/* Donji dio: Cijena i Značajke */}
                <div className="flex flex-col gap-4 pt-2">
                  {/* Cijena */}
                  <span className="text-xl sm:text-2xl font-serif text-[#1a1a1a] font-medium">
                    {artikal.cijena}
                  </span>

                  {/* Male pilule / Značajke nekretnine */}
                  <div className="flex flex-wrap gap-2">
                    {artikal.znacajke.map((znacajka, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#fcf9f4] border border-black/[0.04] text-gray-500 rounded-full text-[11px] font-medium"
                      >
                        {znacajka}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}