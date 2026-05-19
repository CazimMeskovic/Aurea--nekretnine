import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 px-4 bg-green-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Zatražite ponudu ili kontaktirajte nas</h2>
      <p className="mb-8 text-lg">Vaša zelena površina zaslužuje najbolju njegu. Obratite nam se za besplatnu procjenu!</p>
      <Link href="/contact" className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-100 transition">Kontakt forma</Link>
    </section>
  );
}
