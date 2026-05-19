import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-start bg-[#1a1a1a] overflow-hidden">
      {/* Pozadinska slika / Gradijentni kontejner */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-right opacity-40 md:opacity-100"
        style={{
          // Zamijeni s pravom putanjom do slike nekretnine
          backgroundImage: `url('/images/hero-bg.jpg')`, 
        }}
      />
      
      {/* Slojeviti gradijent za postizanje efekta prelaza sa slike u tamnu pozadinu */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1af2] to-transparent md:block hidden" />
      <div className="absolute inset-0 z-10 bg-[#1a1a1a]/80 md:hidden block" />

      {/* Sadržaj (Zadržava grid/layout stabilnim na svim ekranima) */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 max-w-7xl w-full">
        <div className="max-w-xl lg:max-w-2xl flex flex-col gap-6 md:gap-8">
          
          {/* Nadnaslov */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#c5a46e]" />
            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Premium agencija za nekretnine
            </span>
          </div>

          {/* Glavni Naslov */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight font-light">
            Domovi koji ostavljaju{' '}
            <span className="text-[#c5a46e] italic block sm:inline font-normal">
              utisak.
            </span>
          </h1>

          {/* Opisni Tekst */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
            Elegantna prezentacija stanova, kuća, vila, poslovnih prostora i
            zemljišta. Ovdje kasnije možeš ubaciti svoje slike, logo, cijene, kontakte
            i stvarne ponude.
          </p>

          {/* CTA Gumbi */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/ponuda"
              className="px-6 py-3 bg-[#c5a46e] text-[#1a1a1a] font-medium text-sm rounded-full hover:bg-[#b3925c] transition-colors duration-300 shadow-lg text-center min-w-[160px]"
            >
              Pogledaj ponudu
            </Link>
            <Link
              href="/procjena"
              className="px-6 py-3 bg-white/10 text-white border border-white/20 font-medium text-sm rounded-full hover:bg-white/20 transition-all duration-300 text-center min-w-[160px] backdrop-blur-sm"
            >
              Zatraži procjenu
            </Link>
          </div>

          {/* Istaknuta nekretnina (Glassmorphic Card) */}
          <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl max-w-lg">
            <h3 className="text-lg font-serif text-white mb-2 font-medium">
              Istaknuta nekretnina
            </h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Ovaj blok možeš koristiti za najnoviju ili najskuplju ponudu, npr. luksuzna vila,
              penthouse ili poslovni prostor.
            </p>

            {/* Specifikacije nekretnine */}
            <div className="grid grid-cols-3 gap-3">
              {/* Površina */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center backdrop-blur-sm">
                <span className="block text-lg font-semibold text-[#c5a46e]">
                  250m²
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Površina
                </span>
              </div>

              {/* Sobe */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center backdrop-blur-sm">
                <span className="block text-lg font-semibold text-[#c5a46e]">
                  5
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Soba
                </span>
              </div>

              {/* Garaže */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center backdrop-blur-sm">
                <span className="block text-lg font-semibold text-[#c5a46e]">
                  2
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Garaže
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}