import Image from "next/image";

export const metadata = {
  title: 'Portfolio | Trava',
  description: 'Pogledajte primjere naših završenih projekata održavanja i uređenja zelenih površina.',
};

const projekti = [
  {
    naziv: 'Uređenje dvorišta ',
    opis: 'Kompletno uređenje privatnog dvorišta, košenje, sadnja cvijeća i postavljanje travnjaka.',
    slika: '/t12.jpg',
  },
  {
    naziv: 'Održavanje parka ',
    opis: 'Redovno košenje, rezidba i čišćenje javnog parka u centru grada.',
    slika: '/t8.jpg',
  },
  {
    naziv: 'Sezonsko uređenje vrtova ',
    opis: 'Priprema i održavanje vrtova tokom proljeća i jeseni za stambeni kompleks.',
    slika: '/t9.jpg',
  },
  {
    naziv: 'Poslovni prostor ',
    opis: 'Održavanje zelenih površina oko poslovnog objekta, košenje i odvoz otpada.',
    slika: '/t10.jpg',
  },
];

export default function PortfolioPage() {
  return (
    <section className="max-w-6xl mx-auto mt-24 pb-28 px-4">
      <div className="h-16 md:h-20"></div>
      <h1 className="text-4xl font-bold mb-10 text-green-700">Portfolio</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projekti.map((p, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
              <Image src={p.slika} alt={p.naziv} width={600} height={224} className="h-56 w-full object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-green-700">{p.naziv}</h2>
            <p className="text-gray-700">{p.opis}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
