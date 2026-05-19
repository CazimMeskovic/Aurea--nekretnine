const benefits = [
  {
    title: 'Iskusni tim',
    desc: 'Naš tim čine stručnjaci sa dugogodišnjim iskustvom u održavanju zelenih površina.',
    icon: '🌱',
  },
  {
    title: 'Profesionalna oprema',
    desc: 'Koristimo najmoderniju opremu za efikasno i kvalitetno održavanje.',
    icon: '🛠️',
  },
  {
    title: 'Brza usluga',
    desc: 'Garantujemo brz dolazak i završetak posla u dogovorenom roku.',
    icon: '⚡',
  },
  {
    title: 'Povjerenje klijenata',
    desc: 'Naši klijenti nam vjeruju zbog kvaliteta i pouzdanosti.',
    icon: '🤝',
  },
  {
    title: 'Pristupačne cijene',
    desc: 'Nudimo konkurentne cijene uz vrhunsku uslugu.',
    icon: '💸',
  },
];

export default function Benefits() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Zašto odabrati nas?</h2>
      <div className="grid gap-8 md:grid-cols-5">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <span className="text-4xl mb-4">{benefit.icon}</span>
            <h3 className="text-lg font-semibold mb-2 text-green-700 text-center">{benefit.title}</h3>
            <p className="text-gray-700 text-center">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
