/* export default function Footer() {
  return (
    <footer className="mt-auto bg-green-700 text-white py-6 w-full ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <span className="font-semibold">&copy; {new Date().getFullYear()} Trava. Sva prava zadržana.</span>
        <span className="mt-2 md:mt-0">Izrada: Profesionalni tim Trava</span>
      </div>
    </footer>
  );
}
 */

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const trenutnaGodina = new Date().getFullYear();

  // Istih 5 linkova iz Headera radi konzistentnosti navigacije
  const brziLinkovi = [
    { name: 'Početna', href: '/' },
    { name: 'O nama', href: '/o-nama' },
    { name: 'Usluge', href: '/usluge' },
    { name: 'Nekretnine', href: '/nekretnine' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  // Kategorije iz Sekcije Dva
  const uslugeKategorije = [
    { name: 'Stanovi', href: '/nekretnine?tip=stanovi' },
    { name: 'Kuće', href: '/nekretnine?tip=kuce' },
    { name: 'Poslovni prostori', href: '/nekretnine?tip=poslovni-prostori' },
    { name: 'Zemljišta', href: '/nekretnine?tip=zemljista' },
  ];

  return (
    <footer className="w-full bg-[#1a1a1a] text-white border-t border-[#c5a46e]/20 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* GLAVNI RASPODJEL (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          
          {/* 1. KOLONA: Brending i Kratki Opis (Iz Headera i O Agenciji) */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-full border border-[#c5a46e] flex items-center justify-center bg-[#2a2a2a]">
                <span className="font-serif text-[#c5a46e] text-base font-bold tracking-wider">A</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-white text-lg font-bold tracking-widest leading-none">AUTRA</span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-gray-400 font-medium mt-1">Nekretnine</span>
              </div>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light max-w-sm">
              Premium agencija za nekretnine posvećena diskretnom, sigurnom i elegantnom pristupu prodaji i najmu ekskluzivnih objekata.
            </p>
          </div>

          {/* 2. KOLONA: Brzi Linkovi (Navigacija) */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-[#c5a46e] text-sm uppercase tracking-wider font-medium">
              Navigacija
            </h4>
            <ul className="flex flex-col gap-2.5">
              {brziLinkovi.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-xs sm:text-sm font-light hover:text-[#c5a46e] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. KOLONA: Vrste nekretnina (Iz Sekcije Dva) */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-[#c5a46e] text-sm uppercase tracking-wider font-medium">
              Ponuda
            </h4>
            <ul className="flex flex-col gap-2.5">
              {uslugeKategorije.map((kat) => (
                <li key={kat.name}>
                  <Link 
                    href={kat.href}
                    className="text-gray-400 text-xs sm:text-sm font-light hover:text-[#c5a46e] transition-colors duration-200"
                  >
                    {kat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. KOLONA: Kontakt informacije (Iz Kontakt sekcije) */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-[#c5a46e] text-sm uppercase tracking-wider font-medium">
              Kontakt info
            </h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-xs sm:text-sm font-light">
              <li className="flex flex-col gap-0.5">
                <span className="text-gray-500 text-[10px] uppercase tracking-wider">Adresa</span>
                <span>Ulica i broj, Grad, BiH</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-gray-500 text-[10px] uppercase tracking-wider">Telefon</span>
                <a href="tel:+38700000000" className="hover:text-[#c5a46e] transition-colors">
                  +387 00 000 000
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-gray-500 text-[10px] uppercase tracking-wider">Email</span>
                <a href="mailto:info@autra-nekretnine.ba" className="hover:text-[#c5a46e] transition-colors">
                  info@autra-nekretnine.ba
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* DONJI DIO: Copyright i Pravne Informacije */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-[11px] text-gray-500 font-light">
          <div>
            &copy; {trenutnaGodina} <span className="font-serif font-normal text-gray-400">AUTRA Nekretnine</span>. Sva prava zadržana.
          </div>
          <div className="flex gap-6">
            <Link href="/pravila-privatnosti" className="hover:text-[#c5a46e] transition-colors">
              Pravila privatnosti
            </Link>
            <Link href="/uslovi-koristenja" className="hover:text-[#c5a46e] transition-colors">
              Uslovi korištenja
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}