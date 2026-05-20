'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Definirano 5 linkova kako je traženo
  const navLinks = [
    { name: 'Početna', href: '/' },
    { name: 'O nama', href: '/o-nama' },
    { name: 'Usluge', href: '/usluge' },
    { name: 'Nekretnine', href: '/nekretnine' }, // Dodan logičan 5. link za agenciju
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="w-full bg-[#1a1a1a] border-b border-[#c5a46e]/20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO SEKCIJA (Identiteti sa slike) */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Kružni monogram "A" */}
            <div className="w-11 h-11 rounded-full border border-[#c5a46e] flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#151515] shadow-inner transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-[#c5a46e] text-lg font-bold tracking-wider">
                A
              </span>
            </div>
            
            {/* Tekstualni dio logotipa */}
            <div className="flex flex-col justify-center">
              <span className="font-serif text-white text-xl font-bold tracking-widest leading-none">
                AUTRA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-medium mt-1">
                Nekretnine
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGACIJA */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#c5a46e] transition-colors duration-300 font-medium relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a46e] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* HAMBURGER DUGME (Mobilni uređaji) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILNI MENU (Dropdown s animacijom) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#1a1a1a] border-b border-[#c5a46e]/10 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible h-0'
        }`}
      >
        <nav className="px-4 pt-2 pb-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#c5a46e] transition-colors duration-200 py-2 border-b border-white/5 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}