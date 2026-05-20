'use client';

import React from 'react';
import Link from 'next/link';

interface Obavjest {
  id: number;
  tag: string;
  naslov: string;
  opis: string;
  href: string;
}

export default function SekcijaPet() {
  // Podaci izvučeni izravno s kartica na slici
  const obavijesti: Obavjest[] = [
    {
      id: 1,
      tag: 'NOVA PONUDA',
      naslov: 'Uskoro luksuzni stanovi u centru',
      opis: 'Dodaj kratku najavu, lokaciju, rok useljenja ili link prema detaljima.',
      href: '/obavijesti/luksuzni-stanovi',
    },
    {
      id: 2,
      tag: 'OBAVIJEST',
      naslov: 'Besplatna početna procjena vrijednosti',
      opis: 'Ovdje možeš predstaviti uslugu procjene za vlasnike nekretnina.',
      href: '/procjena',
    },
    {
      id: 3,
      tag: 'PARTNERI',
      naslov: 'Mjesto za banke, investitore ili saradnike',
      opis: 'Dodaj logotipe partnera, certifikate ili preporuke zadovoljnih klijenata.',
      href: '/partneri',
    },
  ];

  return (
    <section className="w-full bg-[#fcf9f4] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* ================= BLOK 1: OBAVIJESTI ================= */}
        <div className="flex flex-col gap-12">
          {/* Zaglavlje podsekcije */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a] leading-tight font-normal">
                Obavijesti
              </h2>
            </div>
            <div className="md:col-span-2 md:pt-2">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                Ovdje možeš ubacivati novosti, akcije, nove objekte, promjene cijena ili
                važne informacije za klijente.
              </p>
            </div>
          </div>

          {/* Grid s karticama obavijesti */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {obavijesti.map((artikal) => (
              <Link
                key={artikal.id}
                href={artikal.href}
                className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-black/[0.01] hover:border-[#c5a46e]/20 transition-all duration-400 flex flex-col gap-4 min-h-[220px]"
              >
                {/* Zlatni tag iznad naslova */}
                <span className="text-[10px] uppercase tracking-widest text-[#c5a46e] font-semibold">
                  {artikal.tag}
                </span>

                {/* Naslov obavijesti */}
                <h3 className="text-xl font-serif text-[#1a1a1a] font-normal leading-snug group-hover:text-[#c5a46e] transition-colors duration-300">
                  {artikal.naslov}
                </h3>

                {/* Opisni tekst */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light mt-auto">
                  {artikal.opis}
                </p>
              </Link>
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
}