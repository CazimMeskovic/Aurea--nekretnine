import React from 'react';

export default function SekcijaCetiri() {
  // Stavke s kvačicama izvučene izravno sa slike
  const stavke = [
    'Profesionalna prezentacija nekretnina',
    'Procjena, prodaja, kupovina i najam',
    'Mjesto za logo, oznake, certifikate i partnere',
    'Prostor za obavijesti i nove ponude',
  ];

  return (
    <section className="w-full bg-[#1a1a1a] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* VELIKI ZAOPLENI PLACEHOLDER ZA SLIKU (Gornji blok) */}
        <div 
          className="w-full h-64 sm:h-96 rounded-[2rem] shadow-2xl relative overflow-hidden group select-none"
          style={{
            // Prefinjeni zlatno-smeđi gradijent koji imitira sliku
            background: 'linear-gradient(135deg, #6b5331 0%, #3d301c 100%)',
          }}
        >
          {/* Suptilna tekstura u pozadini */}
          <div className="absolute inset-0 bg-black/10 opacity-40 transition-opacity duration-500 group-hover:opacity-20" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/60 text-xs uppercase tracking-widest bg-black/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Umetni fotografiju agencije
            </span>
          </div>
        </div>

        {/* STAKLENA KARTICA S TEKSTOM (Donji blok) */}
        <div className="w-full p-6 sm:p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-6 md:gap-8">
          
          {/* Nadnaslov sa zlatnom linijom */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c5a46e]" />
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
              O agenciji
            </span>
          </div>

          {/* Glavni Naslov */}
          <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight font-normal max-w-2xl">
            Diskretan, siguran i elegantan pristup prodaji.
          </h2>

          {/* Opisni tekst */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl font-light">
            Ovdje možeš napisati tekst o agenciji Autra Nekretnine, iskustvu, uslugama i načinu rada. 
            Dizajn je napravljen da izgleda ozbiljno, skupo i uredno.
          </p>

          {/* Lista sa zlatnim kvačicama */}
          <ul className="flex flex-col gap-3.5 pt-2">
            {stavke.map((stavka, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                {/* Custom zlatna kvačica (Checkmark) */}
                <span className="text-[#c5a46e] font-medium mt-0.5 select-none text-xs">
                  ✓
                </span>
                <span>{stavka}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}