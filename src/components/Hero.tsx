import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      
      {/* Background image */}
      <Image
        src="/kos2.jpg"
        alt="Košenje i održavanje zelenih površina"
        fill
        className="object-cover"
        priority={false} // lazy loading
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Košenje i održavanje zelenih površina Pecanin Gradiška
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Brzo, pouzdano i kvalitetno održavanje dvorišta, parkova i poslovnih prostora
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-100 transition"
          >
            Kontakt
          </Link>
          <Link
            href="/contact"
            className="bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-800 transition"
          >
            Zatraži ponudu
          </Link>
        </div>
      </div>
    </section>
  );
}
