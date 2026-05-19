const testimonials = [
  {
    name: 'Amir K.',
    text: 'Brza i kvalitetna usluga! Dvorište nikad nije izgledalo bolje.',
  },
  {
    name: 'Jasmina P.',
    text: 'Tim Trava je pouzdan i profesionalan. Preporučujem svima!',
  },
  {
    name: 'Firma Zelenilo',
    text: 'Odlična saradnja i dugoročni ugovor. Sve preporuke.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8 text-green-700">Iskustva klijenata</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-100 rounded-lg shadow p-6">
            <p className="text-gray-800 italic mb-4">&quot;{t.text}&quot;</p>
            <span className="font-semibold text-green-700">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
