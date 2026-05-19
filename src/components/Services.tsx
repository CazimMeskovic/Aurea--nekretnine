import Image from "next/image";

const services = [
  {
    title: 'Košenje trave',
    desc: 'Profesionalno košenje trave za privatne i poslovne površine.',
    img: '/t1.jpg',
  },
  {
    title: 'Održavanje dvorišta',
    desc: 'Redovno održavanje dvorišta, uklanjanje korova i otpada.',
    img: '/t2.jpg',
  },
  {
    title: 'Uređenje vrtova i parkova',
    desc: 'Kreativno uređenje vrtova i parkova po vašim željama.',
    img: '/t3.jpg',
  },
  {
    title: 'Rezidba drveća i živice',
    desc: 'Stručno orezivanje drveća i živice za zdrav rast.',
    img: '/t4.jpg',
  },
  {
    title: 'Čišćenje i odvoz otpada',
    desc: 'Uklanjanje i odvoz zelenog otpada sa vašeg posjeda.',
    img: '/t5.jpg',
  },
  {
    title: 'Sezonsko održavanje',
    desc: 'Priprema i održavanje zelenih površina tokom svih sezona.',
    img: '/t6.jpg',
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Naše usluge</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center">
              <Image src={service.img} alt={service.title} width={400} height={128} className="h-32 w-full object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
