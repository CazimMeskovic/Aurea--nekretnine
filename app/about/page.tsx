import CTA from "@/components/CTA";

export const metadata = {
  title: 'O nama | Trava',
  description: 'Saznajte više o našoj firmi, misiji, viziji i vrijednostima. Profesionalno održavanje zelenih površina za privatne i poslovne klijente.',
};

export default function AboutPage() {
  return (
    
    <div className="w-full   ">

      {/* Intro */}
    <section className="max-w-5xl mx-auto  sm:pb-16 px-4">
      <div className="h-16 md:h-20"></div>

        <h1 className="text-4xl md:text-5xl font-bold  mb-6">O nama</h1>
        <p className="mb-10 text-lg text-gray-700 leading-relaxed">
          Naša firma pruža profesionalne usluge održavanja zelenih površina za privatne i poslovne klijente.
          Fokusirani smo na kvalitet, pouzdanost i dugoročne rezultate.
        </p>

        {/* Misija / Vizija / Vrijednosti */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-green-700">Misija</h2>
            <p className="text-gray-700">
              Naša misija je pružiti vrhunsku uslugu održavanja zelenih površina, koristeći modernu opremu i stručan tim.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-green-700">Vizija</h2>
            <p className="text-gray-700">
              Želimo biti lideri u industriji, prepoznati po kvaliteti, pouzdanosti i dugoročnom povjerenju klijenata.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-green-700">Vrijednosti</h2>
            <p className="text-gray-700">
              Profesionalnost, odgovornost, transparentnost i posvećenost svakom klijentu.
            </p>
          </div>
        </div>
      </section>

      {/* Zašto postojimo */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Zašto postojimo?</h2>
            <p className="text-gray-700 leading-relaxed">
              Postojimo kako bismo klijentima omogućili da uživaju u urednim, zdravim i estetski uređenim zelenim površinama,
              bez brige o održavanju i organizaciji posla.
            </p>
          </div>
          <ul className="space-y-4 text-gray-700">
            <li>✅ Dugoročna rješenja za održavanje</li>
            <li>✅ Fleksibilni paketi usluga</li>
            <li>✅ Prilagođen pristup svakom projektu</li>
            <li>✅ Brza i pouzdana realizacija</li>
          </ul>
        </div>
      </section>

      {/* Statistika */}
     <section className="py-16">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 text-center">

    <div className="flex-1">
      <p className="text-4xl font-bold text-green-700">10+</p>
      <p className="text-gray-600 mt-2">godina iskustva</p>
    </div>

    <div className="flex-1">
      <p className="text-4xl font-bold text-green-700">300+</p>
      <p className="text-gray-600 mt-2">zadovoljnih klijenata</p>
    </div>

    <div className="flex-1">
      <p className="text-4xl font-bold text-green-700">500+</p>
      <p className="text-gray-600 mt-2">odrađenih projekata</p>
    </div>

    <div className="flex-1">
      <p className="text-4xl font-bold text-green-700">100%</p>
      <p className="text-gray-600 mt-2">posvećenost kvalitetu</p>
    </div>

  </div>
</section>
<section className="bg-green-700 text-white py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">
      Kako radimo
    </h2>

    <div className="flex flex-col md:flex-row gap-8 text-center">

      <div className="flex-1 bg-white/10 p-6 rounded-xl">
        <p className="text-4xl font-bold mb-2">1</p>
        <h3 className="font-semibold mb-2">Analiza terena</h3>
        <p className="text-white/80">
          Procjenjujemo stanje i potrebe prostora.
        </p>
      </div>

      <div className="flex-1 bg-white/10 p-6 rounded-xl">
        <p className="text-4xl font-bold mb-2">2</p>
        <h3 className="font-semibold mb-2">Plan usluge</h3>
        <p className="text-white/80">
          Kreiramo prilagođeno rješenje za klijenta.
        </p>
      </div>

      <div className="flex-1 bg-white/10 p-6 rounded-xl">
        <p className="text-4xl font-bold mb-2">3</p>
        <h3 className="font-semibold mb-2">Izvođenje radova</h3>
        <p className="text-white/80">
          Profesionalno i efikasno realizujemo posao.
        </p>
      </div>

      <div className="flex-1 bg-white/10 p-6 rounded-xl">
        <p className="text-4xl font-bold mb-2">4</p>
        <h3 className="font-semibold mb-2">Održavanje</h3>
        <p className="text-white/80">
          Osiguravamo dugoročni kvalitet i urednost.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
    
<CTA />
      
      
      {/* <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Trebate pouzdanu firmu za održavanje zelenih površina?
          </h2>
          <p className="mb-8 text-white/80">
            Kontaktirajte nas i zatražite besplatnu ponudu prilagođenu vašim potrebama.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-lg font-semibold"
          >
            Zatraži ponudu
          </a>
        </div>
      </section>
 */}
    </div>
    
  );
}
