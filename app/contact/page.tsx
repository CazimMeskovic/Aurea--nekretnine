import ContactForm from '../../src/components/ContactForm';
import ContactInfo from '../../src/components/ContactInfo';

export const metadata = {
  title: 'Kontakt | Trava',
  description: 'Kontaktirajte nas za ponudu, informacije ili dogovor oko održavanja zelenih površina. Brz odgovor i profesionalna komunikacija.',
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto mt-24 pb-24 px-4">
      <div className="h-16 md:h-20"></div>
      <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
      <div className="mt-8">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
        </div>
      </div>
    </section>
  );
}
