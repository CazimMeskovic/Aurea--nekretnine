/* import Image from "next/image";

const services = [
  {
    title: 'Košenje trave',
    desc: 'Profesionalno košenje trave za privatne i poslovne površine.',
    img: '/t1.jpg',
  },
  {
    title: 'Održavanje dvorišta',
    desc: 'Redovno održavanje dvorišta, uklanjanje korova i otpada.',
    img: '/t2.jpg',
  },
  {
    title: 'Uređenje vrtova i parkova',
    desc: 'Kreativno uređenje vrtova i parkova po vašim željama.',
    img: '/t3.jpg',
  },
  {
    title: 'Rezidba drveća i živice',
    desc: 'Stručno orezivanje drveća i živice za zdrav rast.',
    img: '/t4.jpg',
  },
  {
    title: 'Čišćenje i odvoz otpada',
    desc: 'Uklanjanje i odvoz zelenog otpada sa vašeg posjeda.',
    img: '/t5.jpg',
  },
  {
    title: 'Sezonsko održavanje',
    desc: 'Priprema i održavanje zelenih površina tokom svih sezona.',
    img: '/t6.jpg',
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Naše usluge</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center">
              <Image src={service.img} alt={service.title} width={400} height={128} className="h-32 w-full object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Services() {
  // Stanja za formu (po želji možeš povezati na backend/filtere)
  const [lokacija, setLokacija] = useState('Sarajevo / BiH');
  const [tip, setTip] = useState('Stan, kuća, vila');
  const [cijena, setCijena] = useState('Po dogovoru');
  const [status, setStatus] = useState('Prodaja / Najam');

  // Podaci za kategorije nekretnina
  const kategorije = [
    {
      naslov: 'Stanovi',
      opis: 'Novogradnja, luksuzni apartmani i gradski stanovi.',
      href: '/nekretnine?tip=stanovi',
      // Ikona: kućica/krov (minimalistička)
      ikona: (
        <div className="w-5 h-5 border-2 border-[#c5a46e] rounded-sm relative mt-1">
          <div className="absolute -top-2 -left-1 -right-1 h-2 border-t-2 border-l-2 border-[#c5a46e] rotate-45" />
        </div>
      ),
    },
    {
      naslov: 'Kuće',
      opis: 'Porodične kuće, vile i rezidencije sa dvorištem.',
      href: '/nekretnine?tip=kuce',
      // Ikona: romb (diamond)
      ikona: <div className="w-4 h-4 border-2 border-[#c5a46e] rotate-45" />,
    },
    {
      naslov: 'Poslovni prostori',
      opis: 'Uredi, lokali, saloni i komercijalni objekti.',
      href: '/nekretnine?tip=poslovni-prostori',
      // Ikona: grid / prozori
      ikona: (
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
          <div className="border border-[#c5a46e]" />
          <div className="border border-[#c5a46e]" />
          <div className="border border-[#c5a46e]" />
          <div className="border border-[#c5a46e]" />
        </div>
      ),
    },
    {
      naslov: 'Zemljišta',
      opis: 'Placevi, građevinska zemljišta i investicione lokacije.',
      href: '/nekretnine?tip=zemljista',
      // Ikona: krug
      ikona: <div className="w-4 h-4 rounded-full border-2 border-[#c5a46e]" />,
    },
  ];

  return (
    <section className="w-full bg-[#fcf9f4] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. BLOK: FORMA ZA PRETRAGU (Gornji bijeli kontejner) */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-black/[0.03] -mt-28 md:-mt-36 relative z-30 mb-20 md:mb-28">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Lokacija */}
            <div className="bg-[#fcf9f4]/60 border border-black/[0.04] rounded-2xl p-4 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-1">
                Lokacija
              </span>
              <input
                type="text"
                value={lokacija}
                onChange={(e) => setLokacija(e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-800 focus:outline-none w-full font-serif"
              />
            </div>

            {/* Tip */}
            <div className="bg-[#fcf9f4]/60 border border-black/[0.04] rounded-2xl p-4 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-1">
                Tip
              </span>
              <input
                type="text"
                value={tip}
                onChange={(e) => setTip(e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-800 focus:outline-none w-full font-serif"
              />
            </div>

            {/* Cijena */}
            <div className="bg-[#fcf9f4]/60 border border-black/[0.04] rounded-2xl p-4 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-1">
                Cijena
              </span>
              <input
                type="text"
                value={cijena}
                onChange={(e) => setCijena(e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-800 focus:outline-none w-full font-serif"
              />
            </div>

            {/* Status */}
            <div className="bg-[#fcf9f4]/60 border border-black/[0.04] rounded-2xl p-4 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-1">
                Status
              </span>
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-800 focus:outline-none w-full font-serif"
              />
            </div>

            {/* Dugme Pretraga - rasteže se preko cijele širine na dnu forme */}
            <div className="lg:col-span-4 mt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#1a1a1a] text-[#c5a46e] hover:text-white rounded-full text-xs uppercase tracking-widest font-semibold transition-colors duration-300 shadow-md"
              >
                Pretraga
              </button>
            </div>
          </form>
        </div>

        {/* 2. BLOK: VRSTE NEKRETNINA (Naslov i tekst) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a] leading-tight font-normal">
              Vrste<br className="hidden md:block" /> nekretnina
            </h2>
          </div>
          <div className="md:col-span-2 md:pt-2">
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Dodaj ili izbriši kategorije prema svojoj ponudi. Svaka kartica može
              voditi na posebnu stranicu ili filter.
            </p>
          </div>
        </div>

        {/* 3. BLOK: GRID KARTICA (Kategorije) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {kategorije.map((kat) => (
            <Link
              key={kat.naslov}
              href={kat.href}
              className="group block p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#fbf8f2] to-[#f5f0e6] border border-black/[0.02] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:border-[#c5a46e]/20 transition-all duration-300"
            >
              {/* Ikona s tamnom zaobljenom pozadinom */}
              <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center shadow-lg mb-8 group-hover:scale-105 transition-transform duration-300">
                {kat.ikona}
              </div>

              {/* Naslov kategorije */}
              <h3 className="text-xl sm:text-2xl font-serif text-[#1a1a1a] mb-3 font-normal group-hover:text-[#c5a46e] transition-colors duration-300">
                {kat.naslov}
              </h3>

              {/* Opis */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                {kat.opis}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}