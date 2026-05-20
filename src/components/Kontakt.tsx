'use client';

import React, { useState } from 'react';

export default function Kontakt() {
  // Stanja za formu
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [interes, setInteres] = useState('kupovina');
  const [poruka, setPoruka] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ovdje ide tvoja logika za slanje (npr. API ruta prema Supabase ili email servisu)
    console.log({ ime, email, interes, poruka });
  };

  return (
    <section className="w-full bg-[#fcf9f4] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* ================= BLOK 1: PODACI O KONTAKTU ================= */}
        <div className="w-full bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] border border-black/[0.01] flex flex-col gap-6">
          
          {/* Nadnaslov */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c5a46e]" />
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
              Kontakt
            </span>
          </div>

          {/* Glavni Naslov */}
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a] leading-tight font-normal max-w-2xl">
            Spreman prostor za tvoje podatke.
          </h2>

          {/* Opis */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl font-light">
            Zamijeni ove podatke svojim telefonom, emailom, adresom, radnim vremenom i društvenim mrežama.
          </p>

          {/* Separator */}
          <div className="w-full h-[1px] bg-gray-100 my-2" />

          {/* Podaci - Telefon */}
          <div className="flex flex-col gap-1.5">
            <span className="font-serif text-[#1a1a1a] text-base font-medium">
              Telefon
            </span>
            <a 
              href="tel:+38700000000" 
              className="text-gray-400 text-sm font-light hover:text-[#c5a46e] transition-colors w-fit"
            >
              +387 00 000 000
            </a>
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-gray-100 my-2" />

          {/* Podaci - Email */}
          <div className="flex flex-col gap-1.5">
            <span className="font-serif text-[#1a1a1a] text-base font-medium">
              Email
            </span>
            <a 
              href="mailto:info@autra-nekretnine.ba" 
              className="text-gray-400 text-sm font-light hover:text-[#c5a46e] transition-colors w-fit"
            >
              info@autra-nekretnine.ba
            </a>
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-gray-100 my-2" />

          {/* Podaci - Adresa */}
          <div className="flex flex-col gap-1.5">
            <span className="font-serif text-[#1a1a1a] text-base font-medium">
              Adresa
            </span>
            <span className="text-gray-400 text-sm font-light">
              Ulica i broj, Grad, BiH
            </span>
          </div>
        </div>

        {/* ================= BLOK 2: KONTAKT FORMA ================= */}
        <div className="w-full bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] border border-black/[0.01]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Ime i prezime */}
            <div>
              <input
                type="text"
                placeholder="Ime i prezime"
                value={ime}
                onChange={(e) => setIme(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-2xl bg-[#fcf9f4]/50 border border-black/[0.03] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#c5a46e]/30 focus:bg-[#fcf9f4] transition-all font-light"
              />
            </div>

            {/* Email adresa */}
            <div>
              <input
                type="email"
                placeholder="Email adresa"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-2xl bg-[#fcf9f4]/50 border border-black/[0.03] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#c5a46e]/30 focus:bg-[#fcf9f4] transition-all font-light"
              />
            </div>

            {/* Padajući izbornik (Select) */}
            <div className="relative">
              <select
                value={interes}
                onChange={(e) => setInteres(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-[#fcf9f4]/50 border border-black/[0.03] text-sm text-gray-700 focus:outline-none focus:border-[#c5a46e]/30 focus:bg-[#fcf9f4] transition-all font-light appearance-none cursor-pointer"
              >
                <option value="kupovina">Interesuje me kupovina</option>
                <option value="najam">Interesuje me najam</option>
                <option value="prodaja">Interesuje me prodaja / procjena</option>
              </select>
              {/* Custom strelica za select u stilu slike */}
              <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-gray-500 text-xs">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Poruka textarea */}
            <div>
              <textarea
                placeholder="Poruka"
                rows={5}
                value={poruka}
                onChange={(e) => setPoruka(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-2xl bg-[#fcf9f4]/50 border border-black/[0.03] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#c5a46e]/30 focus:bg-[#fcf9f4] transition-all font-light resize-none"
              />
            </div>

            {/* Gumb za slanje */}
            <button
              type="submit"
              className="w-full mt-2 py-4 bg-[#c5a46e] text-[#1a1a1a] font-serif font-medium text-sm rounded-2xl hover:bg-[#b3925c] transition-colors duration-300 shadow-md text-center"
            >
              Pošalji upit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}