import React from 'react';
import ServiceList from '../../src/components/ServiceList';

export const metadata = {
  title: 'Usluge | Trava',
  description: 'Kompletna ponuda usluga: košenje trave, održavanje dvorišta, uređenje vrtova, rezidba drveća i živice, čišćenje terena, dugoročni ugovori.',
};

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto mt-24  px-4">
      <div className="h-16 md:h-20"></div>
      <h1 className="text-4xl  font-bold mb-8">Naše usluge</h1>
      <ServiceList />
    </section>
  );
}
