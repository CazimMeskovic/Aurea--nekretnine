'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/trlog.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl text-green-700">Kosonje Pecanin</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-medium text-gray-700">
            <li><Link href="/" className="hover:text-green-700 transition">Početna</Link></li>
            <li><Link href="/about" className="hover:text-green-700 transition">O nama</Link></li>
            <li><Link href="/services" className="hover:text-green-700 transition">Usluge</Link></li>
            <li><Link href="/portfolio" className="hover:text-green-700 transition">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-green-700 transition">Kontakt</Link></li>
          </ul>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-72 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium p-10 mt-16 text-gray-800">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-green-700 transition">Početna</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-green-700 transition">O nama</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="hover:text-green-700 transition">Usluge</Link>
          <Link href="/portfolio" onClick={() => setOpen(false)} className="hover:text-green-700 transition">Portfolio</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-green-700 transition">Kontakt</Link>
        </nav>
      </div>

      {/* Background overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden"
        ></div>
      )}
    </header>
  );
}
