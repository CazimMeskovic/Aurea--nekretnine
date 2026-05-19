export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-6">
      <h2 className="text-xl font-bold text-green-700">
        Kontakt podaci
      </h2>

      <ul className="space-y-2 text-gray-700">
        <li>
          <strong>Telefon:</strong>{" "}
          <a
            href="tel:+38766 794 279"
            className="text-green-700 hover:underline"
          >
            +387 61 123 456
          </a>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@trava.ba"
            className="text-green-700 hover:underline"
          >
            info@trava.ba
          </a>
        </li>
        <li>
          <strong>Lokacija:</strong> Petra Mrkonjića 52, Gradiška, Bosna i Hercegovina
        </li>
      </ul>

      {/* Responsive Google Maps iframe */}
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <div className="relative w-full aspect-[16/9]">
          <iframe
            src="https://www.google.com/maps?q=Petra%20Mrkonji%C4%87a%2052%20Gradi%C5%A1ka&output=embed"
            className="absolute top-0 left-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
