import React from 'react';
import Image from 'next/image';
const services = [
  {
    title: 'Košenje i održavanje travnjaka',
    desc: 'Redovno i profesionalno košenje, zalijevanje i održavanje travnjaka.',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616494.png',
  },
  {
    title: 'Uređenje dvorišta i vrtova',
    desc: 'Kreativno i funkcionalno uređenje dvorišta i vrtova po vašim željama.',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616494.png',
  },
  {
    title: 'Održavanje parkova i javnih površina',
    desc: 'Profesionalno održavanje parkova, igrališta i javnih zelenih površina.',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616494.png',
  },
  {
    title: 'Rezidba drveća i živice',
    desc: 'Stručno orezivanje drveća i živice za zdrav rast i lijep izgled.',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616494.png',
  },
  {
    title: 'Čišćenje i uređenje terena',
    desc: 'Uklanjanje otpada, čišćenje i priprema terena za nove projekte.',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616494.png',
  },
  {
    title: 'Dugoročni ugovori održavanja',
    desc: 'Povoljni dugoročni ugovori za kontinuirano održavanje vaših površina.',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616494.png',
  },
];

export default function ServiceList() {
  return (
    <div className="grid gap-8 md:grid-cols-3 pb-28 ">
      {services.map((service, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            <Image src={service.icon} alt={service.title} width={64} height={64} className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-700 text-center">{service.title}</h3>
          <p className="text-gray-700 text-center">{service.desc}</p>
        </div>
      ))}
    </div>
  );
}
